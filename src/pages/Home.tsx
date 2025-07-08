import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Heart, Leaf, ArrowRight, Sparkles, Zap, Shield, Play, CheckCircle, Clock, User } from 'lucide-react';

const Home: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const storySteps = [
    {
      title: "Você já se sentiu perdido no mundo digital?",
      description: "Notícias sobre criptomoedas, NFTs, Web3... Parece outro idioma?",
      emotion: "confused",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Não é culpa sua!",
      description: "O mundo tech avança rápido, mas poucos explicam de forma acessível.",
      emotion: "understanding",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Imagine se você pudesse...",
      description: "Entender, participar e até se beneficiar dessas novas tecnologias?",
      emotion: "hopeful",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "É exatamente isso que você vai conquistar aqui!",
      description: "Uma jornada prática, do básico ao avançado, no seu ritmo.",
      emotion: "confident",
      color: "from-green-500 to-blue-500"
    }
  ];

  const learningPath = [
    {
      id: 1,
      title: "Primeiros Passos Digitais",
      description: "Aprenda a navegar com segurança no mundo digital",
      duration: "30 min",
      lessons: 5,
      practical: true,
      difficulty: "Iniciante",
      outcome: "Criar sua primeira carteira digital segura",
      link: "/digital-literacy",
      icon: Shield,
      color: "from-neon-blue to-neon-purple"
    },
    {
      id: 2,
      title: "Entendendo o Web3",
      description: "Descubra como a internet está evoluindo e por quê",
      duration: "45 min",
      lessons: 7,
      practical: true,
      difficulty: "Iniciante",
      outcome: "Fazer sua primeira transação blockchain",
      link: "/public-goods",
      icon: Globe,
      color: "from-neon-green to-neon-blue"
    },
    {
      id: 3,
      title: "Colaboração e Commons",
      description: "Como criar valor junto com outras pessoas",
      duration: "40 min",
      lessons: 6,
      practical: true,
      difficulty: "Intermediário",
      outcome: "Participar de um projeto colaborativo real",
      link: "/commons-life",
      icon: Users,
      color: "from-neon-purple to-neon-pink"
    },
    {
      id: 4,
      title: "Finanças Regenerativas",
      description: "Use seu dinheiro para criar impacto positivo",
      duration: "50 min",
      lessons: 8,
      practical: true,
      difficulty: "Intermediário",
      outcome: "Investir em um projeto de impacto",
      link: "/refi",
      icon: Leaf,
      color: "from-neon-green to-neon-blue"
    }
  ];

  const userStats = {
    totalUsers: 12847,
    completedJourneys: 8934,
    hoursLearned: 45672,
    projectsCreated: 234
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Storytelling Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center animate-float">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Sua Jornada para o Futuro Digital
            </h1>
          </div>

          {/* Interactive Storytelling */}
          <div className="glass p-8 rounded-3xl mb-12">
            <div className="mb-6">
              <div className={`w-full h-2 bg-dark-800 rounded-full overflow-hidden mb-4`}>
                <div 
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-1000"
                  style={{ width: `${((currentStory + 1) / storySteps.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400">
                Passo {currentStory + 1} de {storySteps.length}
              </span>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {storySteps[currentStory].title}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {storySteps[currentStory].description}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              {currentStory > 0 && (
                <button
                  onClick={() => setCurrentStory(currentStory - 1)}
                  className="btn-secondary"
                >
                  Anterior
                </button>
              )}
              
              {currentStory < storySteps.length - 1 ? (
                <button
                  onClick={() => setCurrentStory(currentStory + 1)}
                  className="btn-primary flex items-center gap-2"
                >
                  Próximo <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link to="/journey" className="btn-primary flex items-center gap-2">
                  Começar Minha Jornada <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Pessoas aprendendo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.completedJourneys.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Jornadas completas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.hoursLearned.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Horas de aprendizado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.projectsCreated}</div>
              <div className="text-sm text-gray-400">Projetos criados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Seu Caminho de Aprendizado
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cada módulo foi cuidadosamente projetado para construir suas habilidades passo a passo, 
              com exercícios práticos e projetos reais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPath.map((module, index) => (
              <div key={module.id} className="group relative">
                {/* Connection Line */}
                {index < learningPath.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple opacity-50"></div>
                )}
                
                <div className="card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300`}>
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-glass-dark rounded-lg text-xs text-gray-300">
                          {module.difficulty}
                        </span>
                        <span className="px-2 py-1 bg-glass-dark rounded-lg text-xs text-gray-300">
                          Módulo {module.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-neon-blue" />
                      <span className="text-sm text-gray-300">{module.duration} de conteúdo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-neon-green" />
                      <span className="text-sm text-gray-300">{module.lessons} lições práticas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-neon-purple" />
                      <span className="text-sm text-gray-300">Projeto final: {module.outcome}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={module.link}
                    className="w-full btn-primary flex items-center justify-center gap-2 group/btn"
                  >
                    <Play className="w-4 h-4" />
                    Começar Módulo
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Por que isso importa para sua vida?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-neon-green to-neon-blue rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">Oportunidades</h3>
                <p className="text-sm text-gray-400">
                  Mercado Web3 cresce 40% ao ano. Seja parte dessa revolução.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">Segurança</h3>
                <p className="text-sm text-gray-400">
                  Proteja-se de golpes e tome decisões informadas sobre seu futuro digital.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">Comunidade</h3>
                <p className="text-sm text-gray-400">
                  Conecte-se com pessoas que compartilham valores de colaboração e impacto.
                </p>
              </div>
            </div>
            
            <Link
              to="/journey"
              className="btn-primary flex items-center gap-2 justify-center mx-auto max-w-sm"
            >
              Iniciar Minha Transformação Digital
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Proof Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Histórias Reais de Transformação
            </h2>
            <p className="text-gray-400">
              Veja como outras pessoas mudaram suas vidas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Maria Santos",
                role: "Professora",
                story: "Aprendi a criar NFTs dos trabalhos dos meus alunos. Agora eles se sentem valorizados e eu gero renda extra.",
                achievement: "Criou 50+ NFTs educacionais",
                avatar: "👩‍🏫"
              },
              {
                name: "João Silva",
                role: "Aposentado",
                story: "Achava que era tarde para aprender. Hoje participo de DAOs e ajudo a decidir sobre projetos sociais.",
                achievement: "Membro ativo de 3 DAOs",
                avatar: "👨‍🦳"
              },
              {
                name: "Ana Costa",
                role: "Estudante",
                story: "Consegui uma bolsa em criptomoedas para minha faculdade através de um projeto de sustentabilidade.",
                achievement: "R$ 15.000 em bolsas Web3",
                avatar: "👩‍🎓"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  "{testimonial.story}"
                </p>
                <div className="text-xs text-neon-green font-medium">
                  ✨ {testimonial.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;