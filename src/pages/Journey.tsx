import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Shield, Sparkles, Trophy } from 'lucide-react';
import WalletConnect from '../components/wallet/WalletConnect';
import { useWallet } from '../components/wallet/WalletProvider';

const Journey: React.FC = () => {
  const { tonConnected, metamaskConnected } = useWallet();
  const isWalletConnected = tonConnected || metamaskConnected;

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
            
            {!isWalletConnected && (
              <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl text-gray-300 mb-8">
                <Shield className="w-5 h-5 text-neon-green" />
                <span>Conecte sua carteira para começar</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Wallet Connection */}
          <div className="lg:col-span-1">
            <WalletConnect />
          </div>

          {/* Journey Progress */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold gradient-text">Etapas da Jornada</h2>
                {isWalletConnected && (
                  <div className="flex items-center gap-2 px-4 py-2 glass-dark rounded-xl">
                    <Sparkles className="w-5 h-5 text-neon-green" />
                    <span className="text-sm text-gray-300">Nível Iniciante</span>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Etapa 1 - Descoberta */}
                <div className="group relative">
                  <div className="flex items-center gap-6 p-6 glass-dark rounded-xl hover:bg-glass-medium transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-glow transition-all duration-300">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Descoberta</h3>
                      <p className="text-gray-300 mb-4">Explore os conceitos fundamentais do Web3 e descubra seu interesse.</p>
                      <div className="flex items-center gap-4">
                        <div className="progress-bar w-full max-w-xs">
                          <div className="progress-fill" style={{ width: isWalletConnected ? '25%' : '0%' }}></div>
                        </div>
                        <span className="text-sm text-gray-400">{isWalletConnected ? '25%' : '0%'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-neon-blue" />
                      <span className="text-sm text-gray-300">50 XP</span>
                    </div>
                  </div>
                </div>

                {/* Etapa 2 - Aprendizado */}
                <div className="group relative">
                  <div className="flex items-center gap-6 p-6 glass-dark rounded-xl hover:bg-glass-medium transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-glow-purple transition-all duration-300">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Aprendizado</h3>
                      <p className="text-gray-300 mb-4">Desenvolva habilidades práticas através de conteúdo interativo.</p>
                      <div className="flex items-center gap-4">
                        <div className="progress-bar w-full max-w-xs">
                          <div className="progress-fill" style={{ width: '0%' }}></div>
                        </div>
                        <span className="text-sm text-gray-400">0%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-neon-purple" />
                      <span className="text-sm text-gray-300">150 XP</span>
                    </div>
                  </div>
                </div>

                {/* Etapa 3 - Aplicação */}
                <div className="group relative">
                  <div className="flex items-center gap-6 p-6 glass-dark rounded-xl hover:bg-glass-medium transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-orange rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-glow transition-all duration-300">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Aplicação</h3>
                      <p className="text-gray-300 mb-4">Coloque conhecimento em prática e contribua para a comunidade.</p>
                      <div className="flex items-center gap-4">
                        <div className="progress-bar w-full max-w-xs">
                          <div className="progress-fill" style={{ width: '0%' }}></div>
                        </div>
                        <span className="text-sm text-gray-400">0%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-neon-orange" />
                      <span className="text-sm text-gray-300">300 XP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/digital-literacy" 
                    className={`btn-primary flex items-center gap-2 justify-center ${!isWalletConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={(e) => !isWalletConnected && e.preventDefault()}
                  >
                    {isWalletConnected ? 'Começar Agora' : 'Conecte sua Carteira'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/community" className="btn-secondary flex items-center gap-2 justify-center">
                    Participar da Comunidade <Users className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {isWalletConnected && (
        <section className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">50</h3>
                <p className="text-gray-400">XP Ganhos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-green to-neon-blue rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">1,250</h3>
                <p className="text-gray-400">Gotas Disponíveis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">1</h3>
                <p className="text-gray-400">Conquistas</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Journey;