import React, { useState } from 'react';
import { ArrowRight, Globe, Users, Heart, Leaf, Target, Zap, Send, CheckCircle, Award, Bot, MessageCircle, FileText, BarChart3, TreePine, Recycle, Lightbulb, Network, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  nomeCompleto: string;
  email: string;
  telefone: string;
  comunidade: string;
  descricaoComunidade: string;
  objetivosRegenerativos: string;
  experienciaLideranca: string;
  metricasImpacto: string[];
  perfilExploratorio: string;
  planoGovernanca: string;
  compromissoProtocolos: boolean;
  aceitaTermos: boolean;
}

const DAORegenerativa = () => {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: '',
    email: '',
    telefone: '',
    comunidade: '',
    descricaoComunidade: '',
    objetivosRegenerativos: '',
    experienciaLideranca: '',
    metricasImpacto: [],
    perfilExploratorio: '',
    planoGovernanca: '',
    compromissoProtocolos: false,
    aceitaTermos: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const perfisExploratorios = [
    {
      id: 'regenerativo',
      name: '🌱 Regenerativo',
      description: 'Foco em impacto ambiental e sustentabilidade',
      characteristics: ['Reflorestamento', 'Energia limpa', 'Agricultura regenerativa', 'Captura de carbono']
    },
    {
      id: 'comunitario',
      name: '🤝 Comunitário',
      description: 'Foco em desenvolvimento social e inclusão',
      characteristics: ['Educação popular', 'Inclusão digital', 'Economia solidária', 'Justiça social']
    },
    {
      id: 'inovador',
      name: '💡 Inovador',
      description: 'Foco em tecnologia e soluções criativas',
      characteristics: ['Blockchain social', 'IA para bem comum', 'Tecnologias abertas', 'Inovação frugal']
    },
    {
      id: 'estrategico',
      name: '🎯 Estratégico',
      description: 'Foco em governança e políticas públicas',
      characteristics: ['Políticas públicas', 'Advocacy', 'Governança participativa', 'Transparência']
    },
    {
      id: 'netweaver',
      name: '🌐 Netweaver',
      description: 'Conecta diferentes perfis e comunidades',
      characteristics: ['Articulação de redes', 'Parcerias estratégicas', 'Facilitação', 'Comunicação']
    }
  ];

  const metricasDisponiveis = [
    'Redução de CO2',
    'Árvores plantadas',
    'Energia renovável gerada',
    'Pessoas impactadas',
    'Empregos verdes criados',
    'Resíduos reciclados',
    'Água conservada',
    'Biodiversidade protegida',
    'Educação ambiental',
    'Tecnologias abertas desenvolvidas'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMetricaToggle = (metrica: string) => {
    setFormData(prev => ({
      ...prev,
      metricasImpacto: prev.metricasImpacto.includes(metrica)
        ? prev.metricasImpacto.filter(m => m !== metrica)
        : [...prev.metricasImpacto, metrica]
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const nextStep = () => setCurrentStep(Math.min(currentStep + 1, 4));
  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">DAO Regenerativa</h1>
                <p className="text-sm text-slate-600">Portal de Solicitação</p>
              </div>
            </div>
            <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">
              ← Voltar para Home
            </Link>
          </div>
        </div>
      </header>

      {!submitted ? (
        <>
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                DAO Regenerativa
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Lidere uma comunidade com governança focada em regeneração planetária 
                e impacto social positivo
              </p>
              
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-6 border border-emerald-200/50">
                <h3 className="font-semibold text-slate-800 mb-2">🎁 Oferta Especial para Líderes</h3>
                <p className="text-slate-700 text-sm">
                  DAO Básica <strong>gratuita</strong> para líderes comunitários comprometidos 
                  com protocolos regenerativos
                </p>
              </div>
            </div>
          </section>

          {/* Progress Indicator */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-slate-200 text-slate-500'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-20 h-1 mx-2 ${
                        step < currentStep ? 'bg-emerald-600' : 'bg-slate-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {currentStep === 1 && 'Informações Básicas'}
                  {currentStep === 2 && 'Perfil da Comunidade'}
                  {currentStep === 3 && 'Métricas e Objetivos'}
                  {currentStep === 4 && 'Confirmação e Termos'}
                </h2>
                <p className="text-slate-600">
                  Passo {currentStep} de 4 - Construindo sua DAO Regenerativa
                </p>
              </div>
            </div>
          </section>

          {/* Form Steps */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
                
                {/* Step 1: Informações Básicas */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-800 font-medium mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          value={formData.nomeCompleto}
                          onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-slate-800 font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-800 font-medium mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="+55 (11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-800 font-medium mb-2">
                        Nome da Comunidade/Organização *
                      </label>
                      <input
                        type="text"
                        value={formData.comunidade}
                        onChange={(e) => handleInputChange('comunidade', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="Nome da sua comunidade ou organização"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-800 font-medium mb-2">
                        Experiência em Liderança *
                      </label>
                      <textarea
                        value={formData.experienciaLideranca}
                        onChange={(e) => handleInputChange('experienciaLideranca', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-24 resize-none"
                        placeholder="Descreva brevemente sua experiência liderando comunidades ou projetos..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Perfil da Comunidade */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-slate-800 font-medium mb-3">
                        Descrição da Comunidade *
                      </label>
                      <textarea
                        value={formData.descricaoComunidade}
                        onChange={(e) => handleInputChange('descricaoComunidade', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-32 resize-none"
                        placeholder="Descreva sua comunidade: quantas pessoas, localização, atividades principais, desafios atuais..."
                      />
                    </div>

                    <div>
                      <label className="block text-slate-800 font-medium mb-3">
                        Perfil Exploratório *
                      </label>
                      <p className="text-slate-600 text-sm mb-4">
                        Escolha o perfil que melhor representa o foco da sua comunidade:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {perfisExploratorios.map((perfil) => (
                          <div
                            key={perfil.id}
                            onClick={() => handleInputChange('perfilExploratorio', perfil.id)}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.perfilExploratorio === perfil.id
                                ? 'border-emerald-500 bg-emerald-50'
                                : 'border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            <h4 className="font-semibold text-slate-800 mb-2">{perfil.name}</h4>
                            <p className="text-slate-600 text-sm mb-3">{perfil.description}</p>
                            <div className="space-y-1">
                              {perfil.characteristics.map((char, index) => (
                                <div key={index} className="flex items-center gap-2 text-xs text-slate-500">
                                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                  <span>{char}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-800 font-medium mb-3">
                        Objetivos Regenerativos *
                      </label>
                      <textarea
                        value={formData.objetivosRegenerativos}
                        onChange={(e) => handleInputChange('objetivosRegenerativos', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-32 resize-none"
                        placeholder="Quais são os principais objetivos regenerativos da sua comunidade? Como vocês pretendem contribuir para a regeneração planetária?"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Métricas e Objetivos */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-slate-800 font-medium mb-3">
                        Métricas de Impacto *
                      </label>
                      <p className="text-slate-600 text-sm mb-4">
                        Selecione as métricas que sua DAO irá acompanhar (mínimo 3):
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {metricasDisponiveis.map((metrica) => (
                          <div
                            key={metrica}
                            onClick={() => handleMetricaToggle(metrica)}
                            className={`p-3 border rounded-lg cursor-pointer transition-all text-sm ${
                              formData.metricasImpacto.includes(metrica)
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                : 'border-slate-300 hover:border-slate-400 text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                formData.metricasImpacto.includes(metrica)
                                  ? 'border-emerald-500 bg-emerald-500'
                                  : 'border-slate-300'
                              }`}>
                                {formData.metricasImpacto.includes(metrica) && (
                                  <CheckCircle className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span>{metrica}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs mt-2">
                        Selecionadas: {formData.metricasImpacto.length} métricas
                      </p>
                    </div>

                    <div>
                      <label className="block text-slate-800 font-medium mb-3">
                        Plano de Governança *
                      </label>
                      <textarea
                        value={formData.planoGovernanca}
                        onChange={(e) => handleInputChange('planoGovernanca', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-32 resize-none"
                        placeholder="Como você planeja estruturar a governança da sua DAO? Como as decisões serão tomadas? Como a comunidade participará?"
                      />
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Bot className="w-5 h-5 text-blue-600" />
                        🤖 Integração CalangoNauta Bot
                      </h4>
                      <p className="text-slate-700 text-sm mb-4">
                        Sua DAO incluirá integração automática com nosso bot via Telegram/WhatsApp para:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <MessageCircle className="w-3 h-3 text-blue-500" />
                          <span>Notificações de governança</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <BarChart3 className="w-3 h-3 text-green-500" />
                          <span>Relatórios de métricas</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Users className="w-3 h-3 text-purple-500" />
                          <span>Facilitação de votações</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Award className="w-3 h-3 text-yellow-500" />
                          <span>Sistema de recompensas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmação e Termos */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200/50">
                      <h3 className="font-semibold text-slate-800 mb-4">
                        📋 Resumo da Solicitação
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div><strong>Líder:</strong> {formData.nomeCompleto}</div>
                        <div><strong>Comunidade:</strong> {formData.comunidade}</div>
                        <div><strong>Perfil:</strong> {
                          perfisExploratorios.find(p => p.id === formData.perfilExploratorio)?.name
                        }</div>
                        <div><strong>Métricas:</strong> {formData.metricasImpacto.length} selecionadas</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="protocolos"
                          checked={formData.compromissoProtocolos}
                          onChange={(e) => handleInputChange('compromissoProtocolos', e.target.checked)}
                          className="mt-1"
                        />
                        <label htmlFor="protocolos" className="text-slate-700 text-sm">
                          <strong>Compromisso com Protocolos Regenerativos:</strong> Comprometo-me a seguir 
                          os protocolos de regeneração planetária, reportar métricas mensalmente e 
                          manter transparência na governança da DAO.
                        </label>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="termos"
                          checked={formData.aceitaTermos}
                          onChange={(e) => handleInputChange('aceitaTermos', e.target.checked)}
                          className="mt-1"
                        />
                        <label htmlFor="termos" className="text-slate-700 text-sm">
                          <strong>Termos de Uso:</strong> Aceito os termos de uso da plataforma 
                          L3trament0Web3 e concordo com a estrutura de tokenomics 51/25/24 da DAO Regenerativa.
                        </label>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200/50">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                        ⏰ Próximos Passos
                      </h4>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div>1. Análise da solicitação (2-3 dias úteis)</div>
                        <div>2. Entrevista via videochamada (30 minutos)</div>
                        <div>3. Configuração personalizada da DAO</div>
                        <div>4. Treinamento e onboarding</div>
                        <div>5. Ativação da DAO Regenerativa</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      currentStep === 1
                        ? 'text-slate-400 cursor-not-allowed'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    ← Anterior
                  </button>

                  {currentStep < 4 ? (
                    <button
                      onClick={nextStep}
                      className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                    >
                      Próximo →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.compromissoProtocolos || !formData.aceitaTermos}
                      className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                        formData.compromissoProtocolos && formData.aceitaTermos
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-4 h-4 mr-2 inline" />
                      Enviar Solicitação
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Success Page */
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              🎉 Solicitação Enviada com Sucesso!
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Sua solicitação para DAO Regenerativa foi recebida. Nossa equipe entrará 
              em contato em até 48 horas para os próximos passos.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                📧 Confirmação Enviada
              </h3>
              <p className="text-slate-600 mb-6">
                Enviamos um email de confirmação para <strong>{formData.email}</strong> 
                com os detalhes da sua solicitação e próximos passos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800 mb-2">🤖 Integração Bot</h4>
                  <p className="text-slate-600 text-sm">
                    Em breve você receberá acesso ao CalangoNauta Bot via Telegram/WhatsApp 
                    para acompanhar o processo.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800 mb-2">📊 Dashboard</h4>
                  <p className="text-slate-600 text-sm">
                    Após aprovação, você terá acesso ao dashboard de métricas 
                    e governança da sua DAO.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                <Globe className="w-5 h-5" />
                Voltar para Home
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/trilha/bloco-1"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg"
              >
                <Target className="w-5 h-5" />
                Continuar Trilha Web3
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DAORegenerativa;