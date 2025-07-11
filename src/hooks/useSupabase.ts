import { useState, useEffect, useCallback } from 'react'
import { supabase, type Bloco, type Secao, type UserProfile, type UserProgress, type UserReport } from '../lib/supabase'

// Hook para gerenciar blocos
export function useBlocos() {
  const [blocos, setBlocos] = useState<Bloco[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBlocos = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('blocos')
        .select('*')
        .eq('ativo', true)
        .order('ordem')

      if (error) throw error
      setBlocos(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar blocos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBlocos()
  }, [fetchBlocos])

  const createBloco = useCallback(async (bloco: Omit<Bloco, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('blocos')
        .insert(bloco)
        .select()
        .single()

      if (error) throw error
      await fetchBlocos() // Recarrega a lista
      return data
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao criar bloco')
    }
  }, [fetchBlocos])

  const updateBloco = useCallback(async (id: string, updates: Partial<Bloco>) => {
    try {
      const { error } = await supabase
        .from('blocos')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error
      await fetchBlocos() // Recarrega a lista
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao atualizar bloco')
    }
  }, [fetchBlocos])

  return {
    blocos,
    loading,
    error,
    refetch: fetchBlocos,
    createBloco,
    updateBloco
  }
}

// Hook para gerenciar seções de um bloco
export function useSecoes(blocoId: string) {
  const [secoes, setSecoes] = useState<Secao[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSecoes = useCallback(async () => {
    if (!blocoId) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('secoes')
        .select('*')
        .eq('bloco_id', blocoId)
        .order('ordem')

      if (error) throw error
      setSecoes(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar seções')
    } finally {
      setLoading(false)
    }
  }, [blocoId])

  useEffect(() => {
    fetchSecoes()
  }, [fetchSecoes])

  return {
    secoes,
    loading,
    error,
    refetch: fetchSecoes
  }
}

// Hook para gerenciar perfil do usuário
export function useUserProfile(userId?: string) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProfile = useCallback(async () => {
    if (!userId) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // Perfil não existe, retorna null
          setProfile(null)
        } else {
          throw error
        }
      } else {
        setProfile(data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar perfil')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  const createProfile = useCallback(async (profileData: Omit<UserProfile, 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .insert(profileData)
        .select()
        .single()

      if (error) throw error
      setProfile(data)
      return data
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao criar perfil')
    }
  }, [])

  const updateProfile = useCallback(async (updates: Partial<UserProfile>) => {
    if (!userId) return

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      setProfile(data)
      return data
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao atualizar perfil')
    }
  }, [userId])

  return {
    profile,
    loading,
    error,
    refetch: fetchProfile,
    createProfile,
    updateProfile
  }
}

// Hook para gerenciar progresso do usuário
export function useUserProgress(userId?: string) {
  const [progress, setProgress] = useState<UserProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProgress = useCallback(async () => {
    if (!userId) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('user_progress')
        .select('*, blocos(titulo), secoes(titulo)')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setProgress(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar progresso')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchProgress()
  }, [fetchProgress])

  const markCompleted = useCallback(async (blocoId: string, secaoId?: string, xpEarned: number = 0) => {
    if (!userId) return

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          bloco_id: blocoId,
          secao_id: secaoId,
          completed: true,
          xp_earned: xpEarned,
          completed_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      
      // Atualiza XP total do usuário
      await supabase.rpc('update_user_xp', {
        user_id: userId,
        xp_to_add: xpEarned
      })

      await fetchProgress()
      return data
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao marcar como completo')
    }
  }, [userId, fetchProgress])

  const getProgressForBloco = useCallback((blocoId: string) => {
    return progress.filter(p => p.bloco_id === blocoId)
  }, [progress])

  const isCompleted = useCallback((blocoId: string, secaoId?: string) => {
    return progress.some(p => 
      p.bloco_id === blocoId && 
      (!secaoId || p.secao_id === secaoId) && 
      p.completed
    )
  }, [progress])

  return {
    progress,
    loading,
    error,
    refetch: fetchProgress,
    markCompleted,
    getProgressForBloco,
    isCompleted
  }
}

// Hook para gerenciar relatórios do usuário
export function useUserReports(userId?: string) {
  const [reports, setReports] = useState<UserReport[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchReports = useCallback(async () => {
    if (!userId) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('user_reports')
        .select('*, blocos(titulo)')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setReports(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar relatórios')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchReports()
  }, [fetchReports])

  const createReport = useCallback(async (reportData: Omit<UserReport, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    if (!userId) return

    try {
      const { data, error } = await supabase
        .from('user_reports')
        .insert({
          ...reportData,
          user_id: userId
        })
        .select()
        .single()

      if (error) throw error
      await fetchReports()
      return data
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao criar relatório')
    }
  }, [userId, fetchReports])

  const getReportForBloco = useCallback((blocoId: string) => {
    return reports.find(r => r.bloco_id === blocoId)
  }, [reports])

  return {
    reports,
    loading,
    error,
    refetch: fetchReports,
    createReport,
    getReportForBloco
  }
}

// Hook para estatísticas gerais
export function useStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBlocos: 0,
    totalCompletions: 0,
    totalReports: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true)
      
      const [usersResult, blocosResult, progressResult, reportsResult] = await Promise.all([
        supabase.from('user_profiles').select('id', { count: 'exact' }),
        supabase.from('blocos').select('id', { count: 'exact' }).eq('ativo', true),
        supabase.from('user_progress').select('id', { count: 'exact' }).eq('completed', true),
        supabase.from('user_reports').select('id', { count: 'exact' })
      ])

      setStats({
        totalUsers: usersResult.count || 0,
        totalBlocos: blocosResult.count || 0,
        totalCompletions: progressResult.count || 0,
        totalReports: reportsResult.count || 0
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar estatísticas')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStats()
  }, [fetchStats])

  return {
    stats,
    loading,
    error,
    refetch: fetchStats
  }
}