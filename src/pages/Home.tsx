import React from 'react';
import { ArrowRight, Globe, Users, Zap, Sparkles, Play, ChevronDown, Shield, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
              <Leaf className="w-5 h-5 text-green-500" />
              <span className="text-slate-700 font-medium">Letramento Digital Regenerativo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Sua Jornada na
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Web3
              </span>
              <span className="block text-4xl md:text-5xl text-slate-600 font-normal">
                Começa Aqui
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubra como a internet evoluiu e como você pode fazer parte 
              da próxima era digital de forma consciente e regenerativa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/trilha/bloco-1"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Começar Minha Jornada
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full hover:bg-white/90 transition-all duration-300 border border-slate-200 font-medium text-lg">
              <Globe className="w-5 h-5" />
              Explorar Primeiro
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>12.847 exploradores</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>7 blocos interativos</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Ritmo próprio</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              A Evolução da Internet
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Entenda como chegamos até aqui e para onde estamos indo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web 1.0 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">1.0</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Web 1.0</h3>
                <p className="text-slate-600 mb-6">
                  <strong>1990-2000:</strong> Internet estática, apenas leitura. 
                  Páginas simples, sem interação. Você apenas consumia informação.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>Sites estáticos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>Apenas leitura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>Poucos criadores</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Web 2.0 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">2.0</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Web 2.0</h3>
                <p className="text-slate-600 mb-6">
                  <strong>2000-2020:</strong> Internet interativa e social. 
                  Você pode criar, compartilhar e conectar. Mas as big techs controlam tudo.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Redes sociais</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Interação social</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Controle centralizado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Web 3.0 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 ring-2 ring-green-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">3.0</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Web 3.0</h3>
                <p className="text-slate-600 mb-6">
                  <strong>2020-Futuro:</strong> Internet descentralizada e regenerativa. 
                  Você tem controle real sobre seus dados, identidade e valor criado.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Descentralização</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Propriedade digital</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Valor regenerativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Web3 Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Por que a Web3 Importa?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Não é apenas sobre tecnologia. É sobre criar um futuro digital mais justo, 
            transparente e regenerativo para todos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Soberania Digital</h3>
              <p className="text-slate-600">
                Você controla seus dados, identidade e valor criado. Sem intermediários.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Impacto Regenerativo</h3>
              <p className="text-slate-600">
                Tecnologia que regenera comunidades e ecossistemas, não apenas extrai valor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Colaboração Global</h3>
              <p className="text-slate-600">
                Conecte-se com comunidades globais construindo o futuro juntas.
              </p>
            </div>
          </div>

          <Link 
            to="/trilha/bloco-1"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <Sparkles className="w-5 h-5" />
            Começar Minha Transformação
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* L3trament0 Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            O que é o L3trament0Web3?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Uma trilha de letramento digital regenerativo que te prepara para participar 
            conscientemente da Web3, no seu ritmo e com propósito.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">🌱 Metodologia Orgânica</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Aprendizado no seu ritmo, sem pressão</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prática real com ferramentas Web3</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comunidade acolhedora e colaborativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Foco em impacto regenerativo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">🎯 Resultados Práticos</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Identidade digital soberana</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Domínio de ferramentas Web3</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conexão com comunidades globais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Capacidade de criar valor regenerativo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              🚀 Pronto para Começar?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Sua jornada de transformação digital começa com um simples clique. 
              Cada passo é uma descoberta, cada bloco uma nova habilidade.
            </p>
            
            <Link 
              to="/trilha/bloco-1"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Iniciar Bloco 1: Protagonismo Regenerativo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;