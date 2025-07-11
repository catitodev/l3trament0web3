# 🚀 **GUIA COMPLETO SUPABASE - L3TRAMENT0WEB3**

## 📋 **PASSO 1: CRIAR CONTA SUPABASE**

### **1.1 Acesse o Supabase**
```
https://supabase.com
```

### **1.2 Criar Conta**
- Clique em "Start your project"
- Faça login com GitHub (recomendado)
- Ou crie conta com email

### **1.3 Criar Novo Projeto**
- Nome: `l3trament0web3`
- Senha do banco: `[GERE UMA SENHA FORTE]`
- Região: `South America (São Paulo)`
- Plano: `Free` (2 projetos gratuitos)

---

## 📊 **PASSO 2: ESTRUTURA DO BANCO DE DADOS**

### **2.1 Tabelas Principais**

#### **📚 BLOCOS DE CONTEÚDO**
```sql
CREATE TABLE blocos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    ordem INTEGER NOT NULL,
    ativo BOOLEAN DEFAULT true,
    markdown_content TEXT,
    xp_reward INTEGER DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **📄 SEÇÕES DENTRO DOS BLOCOS**
```sql
CREATE TABLE secoes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    bloco_id UUID REFERENCES blocos(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    conteudo_markdown TEXT,
    ordem INTEGER NOT NULL,
    tipo VARCHAR(50) DEFAULT 'conteudo', -- 'conteudo', 'exercicio', 'reflexao'
    recursos_extras JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **👥 USUÁRIOS (PERFIS)**
```sql
CREATE TABLE user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(255),
    nome_completo VARCHAR(255),
    perfil_exploratorio VARCHAR(50), -- 'regenerativo', 'comunitario', 'inovador', 'estrategico', 'netweaver'
    xp_total INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **📈 PROGRESSO DOS USUÁRIOS**
```sql
CREATE TABLE user_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    bloco_id UUID REFERENCES blocos(id) ON DELETE CASCADE,
    secao_id UUID REFERENCES secoes(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    xp_earned INTEGER DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, bloco_id, secao_id)
);
```

#### **📝 RELATÓRIOS/REFLEXÕES**
```sql
CREATE TABLE user_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    bloco_id UUID REFERENCES blocos(id) ON DELETE CASCADE,
    conteudo TEXT NOT NULL,
    reflexoes JSONB,
    perfil_exploratorio VARCHAR(50),
    aprovado BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **🏆 CONQUISTAS**
```sql
CREATE TABLE achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    icone VARCHAR(100),
    xp_required INTEGER,
    tipo VARCHAR(50), -- 'bloco', 'xp', 'streak', 'especial'
    condicoes JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **🎯 CONQUISTAS DOS USUÁRIOS**
```sql
CREATE TABLE user_achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, achievement_id)
);
```

### **2.2 Índices para Performance**
```sql
-- Índices para consultas frequentes
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_bloco_id ON user_progress(bloco_id);
CREATE INDEX idx_secoes_bloco_id ON secoes(bloco_id);
CREATE INDEX idx_user_reports_user_id ON user_reports(user_id);
CREATE INDEX idx_user_reports_bloco_id ON user_reports(bloco_id);
```

### **2.3 Row Level Security (RLS)**
```sql
-- Habilitar RLS nas tabelas
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own progress" ON user_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own reports" ON user_reports
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own reports" ON user_reports
    FOR INSERT WITH CHECK (auth.uid() = user_id);
```

---

## 🔧 **PASSO 3: CONFIGURAÇÃO NO PROJETO**

### **3.1 Instalar Dependências**
```bash
npm install @supabase/supabase-js
npm install @supabase/auth-helpers-react
npm install @supabase/auth-ui-react
```

### **3.2 Variáveis de Ambiente**
```env
# .env.local
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **3.3 Cliente Supabase**
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

---

## 🎯 **PASSO 4: DADOS INICIAIS**

### **4.1 Conquistas Básicas**
```sql
INSERT INTO achievements (nome, descricao, icone, xp_required, tipo) VALUES
('Primeiro Passo', 'Completou o primeiro bloco', '🎯', 100, 'bloco'),
('Explorador', 'Acumulou 500 XP', '🚀', 500, 'xp'),
('Regenerativo', 'Completou trilha com perfil regenerativo', '🌱', 0, 'especial'),
('Netweaver', 'Conectou comunidades', '🌐', 0, 'especial');
```

### **4.2 Bloco 1 - Dados Iniciais**
```sql
INSERT INTO blocos (titulo, descricao, ordem, markdown_content, xp_reward) VALUES
('Protagonismo Regenerativo', 'Primeiro bloco da trilha de letramento digital', 1, 
'# Protagonismo Regenerativo

## Bem-vindo à sua jornada!

Este é o início da sua transformação digital...', 100);
```

---

## 🔄 **PASSO 5: INTEGRAÇÃO COM HACKMD**

### **5.1 Função para Importar Conteúdo**
```typescript
// src/lib/hackmd.ts
export async function importFromHackMD(noteId: string) {
  try {
    const response = await fetch(`https://hackmd.io/${noteId}/download`);
    const markdown = await response.text();
    return markdown;
  } catch (error) {
    console.error('Erro ao importar do HackMD:', error);
    return null;
  }
}
```

### **5.2 Sincronização Automática**
```typescript
// src/lib/sync.ts
import { supabase } from './supabase';
import { importFromHackMD } from './hackmd';

export async function syncHackMDContent(blocoId: string, hackmdNoteId: string) {
  const markdown = await importFromHackMD(hackmdNoteId);
  
  if (markdown) {
    const { error } = await supabase
      .from('blocos')
      .update({ markdown_content: markdown, updated_at: new Date() })
      .eq('id', blocoId);
    
    if (error) {
      console.error('Erro ao sincronizar:', error);
      return false;
    }
    
    return true;
  }
  
  return false;
}
```

---

## 📱 **PASSO 6: INTERFACE DE ADMIN**

### **6.1 Página de Administração**
```typescript
// src/pages/Admin.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function Admin() {
  const [blocos, setBlocos] = useState([]);
  
  useEffect(() => {
    fetchBlocos();
  }, []);
  
  const fetchBlocos = async () => {
    const { data } = await supabase
      .from('blocos')
      .select('*')
      .order('ordem');
    setBlocos(data || []);
  };
  
  return (
    <div className="admin-panel">
      <h1>Administração de Conteúdo</h1>
      {/* Interface para gerenciar blocos */}
    </div>
  );
}
```

---

## 🎉 **PRÓXIMOS PASSOS**

### **Agora você precisa:**

1. **Criar conta no Supabase** (5 min)
2. **Executar os SQLs** no editor do Supabase (10 min)
3. **Configurar variáveis de ambiente** (5 min)
4. **Me fornecer links específicos** do HackMD para integração

### **Depois eu implemento:**

1. **Autenticação completa**
2. **Sistema de progresso**
3. **Interface de admin**
4. **Sincronização HackMD**
5. **Analytics e relatórios**

---

## 🔗 **LINKS ÚTEIS**

- **Supabase Dashboard**: https://app.supabase.com
- **Documentação**: https://supabase.com/docs
- **SQL Editor**: No dashboard > SQL Editor
- **Auth**: No dashboard > Authentication

---

**🚀 Vamos começar? Crie sua conta no Supabase e me avise quando estiver pronto!**