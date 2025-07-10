import React from 'react';
import { ArrowRight, Globe, Users, Heart, Leaf, Target, Zap, Award, BookOpen, Brain, Lightbulb, Network, Share2, ExternalLink, Bot, Sparkles, CheckCircle, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const DAOsAtivas = () => {
  const handleDAOducationJoin = () => {
    window.open('https://t.me/tonxdao_bot?start=ref_939009002', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Network className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">DAOs Ativas</h1>
                <p className="text-sm text-slate-600">Ecossistema Regenerativo</p>
              </div>
            </div>
            <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">
              ← Voltar para Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Network className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            DAOs Ativas
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Conheça as organizações autônomas descentralizadas que estão construindo 
            um futuro regenerativo e colaborativo
          </p>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 border border-blue-200/50">
            <h3 className="font-semibold text-slate-800 mb-2">🌍 Ecossistema em Crescimento</h3>
            <p className="text-slate-700 text-sm">
              Cada DAO representa uma comunidade comprometida com regeneração planetária, 
              educação aberta e impacto social positivo
            </p>
          </div>
        </div>
      </section>

      {/* DAOducation - Featured DAO */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 mb-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-slate-800">DAOducation</h2>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    ✨ Ativa
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-4">
                  Organização autônoma descentralizada para reconhecer, validar e recompensar 
                  todas as formas de conhecimento
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Comunidade Global</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Tokens Soulbound</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    <span>Validação Comunitária</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 Missão</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  DAOducation é uma organização autônoma descentralizada projetada para reconhecer, 
                  validar e recompensar todas as formas de conhecimento — seja ele formal, informal, 
                  ancestral, técnico ou experiencial. Estamos construindo uma infraestrutura aberta 
                  para que a educação seja um bem comum público e digital.
                </p>

                <h4 className="font-semibold text-slate-800 mb-3">🌱 Valores Fundamentais</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700 text-sm">Abundância educacional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700 text-sm">Justiça epistêmica</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700 text-sm">Soberania sobre aprendizagem</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700 text-sm">Rejeição a credenciais excludentes</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">⚙️ Como Funciona</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200/50">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      Sistema Dinâmico de Reputação
                    </h4>
                    <p className="text-slate-700 text-sm">
                      Reconhecimento baseado em contribuições reais e validação pela comunidade
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200/50">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      Validação Comunitária
                    </h4>
                    <p className="text-slate-700 text-sm">
                      A comunidade valida conhecimentos e experiências de forma descentralizada
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200/50">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      Tokens Soulbound
                    </h4>
                    <p className="text-slate-700 text-sm">
                      Tokens intransferíveis que reconhecem aprendizado e contribuições
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200/50">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-600" />
                    "O conhecimento não é escasso — ele cresce à medida que é compartilhado"
                  </h4>
                  <p className="text-slate-700 text-sm">
                    DAOducation é o solo fértil onde cada voz se torna uma semente de transformação.
                  </p>
                </div>
              </div>
            </div>

            {/* Who Can Join */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200/50 mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                🤝 Tod@s São Bem-Vind@s
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Aprendizes</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Educadores</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Desenvolvedores</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Especialistas</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Experiências</span>
                </div>
              </div>
            </div>

            {/* CTA to Join */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  🚀 Junte-se à DAOducation
                </h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Faça parte de uma comunidade que valoriza todas as formas de conhecimento 
                  e constrói uma educação verdadeiramente aberta e democrática.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDAOducationJoin}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
                  >
                    <Bot className="w-5 h-5" />
                    Entrar via Telegram Bot
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  
                  <Link
                    to="/dao-regenerativa"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all duration-300 font-medium text-lg"
                  >
                    <Globe className="w-5 h-5" />
                    Criar Sua DAO
                  </Link>
                </div>
                
                <p className="text-emerald-200 text-sm mt-6">
                  🎁 Link especial com referral para a comunidade L3trament0Web3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon DAOs */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🌱 Próximas DAOs no Ecossistema
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Mais organizações regenerativas em desenvolvimento. 
              Seja parte da construção deste futuro colaborativo!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-slate-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">ReFi DAO Brasil</h3>
              <p className="text-slate-600 text-sm mb-4">
                Financiamento regenerativo para projetos de impacto ambiental
              </p>
              <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                Em Desenvolvimento
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-slate-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Commons DAO</h3>
              <p className="text-slate-600 text-sm mb-4">
                Governança de bens comuns digitais e físicos
              </p>
              <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                Planejamento
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-slate-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Innovation DAO</h3>
              <p className="text-slate-600 text-sm mb-4">
                Tecnologias abertas para soluções sociais
              </p>
              <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                Conceito
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/dao-regenerativa"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <Globe className="w-5 h-5" />
              Propor Nova DAO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DAOsAtivas;