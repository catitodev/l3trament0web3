import { supabase } from './supabase'

// Função para importar conteúdo do HackMD
export async function importFromHackMD(noteId: string): Promise<string | null> {
  try {
    // Tenta diferentes formatos de URL do HackMD
    const urls = [
      `https://hackmd.io/${noteId}/download`,
      `https://hackmd.io/${noteId}/export`,
      `https://hackmd.io/api/v1/notes/${noteId}/export/markdown`
    ]

    for (const url of urls) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'text/markdown, text/plain, */*',
            'User-Agent': 'L3trament0Web3-Sync/1.0'
          }
        })

        if (response.ok) {
          const markdown = await response.text()
          if (markdown && markdown.trim().length > 0) {
            return markdown
          }
        }
      } catch (error) {
        console.warn(`Erro ao tentar URL ${url}:`, error)
        continue
      }
    }

    throw new Error('Nenhuma URL funcionou')
  } catch (error) {
    console.error('Erro ao importar do HackMD:', error)
    return null
  }
}

// Função para extrair ID da nota do HackMD de diferentes formatos de URL
export function extractHackMDNoteId(url: string): string | null {
  try {
    // Formatos suportados:
    // https://hackmd.io/abc123
    // https://hackmd.io/@user/abc123
    // https://hackmd.io/folders/abc123
    // https://hackmd.io/abc123?view
    
    const patterns = [
      /hackmd\.io\/([a-zA-Z0-9_-]+)(?:\?|$)/,
      /hackmd\.io\/@[^\/]+\/([a-zA-Z0-9_-]+)(?:\?|$)/,
      /hackmd\.io\/folders\/([a-zA-Z0-9_-]+)(?:\?|$)/
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }

    return null
  } catch (error) {
    console.error('Erro ao extrair ID da nota:', error)
    return null
  }
}

// Função para sincronizar conteúdo do HackMD com Supabase
export async function syncHackMDContent(blocoId: string, hackmdUrl: string): Promise<boolean> {
  try {
    const noteId = extractHackMDNoteId(hackmdUrl)
    if (!noteId) {
      throw new Error('URL do HackMD inválida')
    }

    const markdown = await importFromHackMD(noteId)
    if (!markdown) {
      throw new Error('Não foi possível importar o conteúdo')
    }

    // Atualiza o bloco no Supabase
    const { error } = await supabase
      .from('blocos')
      .update({ 
        markdown_content: markdown, 
        updated_at: new Date().toISOString()
      })
      .eq('id', blocoId)

    if (error) {
      console.error('Erro ao sincronizar com Supabase:', error)
      return false
    }

    console.log(`Conteúdo sincronizado com sucesso para o bloco ${blocoId}`)
    return true
  } catch (error) {
    console.error('Erro na sincronização:', error)
    return false
  }
}

// Função para sincronizar múltiplos blocos
export async function syncMultipleBlocks(syncMap: { blocoId: string; hackmdUrl: string }[]): Promise<{
  success: number;
  failed: number;
  errors: string[];
}> {
  const results = {
    success: 0,
    failed: 0,
    errors: [] as string[]
  }

  for (const { blocoId, hackmdUrl } of syncMap) {
    try {
      const success = await syncHackMDContent(blocoId, hackmdUrl)
      if (success) {
        results.success++
      } else {
        results.failed++
        results.errors.push(`Falha ao sincronizar bloco ${blocoId}`)
      }
    } catch (error) {
      results.failed++
      results.errors.push(`Erro no bloco ${blocoId}: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }

  return results
}

// Função para processar markdown e extrair metadados
export function parseMarkdownContent(markdown: string): {
  title?: string;
  description?: string;
  sections: Array<{
    title: string;
    content: string;
    order: number;
    type: 'conteudo' | 'exercicio' | 'reflexao';
  }>;
} {
  const sections: Array<{
    title: string;
    content: string;
    order: number;
    type: 'conteudo' | 'exercicio' | 'reflexao';
  }> = []

  let title: string | undefined
  let description: string | undefined

  // Divide o markdown em seções baseado em headers H2 (##)
  const lines = markdown.split('\n')
  let currentSection: { title: string; content: string; order: number; type: 'conteudo' | 'exercicio' | 'reflexao' } | null = null
  let sectionOrder = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Título principal (H1)
    if (line.startsWith('# ') && !title) {
      title = line.substring(2).trim()
      continue
    }

    // Seção nova (H2)
    if (line.startsWith('## ')) {
      // Salva seção anterior se existir
      if (currentSection) {
        sections.push(currentSection)
      }

      // Cria nova seção
      const sectionTitle = line.substring(3).trim()
      let sectionType: 'conteudo' | 'exercicio' | 'reflexao' = 'conteudo'

      // Determina tipo baseado no título
      if (sectionTitle.toLowerCase().includes('exercício') || sectionTitle.toLowerCase().includes('atividade')) {
        sectionType = 'exercicio'
      } else if (sectionTitle.toLowerCase().includes('reflexão') || sectionTitle.toLowerCase().includes('reflita')) {
        sectionType = 'reflexao'
      }

      currentSection = {
        title: sectionTitle,
        content: '',
        order: sectionOrder++,
        type: sectionType
      }
      continue
    }

    // Adiciona linha ao conteúdo da seção atual
    if (currentSection) {
      currentSection.content += line + '\n'
    } else if (!description && line.trim() && !line.startsWith('#')) {
      // Primeira linha de texto não-header pode ser descrição
      description = line.trim()
    }
  }

  // Adiciona última seção
  if (currentSection) {
    sections.push(currentSection)
  }

  return {
    title,
    description,
    sections
  }
}

// Função para criar bloco completo com seções a partir do HackMD
export async function createBlocoFromHackMD(
  hackmdUrl: string,
  ordem: number,
  xpReward: number = 100
): Promise<string | null> {
  try {
    const noteId = extractHackMDNoteId(hackmdUrl)
    if (!noteId) {
      throw new Error('URL do HackMD inválida')
    }

    const markdown = await importFromHackMD(noteId)
    if (!markdown) {
      throw new Error('Não foi possível importar o conteúdo')
    }

    const parsed = parseMarkdownContent(markdown)
    
    // Cria o bloco
    const { data: bloco, error: blocoError } = await supabase
      .from('blocos')
      .insert({
        titulo: parsed.title || 'Bloco sem título',
        descricao: parsed.description,
        ordem,
        markdown_content: markdown,
        xp_reward: xpReward,
        ativo: true
      })
      .select()
      .single()

    if (blocoError) {
      throw new Error(`Erro ao criar bloco: ${blocoError.message}`)
    }

    // Cria as seções
    if (parsed.sections.length > 0) {
      const secoesData = parsed.sections.map(section => ({
        bloco_id: bloco.id,
        titulo: section.title,
        conteudo_markdown: section.content,
        ordem: section.order,
        tipo: section.type
      }))

      const { error: secoesError } = await supabase
        .from('secoes')
        .insert(secoesData)

      if (secoesError) {
        console.error('Erro ao criar seções:', secoesError)
        // Não falha o processo, apenas registra o erro
      }
    }

    console.log(`Bloco criado com sucesso: ${bloco.id}`)
    return bloco.id
  } catch (error) {
    console.error('Erro ao criar bloco do HackMD:', error)
    return null
  }
}

// Função para validar se URL do HackMD é acessível
export async function validateHackMDUrl(url: string): Promise<boolean> {
  try {
    const noteId = extractHackMDNoteId(url)
    if (!noteId) {
      return false
    }

    const markdown = await importFromHackMD(noteId)
    return markdown !== null && markdown.trim().length > 0
  } catch (error) {
    return false
  }
}

// Configuração para mapeamento de URLs do HackMD
export const HACKMD_SYNC_CONFIG = {
  // Aqui você pode configurar os mapeamentos
  // Exemplo: 'bloco-1': 'https://hackmd.io/abc123'
  mappings: {} as Record<string, string>,
  
  // Adicionar novo mapeamento
  addMapping(blocoId: string, hackmdUrl: string) {
    this.mappings[blocoId] = hackmdUrl
  },
  
  // Obter URL do HackMD para um bloco
  getHackMDUrl(blocoId: string): string | null {
    return this.mappings[blocoId] || null
  },
  
  // Sincronizar todos os blocos mapeados
  async syncAll(): Promise<{
    success: number;
    failed: number;
    errors: string[];
  }> {
    const syncMap = Object.entries(this.mappings).map(([blocoId, hackmdUrl]) => ({
      blocoId,
      hackmdUrl
    }))
    
    return await syncMultipleBlocks(syncMap)
  }
}