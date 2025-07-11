import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Plus, 
  Edit, 
  Trash2, 
  RefreshCw, 
  Download, 
  Upload, 
  BarChart3, 
  Users, 
  BookOpen, 
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Settings,
  Database
} from 'lucide-react'
import { useBlocos, useStats } from '../hooks/useSupabase'
import { 
  syncHackMDContent, 
  createBlocoFromHackMD, 
  validateHackMDUrl, 
  HACKMD_SYNC_CONFIG 
} from '../lib/hackmd'

const Admin = () => {
  const { blocos, loading: blocosLoading, error: blocosError, refetch: refetchBlocos } = useBlocos()
  const { stats, loading: statsLoading, refetch: refetchStats } = useStats()
  
  const [activeTab, setActiveTab] = useState<'dashboard' | 'blocos' | 'sync' | 'config'>('dashboard')
  const [syncing, setSyncing] = useState(false)
  const [syncResults, setSyncResults] = useState<string[]>([])
  
  // Estados para formulários
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newBlocoData, setNewBlocoData] = useState({
    hackmdUrl: '',
    ordem: 1,
    xpReward: 100
  })

  // Atualiza estatísticas periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      refetchStats()
    }, 30000) // 30 segundos

    return () => clearInterval(interval)
  }, [refetchStats])

  // Função para sincronizar um bloco específico
  const handleSyncBloco = async (blocoId: string, hackmdUrl: string) => {
    setSyncing(true)
    try {
      const success = await syncHackMDContent(blocoId, hackmdUrl)
      if (success) {
        setSyncResults(prev => [...prev, `✅ Bloco ${blocoId} sincronizado com sucesso`])
        await refetchBlocos()
      } else {
        setSyncResults(prev => [...prev, `❌ Falha ao sincronizar bloco ${blocoId}`])
      }
    } catch (error) {
      setSyncResults(prev => [...prev, `❌ Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`])
    } finally {
      setSyncing(false)
    }
  }

  // Função para criar bloco do HackMD
  const handleCreateFromHackMD = async () => {
    if (!newBlocoData.hackmdUrl) {
      alert('Por favor, forneça a URL do HackMD')
      return
    }

    setSyncing(true)
    try {
      // Valida URL primeiro
      const isValid = await validateHackMDUrl(newBlocoData.hackmdUrl)
      if (!isValid) {
        throw new Error('URL do HackMD inválida ou inacessível')
      }

      const blocoId = await createBlocoFromHackMD(
        newBlocoData.hackmdUrl,
        newBlocoData.ordem,
        newBlocoData.xpReward
      )

      if (blocoId) {
        // Adiciona ao mapeamento de sincronização
        HACKMD_SYNC_CONFIG.addMapping(blocoId, newBlocoData.hackmdUrl)
        
        setSyncResults(prev => [...prev, `✅ Bloco criado com sucesso: ${blocoId}`])
        setShowCreateForm(false)
        setNewBlocoData({ hackmdUrl: '', ordem: 1, xpReward: 100 })
        await refetchBlocos()
        await refetchStats()
      } else {
        throw new Error('Falha ao criar bloco')
      }
    } catch (error) {
      setSyncResults(prev => [...prev, `❌ Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`])
    } finally {
      setSyncing(false)
    }
  }

  // Função para sincronizar todos os blocos
  const handleSyncAll = async () => {
    setSyncing(true)
    setSyncResults([])
    
    try {
      const results = await HACKMD_SYNC_CONFIG.syncAll()
      setSyncResults([
        `✅ Sincronizações bem-sucedidas: ${results.success}`,
        `❌ Sincronizações falharam: ${results.failed}`,
        ...results.errors
      ])
      
      if (results.success > 0) {
        await refetchBlocos()
      }
    } catch (error) {
      setSyncResults([`❌ Erro geral: ${error instanceof Error ? error.message : 'Erro desconhecido'}`])
    } finally {
      setSyncing(false)
    }
  }

  if (blocosLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Carregando dados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">Administração</h1>
                <p className="text-sm text-slate-600">L3trament0Web3</p>
              </div>
            </div>
            <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">
              ← Voltar para Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navegação por abas */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'blocos', label: 'Blocos', icon: BookOpen },
              { id: 'sync', label: 'Sincronização', icon: RefreshCw },
              { id: 'config', label: 'Configurações', icon: Database }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Conteúdo das abas */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Usuários</p>
                    <p className="text-2xl font-bold text-slate-800">
                      {statsLoading ? '...' : stats.totalUsers}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Blocos</p>
                    <p className="text-2xl font-bold text-slate-800">
                      {statsLoading ? '...' : stats.totalBlocos}
                    </p>
                  </div>
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Conclusões</p>
                    <p className="text-2xl font-bold text-slate-800">
                      {statsLoading ? '...' : stats.totalCompletions}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Relatórios</p>
                    <p className="text-2xl font-bold text-slate-800">
                      {statsLoading ? '...' : stats.totalReports}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Ações rápidas */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Ações Rápidas</h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('sync')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Sincronizar HackMD
                </button>
                <button
                  onClick={() => setActiveTab('blocos')}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Criar Bloco
                </button>
                <button
                  onClick={() => {
                    refetchBlocos()
                    refetchStats()
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Atualizar Dados
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blocos' && (
          <div className="space-y-6">
            {/* Cabeçalho */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">Gerenciar Blocos</h2>
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Criar do HackMD
              </button>
            </div>

            {/* Formulário de criação */}
            {showCreateForm && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Criar Bloco do HackMD</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      URL do HackMD
                    </label>
                    <input
                      type="url"
                      value={newBlocoData.hackmdUrl}
                      onChange={(e) => setNewBlocoData(prev => ({ ...prev, hackmdUrl: e.target.value }))}
                      placeholder="https://hackmd.io/abc123"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Ordem
                    </label>
                    <input
                      type="number"
                      value={newBlocoData.ordem}
                      onChange={(e) => setNewBlocoData(prev => ({ ...prev, ordem: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      XP Reward
                    </label>
                    <input
                      type="number"
                      value={newBlocoData.xpReward}
                      onChange={(e) => setNewBlocoData(prev => ({ ...prev, xpReward: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleCreateFromHackMD}
                    disabled={syncing}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {syncing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                    Criar Bloco
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* Lista de blocos */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Bloco
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Ordem
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        XP
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {blocos.map((bloco) => (
                      <tr key={bloco.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-slate-900">{bloco.titulo}</div>
                            <div className="text-sm text-slate-500">{bloco.descricao}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-900">{bloco.ordem}</td>
                        <td className="px-6 py-4 text-sm text-slate-900">{bloco.xp_reward}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            bloco.ativo 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {bloco.ativo ? 'Ativo' : 'Inativo'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sync' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">Sincronização HackMD</h2>
              <button
                onClick={handleSyncAll}
                disabled={syncing}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {syncing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                Sincronizar Todos
              </button>
            </div>

            {/* Resultados da sincronização */}
            {syncResults.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Resultados da Sincronização</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {syncResults.map((result, index) => (
                    <div key={index} className="text-sm font-mono p-2 bg-slate-50 rounded">
                      {result}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setSyncResults([])}
                  className="mt-4 text-sm text-slate-600 hover:text-slate-800"
                >
                  Limpar resultados
                </button>
              </div>
            )}

            {/* Configurações de mapeamento */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Mapeamentos HackMD</h3>
              <p className="text-sm text-slate-600 mb-4">
                Configure os mapeamentos entre blocos e URLs do HackMD para sincronização automática.
              </p>
              
              <div className="space-y-4">
                {Object.entries(HACKMD_SYNC_CONFIG.mappings).map(([blocoId, url]) => {
                  const bloco = blocos.find(b => b.id === blocoId)
                  return (
                    <div key={blocoId} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-slate-800">
                          {bloco?.titulo || blocoId}
                        </div>
                        <div className="text-sm text-slate-600">{url}</div>
                      </div>
                      <button
                        onClick={() => handleSyncBloco(blocoId, url)}
                        disabled={syncing}
                        className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
                      >
                        {syncing ? <RefreshCw className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                        Sync
                      </button>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-slate-600 hover:text-slate-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )
                })}
                
                {Object.keys(HACKMD_SYNC_CONFIG.mappings).length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                    <p>Nenhum mapeamento configurado</p>
                    <p className="text-sm">Crie blocos do HackMD para configurar mapeamentos automaticamente</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Configurações</h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Configuração do Supabase</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    URL do Supabase
                  </label>
                  <input
                    type="url"
                    value={import.meta.env.VITE_SUPABASE_URL || ''}
                    readOnly
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Chave Anônima
                  </label>
                  <input
                    type="text"
                    value={import.meta.env.VITE_SUPABASE_ANON_KEY ? '***' + import.meta.env.VITE_SUPABASE_ANON_KEY.slice(-4) : ''}
                    readOnly
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Instruções de Setup</h3>
              <div className="prose prose-sm max-w-none">
                <p className="text-slate-600 mb-4">
                  Para configurar o Supabase, você precisa:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                  <li>Criar uma conta no <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Supabase</a></li>
                  <li>Criar um novo projeto</li>
                  <li>Executar os SQLs fornecidos no guia de setup</li>
                  <li>Configurar as variáveis de ambiente</li>
                  <li>Configurar mapeamentos do HackMD</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin