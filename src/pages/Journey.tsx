import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Shield, Sparkles, Trophy, PlayCircle, BookOpen, Lock } from 'lucide-react';

const Journey: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const journeySteps = [
    {
      id: 1,
      title: 'Descoberta',
      description: 'Explore os conceitos fundamentais do Web3 e descubra seu interesse.',
      progress: 25,
      xp: 50,
      status: 'active',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      id: 2,
      title: 'Aprendizado',
      description: 'Desenvolva habilidades práticas através de conteúdo interativo.',
      progress: 0,
      xp: 150,
      status: 'locked',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      id: 3,
      title: 'Aplicação',
      description: 'Coloque conhecimento em prática e contribua para a comunidade.',
      progress: 0,
      xp: 300,
      status: 'locked',
      color: 'from-neon-pink to-neon-orange'
    }
  ];

  const stats = [
    { label: 'XP Ganhos', value: '50', icon: Zap, color: 'from-neon-blue to-neon-purple' },
    { label: 'Gotas Disponíveis', value: '1,250', icon: Shield, color: 'from-neon-green to-neon-blue' },
    { label: 'Conquistas', value: '1', icon: Trophy, color: 'from-neon-purple to-neon-pink' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center animate-float">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fade-in">
              Sua Jornada
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-slide-up">
              Personalize sua experiência de aprendizado e acompanhe seu progresso na Web3
            </p>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl text-gray-300 mb-8">
              <Shield className="w-5 h-5 text-neon-green" />
              <span>Conecte sua carteira para salvar progresso</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Journey Progress */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold gradient-text">Etapas da Jornada</h2>
                <div className="flex items-center gap-2 px-4 py-2 glass-dark rounded-xl">
                  <Sparkles className="w-5 h-5 text-neon-green" />
                  <span className="text-sm text-gray-300">Nível Iniciante</span>
                </div>
              </div>

              <div className="space-y-6">
                {journeySteps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`group relative cursor-pointer ${
                      selectedStep === step.id ? 'ring-2 ring-neon-blue' : ''
                    }`}
                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                  >
                    <div className="flex items-center gap-6 p-6 glass-dark rounded-xl hover:bg-glass-medium transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-glow transition-all duration-300 relative`}>
                        {step.status === 'locked' && (
                          <Lock className="w-6 h-6 text-white" />
                        )}
                        {step.status === 'active' && step.id}
                        {step.status === 'completed' && (
                          <Trophy className="w-6 h-6 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          <div className="flex items-center gap-2">
                            <Zap className={`w-5 h-5 ${step.status === 'locked' ? 'text-gray-500' : 'text-neon-blue'}`} />
                            <span className={`text-sm ${step.status === 'locked' ? 'text-gray-500' : 'text-gray-300'}`}>{step.xp} XP</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        
                        <div className="flex items-center gap-4">
                          <div className="progress-bar w-full max-w-xs">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${step.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400">{step.progress}%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {selectedStep === step.id && (
                      <div className="mt-4 p-6 glass rounded-xl animate-slide-down">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Módulos Disponíveis</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 p-3 glass-dark rounded-lg">
                                <PlayCircle className="w-5 h-5 text-neon-green" />
                                <span className="text-sm text-gray-300">Introdução ao Web3</span>
                              </div>
                              <div className="flex items-center gap-3 p-3 glass-dark rounded-lg">
                                <BookOpen className="w-5 h-5 text-neon-blue" />
                                <span className="text-sm text-gray-300">Conceitos Fundamentais</span>
                              </div>
                              <div className="flex items-center gap-3 p-3 glass-dark rounded-lg opacity-50">
                                <Lock className="w-5 h-5 text-gray-500" />
                                <span className="text-sm text-gray-500">Carteiras Digitais</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Conquistas</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 p-3 glass-dark rounded-lg">
                                <Trophy className="w-5 h-5 text-neon-orange" />
                                <span className="text-sm text-gray-300">Primeiro Passo</span>
                              </div>
                              <div className="flex items-center gap-3 p-3 glass-dark rounded-lg opacity-50">
                                <Trophy className="w-5 h-5 text-gray-500" />
                                <span className="text-sm text-gray-500">Explorador</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/digital-literacy" 
                    className="btn-primary flex items-center gap-2 justify-center group"
                  >
                    Começar Agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/community" className="btn-secondary flex items-center gap-2 justify-center">
                    Participar da Comunidade <Users className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Wallet Connection Placeholder */}
            <div className="glass p-6 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center opacity-50">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Conecte sua Carteira</h3>
              <p className="text-gray-400 text-sm mb-4">
                Conecte uma carteira para salvar seu progresso e receber recompensas
              </p>
              <button className="btn-outline w-full">
                Conectar Carteira
              </button>
            </div>

            {/* Stats */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Suas Estatísticas</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass-dark rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold gradient-text">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Link to="/digital-literacy" className="block p-3 glass-dark rounded-lg hover:bg-glass-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-neon-blue" />
                    <span className="text-sm text-gray-300">Continuar Aprendendo</span>
                  </div>
                </Link>
                <Link to="/community" className="block p-3 glass-dark rounded-lg hover:bg-glass-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-neon-green" />
                    <span className="text-sm text-gray-300">Visitar Comunidade</span>
                  </div>
                </Link>
                <Link to="/impact" className="block p-3 glass-dark rounded-lg hover:bg-glass-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-neon-purple" />
                    <span className="text-sm text-gray-300">Ver Impacto</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;