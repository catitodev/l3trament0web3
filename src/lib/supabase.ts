import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos TypeScript para o banco de dados
export interface Database {
  public: {
    Tables: {
      blocos: {
        Row: {
          id: string
          titulo: string
          descricao: string | null
          ordem: number
          ativo: boolean
          markdown_content: string | null
          xp_reward: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          titulo: string
          descricao?: string | null
          ordem: number
          ativo?: boolean
          markdown_content?: string | null
          xp_reward?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          titulo?: string
          descricao?: string | null
          ordem?: number
          ativo?: boolean
          markdown_content?: string | null
          xp_reward?: number
          created_at?: string
          updated_at?: string
        }
      }
      secoes: {
        Row: {
          id: string
          bloco_id: string
          titulo: string
          conteudo_markdown: string | null
          ordem: number
          tipo: string
          recursos_extras: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          bloco_id: string
          titulo: string
          conteudo_markdown?: string | null
          ordem: number
          tipo?: string
          recursos_extras?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          bloco_id?: string
          titulo?: string
          conteudo_markdown?: string | null
          ordem?: number
          tipo?: string
          recursos_extras?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          username: string | null
          email: string | null
          nome_completo: string | null
          perfil_exploratorio: string | null
          xp_total: number
          level: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          email?: string | null
          nome_completo?: string | null
          perfil_exploratorio?: string | null
          xp_total?: number
          level?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          email?: string | null
          nome_completo?: string | null
          perfil_exploratorio?: string | null
          xp_total?: number
          level?: number
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          bloco_id: string
          secao_id: string | null
          completed: boolean
          xp_earned: number
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          bloco_id: string
          secao_id?: string | null
          completed?: boolean
          xp_earned?: number
          completed_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          bloco_id?: string
          secao_id?: string | null
          completed?: boolean
          xp_earned?: number
          completed_at?: string | null
          created_at?: string
        }
      }
      user_reports: {
        Row: {
          id: string
          user_id: string
          bloco_id: string
          conteudo: string
          reflexoes: any | null
          perfil_exploratorio: string | null
          aprovado: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          bloco_id: string
          conteudo: string
          reflexoes?: any | null
          perfil_exploratorio?: string | null
          aprovado?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          bloco_id?: string
          conteudo?: string
          reflexoes?: any | null
          perfil_exploratorio?: string | null
          aprovado?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      achievements: {
        Row: {
          id: string
          nome: string
          descricao: string | null
          icone: string | null
          xp_required: number | null
          tipo: string | null
          condicoes: any | null
          created_at: string
        }
        Insert: {
          id?: string
          nome: string
          descricao?: string | null
          icone?: string | null
          xp_required?: number | null
          tipo?: string | null
          condicoes?: any | null
          created_at?: string
        }
        Update: {
          id?: string
          nome?: string
          descricao?: string | null
          icone?: string | null
          xp_required?: number | null
          tipo?: string | null
          condicoes?: any | null
          created_at?: string
        }
      }
      user_achievements: {
        Row: {
          id: string
          user_id: string
          achievement_id: string
          earned_at: string
        }
        Insert: {
          id?: string
          user_id: string
          achievement_id: string
          earned_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          achievement_id?: string
          earned_at?: string
        }
      }
    }
  }
}

export type Bloco = Database['public']['Tables']['blocos']['Row']
export type Secao = Database['public']['Tables']['secoes']['Row']
export type UserProfile = Database['public']['Tables']['user_profiles']['Row']
export type UserProgress = Database['public']['Tables']['user_progress']['Row']
export type UserReport = Database['public']['Tables']['user_reports']['Row']
export type Achievement = Database['public']['Tables']['achievements']['Row']
export type UserAchievement = Database['public']['Tables']['user_achievements']['Row']

// Tipos para perfis exploratórios
export type PerfilExploratorio = 'regenerativo' | 'comunitario' | 'inovador' | 'estrategico' | 'netweaver'

// Tipos para tipos de seção
export type TipoSecao = 'conteudo' | 'exercicio' | 'reflexao' | 'video' | 'recurso'

// Tipos para tipos de conquista
export type TipoAchievement = 'bloco' | 'xp' | 'streak' | 'especial'