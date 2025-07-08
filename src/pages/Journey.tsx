import React, { useState } from 'react';
import { Play, Clock, Users, Award, CheckCircle, BookOpen, Video, Bot, Zap } from 'lucide-react';

const Journey = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "O que é Web3 e por que ele importa",
      duration: 45,
      format: "Texto + Vídeo curto (5-8 min)",
      description: "Compreenda as diferenças práticas entre Web2 e Web3, descentralização no cotidiano e soberania digital",
      topics: [
        "Web2 vs Web3: diferenças práticas",
        "Descentralização na vida cotidiana", 
        "Soberania digital e autonomia",
        "Casos de uso reais no Brasil"
      ],
      activity: "Quiz interativo via bot Telegram",
      result: "Compreensão básica do ecossistema Web3",
      color: "from-neon-blue to-blue-600",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Wallets, identidade digital e segurança",
      duration: 60,
      format: "Texto + Vídeo prático (10-12 min)",
      description: "Crie sua primeira carteira digital e aprenda práticas essenciais de segurança",
      topics: [
        "O que é uma carteira digital",
        "Criação de wallet na testnet TON",
        "Chaves públicas e privadas (linguagem simples)",
        "Práticas de segurança essenciais"
      ],
      activity: "Criar primeira carteira didática",
      result: "Wallet funcional + conhecimento de segurança",
      color: "from-neon-green to-green-600",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Blockchain, tokens e rastreabilidade",
      duration: 50,
      format: "Texto + Vídeo explicativo (8-10 min)",
      description: "Entenda como funciona uma blockchain através de analogias simples e casos práticos",
      topics: [
        "Como funciona uma blockchain (analogias simples)",
        "Tokens: utilidade vs especulação",
        "Rastreabilidade e transparência",
        "Casos práticos: agricultura, arte, educação"
      ],
      activity: "Rastrear transação real via bot POE",
      result: "Compreensão de transparência blockchain",
      color: "from-neon-purple to-purple-600",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 4,
      title: "NFTs com utilidade real",
      duration: 55,
      format: "Texto + Vídeo tutorial (12-15 min)",
      description: "Descubra os NFTs além do hype: certificados, identidade e acesso com utilidade real",
      topics: [
        "NFTs além do hype: certificados, identidade, acesso",
        "Criação de NFT simples via gotas.social",
        "Armazenamento descentralizado (NFT.storage)",
        "Casos de uso: certificados, arte comunitária, eventos"
      ],
      activity: "Criar primeiro NFT com utilidade",
      result: "NFT próprio + compreensão de utilidade",
      color: "from-yellow-400 to-orange-500",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Participação em DAOs",
      duration: 65,
      format: "Texto + Vídeo participativo (15-18 min)",
      description: "Experimente a governança descentralizada participando de decisões coletivas",
      topics: [
        "O que são DAOs e governança descentralizada",
        "Participação em decisões coletivas",
        "Ferramentas de votação e propostas",
        "Casos reais: cooperativas, coletivos, ONGs"
      ],
      activity: "Participar de votação em DAO de teste",
      result: "Experiência prática em governança",
      color: "from-red-400 to-pink-500",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Ferramentas livres e descentralizadas",
      duration: 70,
      format: "Texto + Vídeo hands-on (20-25 min)",
      description: "Construa seu primeiro microprojeto usando ferramentas descentralizadas",
      topics: [
        "Alternativas descentralizadas para redes sociais",
        "Armazenamento e comunicação segura",
        "Ferramentas para criadores e educadores",
        "Construindo projetos regenerativos"
      ],
      activity: "Criar microprojeto usando ferramentas aprendidas",
      result: "Projeto próprio funcional",
      color: "from-cyan-400 to-blue-500",
      icon: <Bot className="w-6 h-6" />
    }
  ];

  const totalDuration = modules.reduce((sum, module) => sum + module.duration, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Curso Introdutório Web3
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Letramento digital popular para territórios vivos
          </p>
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-blue" />
                <span className="text-gray-300">{Math.floor(totalDuration / 60)}h {totalDuration % 60}min total</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-neon-green" />
                <span className="text-gray-300">6 módulos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-neon-purple" />
                <span className="text-gray-300">Certificação NFT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 gradient-text">
            "Letramento Web3 popular é nossa semente de liberdade digital"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🆓</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Sempre Gratuito</h3>
              <p className="text-gray-400 text-sm">Curso gratuito e sempre será</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🔄</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Replicável</h3>
              <p className="text-gray-400 text-sm">Por qualquer comunidade</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🚫</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Sem Barreiras</h3>
              <p className="text-gray-400 text-sm">Nenhum pré-requisito técnico</p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module) => (
            <div 
              key={module.id}
              className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedModule === module.id ? 'ring-2 ring-neon-blue' : ''
              }`}
              onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center`}>
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Módulo {module.id}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-3 h-3" />
                    <span>{module.duration}min</span>
                  </div>
                </div>
              </div>
              
              <h4 className="font-bold text-white mb-2">{module.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{module.description}</p>
              
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <Video className="w-3 h-3" />
                <span>{module.format}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-neon-blue text-sm font-medium">Ver detalhes</span>
                <Play className="w-4 h-4 text-neon-blue" />
              </div>
            </div>
          ))}
        </div>

        {/* Module Details */}
        {selectedModule && (
          <div className="glass rounded-2xl p-8 mb-12">
            {(() => {
              const module = modules.find(m => m.id === selectedModule);
              if (!module) return null;
              
              return (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center`}>
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Módulo {module.id}</h3>
                      <h4 className="text-xl text-gray-300">{module.title}</h4>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-white mb-3">📚 Conteúdo:</h5>
                      <ul className="space-y-2">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-white mb-2">🎯 Atividade Prática:</h5>
                        <p className="text-gray-300 text-sm">{module.activity}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-white mb-2">🏆 Resultado:</h5>
                        <p className="text-gray-300 text-sm">{module.result}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-white mb-2">📱 Formato:</h5>
                        <p className="text-gray-300 text-sm">{module.format}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button className="btn-primary w-full md:w-auto">
                      <Play className="w-4 h-4 mr-2" />
                      Começar Módulo {module.id}
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Resources */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">🛠️ Recursos Educacionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Manual de Sobrevivência</h3>
              <p className="text-gray-400 text-sm">PDF gratuito com guia completo</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">CalangoNauta</h3>
              <p className="text-gray-400 text-sm">Bot educativo 24h no Telegram</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Dashboard Exclusivo</h3>
              <p className="text-gray-400 text-sm">Painel de progresso personalizado</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Comunidade Discord</h3>
              <p className="text-gray-400 text-sm">Canal de dúvidas e networking</p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">👥 Para Quem é Este Curso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">🎓 Educadores</h3>
              <p className="text-gray-400 text-sm">Multiplicadores e formadores</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">🏘️ Iniciativas Comunitárias</h3>
              <p className="text-gray-400 text-sm">Coletivos e movimentos sociais</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">🌱 ONGs</h3>
              <p className="text-gray-400 text-sm">Redes de cultura viva</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">🧑‍💼 Jovens</h3>
              <p className="text-gray-400 text-sm">Sem acesso a formação técnica</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">💼 Autônomos</h3>
              <p className="text-gray-400 text-sm">Profissionais liberais</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">🤔 Curiosos</h3>
              <p className="text-gray-400 text-sm">Interessados em tecnologia</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <button className="btn-primary text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Começar Jornada Agora
            </button>
            <p className="text-gray-400 text-sm mt-4">
              ✅ Nenhum conhecimento técnico necessário • ✅ Acesso básico à internet • ✅ Disposição para aprender
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;