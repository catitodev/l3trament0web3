import React, { useState } from 'react';
import { Play, Clock, Users, Award, CheckCircle, BookOpen, Video, Bot, Zap, Sparkles, Heart, Leaf, Target, Network, Gift, Search, MessageCircle, Lightbulb, Wrench, Globe, Share2, Palette, Brain, Compass, Lock, Star, Scroll, FileText, Send } from 'lucide-react';
import ReportModal from '../components/ReportModal';

interface UserProgress {
  currentBlock: number;
  completedBlocks: number[];
  fluxSeeds: string[];
  totalXP: number;
  reports: Record<number, string>;
}

const Journey = () => {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    currentBlock: 1,
    completedBlocks: [],
    fluxSeeds: [],
    totalXP: 0,
    reports: {}
  });

  const blocks = [
    {
      id: 1,
      title: "Protagonismo Regenerativo no Aprendizado Descentralizado",
      subtitle: "O Chamado da Jornada",
      description: "Você acorda em um mundo onde as redes centralizadas começam a ruir. Uma nova era se aproxima, e você sente o chamado para se tornar parte de algo maior.",
      storyIntro: "🌅 Em uma manhã como qualquer outra, você percebe que algo mudou. As notícias falam de censura, de dados roubados, de promessas quebradas pelas big techs. Mas há sussurros de uma nova possibilidade: a Web3. Você está pronto para descobrir o que isso significa?",
      actions: [
        "Refletir sobre sua relação atual com a tecnologia",
        "Definir sua intenção para esta jornada",
        "Conectar-se com outros exploradores",
        "Estabelecer seu ritmo de aprendizado"
      ],
      challenge: "Escreva um breve relato (200-300 palavras) sobre: 'Por que decidi explorar a Web3?' e 'Que mudança quero ver no mundo digital?'",
      xpReward: 100,
      symbol: "🌱 Semente do Protagonismo",
      color: "from-neon-blue to-blue-600",
      icon: <Target className="w-6 h-6" />,
      status: "available",
      fluxSeed: null,
      unlockMessage: "Bem-vindo, explorador! Sua jornada na Web3 começa aqui.",
      completionMessage: "Parabéns! Você plantou a primeira semente de sua transformação digital."
    },
    {
      id: 2,
      title: "Iniciação Simbólica: Identidade e Wallet",
      subtitle: "O Ritual de Entrada",
      description: "Chegou a hora de cruzar o portal. Você precisa criar sua identidade digital na Web3 - sua chave para este novo mundo.",
      storyIntro: "🔑 Diante de você se abre um portal místico. Para atravessá-lo, você precisa forjar sua identidade digital - uma chave única que será sua assinatura neste novo mundo. Este não é apenas um processo técnico, é um ritual de transformação.",
      actions: [
        "Criar sua primeira wallet Web3 (TON recomendada)",
        "Escolher seu nome simbólico neste novo mundo",
        "Receber seu primeiro NFT de identidade",
        "Registrar sua intenção no Passaporte Web3"
      ],
      challenge: "Complete o ritual de iniciação: crie sua wallet, escolha seu nome simbólico e responda: 'Quem sou eu neste novo ciclo?' Compartilhe uma foto/print de sua wallet criada (sem mostrar chaves privadas).",
      xpReward: 150,
      symbol: "⚡ FluxSeed #001 - Identidade Digital",
      color: "from-neon-green to-green-600",
      icon: <Zap className="w-6 h-6" />,
      status: "locked",
      fluxSeed: "001",
      unlockMessage: "O portal se abre! Você está pronto para forjar sua identidade digital.",
      completionMessage: "Incrível! Você agora possui uma identidade soberana na Web3. O FluxSeed #001 foi plantado em sua jornada.",
      ritual: "🧙‍♂️ A criação da wallet é um ritual simbólico de nascimento digital. Guarde bem suas chaves - elas são sua essência neste mundo."
    },
    {
      id: 3,
      title: "Círculo de Exploração: Fundamentos da Web3",
      subtitle: "O Mapa do Território",
      description: "Com sua identidade forjada, é hora de explorar este novo território. Você precisa entender as regras, os habitantes e as possibilidades deste mundo.",
      storyIntro: "🗺️ Agora que você atravessou o portal, precisa entender onde está. Este é um mundo vasto, com suas próprias leis, culturas e possibilidades. Blockchain, tokens, DAOs... cada conceito é uma peça do quebra-cabeças que você está montando.",
      actions: [
        "Explorar os fundamentos: Web2 vs Web3",
        "Desvendar o mistério da blockchain",
        "Descobrir tokens, NFTs e DAOs",
        "Criar sua própria analogia para explicar Web3"
      ],
      challenge: "Missão do Explorador: Após estudar os fundamentos, crie uma analogia criativa (desenho, texto, vídeo ou áudio) explicando Web3 para alguém que nunca ouviu falar. Seja criativo! Pode ser uma história, uma metáfora, um poema...",
      xpReward: 200,
      symbol: "🧭 FluxSeed #002 - Curioso Viajante",
      color: "from-neon-purple to-purple-600",
      icon: <Search className="w-6 h-6" />,
      status: "locked",
      fluxSeed: "002",
      unlockMessage: "O mapa se revela! Você está pronto para explorar os fundamentos da Web3.",
      completionMessage: "Excelente! Você mapeou o território Web3. O FluxSeed #002 brilha em sua coleção.",
      fundamentals: [
        "O que é Web3 e por que ela importa?",
        "Blockchain: a tecnologia por trás da revolução",
        "Tokens e NFTs: valor e identidade digitais",
        "DAOs: organizações sem chefe",
        "A importância da descentralização"
      ]
    },
    {
      id: 4,
      title: "Ferramentas do Presente: Wallets, dApps e Exploradores",
      subtitle: "A Forja do Artesão",
      description: "Teoria sem prática é como ter um mapa sem saber caminhar. Chegou a hora de colocar a mão na massa e usar as ferramentas reais da Web3.",
      storyIntro: "⚒️ Conhecimento sem prática é como uma espada sem fio. Você encontrou a forja dos artesãos Web3, onde aprenderá a usar as ferramentas que darão vida às suas ideias. Cada clique, cada transação, cada interação é um passo na sua maestria.",
      actions: [
        "Navegar em seu primeiro dApp",
        "Rastrear transações em exploradores blockchain",
        "Criar ou interagir com um NFT",
        "Experimentar ferramentas de identidade descentralizada"
      ],
      challenge: "Desafio do Artesão: Documente sua primeira experiência prática com 3 ferramentas diferentes (dApp, explorador, NFT). Crie um 'diário de bordo' com prints e reflexões sobre cada experiência. O que te surpreendeu? O que foi mais difícil?",
      xpReward: 250,
      symbol: "🔧 FluxSeed #003 - Ferramenteir@",
      color: "from-yellow-400 to-orange-500",
      icon: <Wrench className="w-6 h-6" />,
      status: "locked",
      fluxSeed: "003",
      unlockMessage: "A forja está acesa! Hora de dominar as ferramentas da Web3.",
      completionMessage: "Fantástico! Você dominou as ferramentas fundamentais. O FluxSeed #003 foi forjado com maestria.",
      toolsQuest: [
        { name: "dApp Explorer", description: "Navegue em um dApp e documente a experiência" },
        { name: "Blockchain Detective", description: "Use um explorador para rastrear uma transação" },
        { name: "NFT Alchemist", description: "Interaja com NFTs (criar, visualizar ou transferir)" },
        { name: "Identity Weaver", description: "Experimente ferramentas de identidade descentralizada" }
      ]
    },
    {
      id: 5,
      title: "Redes e Comunidades Web3: Participação Viva",
      subtitle: "A Taverna dos Aventureiros",
      description: "Nenhum herói jornada sozinho. É hora de encontrar sua tribo, conectar-se com outros exploradores e descobrir as comunidades que estão construindo o futuro.",
      storyIntro: "🏰 Você encontra uma taverna movimentada onde aventureiros de todas as partes se reúnem. Aqui, projetos nascem, ideias se transformam em realidade e comunidades florescem. É hora de encontrar sua tribo e contribuir para algo maior.",
      actions: [
        "Explorar comunidades Web3 ativas",
        "Participar de discussões reais",
        "Conhecer projetos regenerativos",
        "Identificar onde você pode contribuir"
      ],
      challenge: "Missão da Comunidade: Participe ativamente de 2 comunidades Web3 diferentes. Faça pelo menos 1 contribuição significativa em cada (pergunta, resposta, feedback, sugestão). Documente suas interações e reflexões: 'Como fui recebido?' 'Que valor posso agregar?'",
      xpReward: 300,
      symbol: "🕸️ FluxSeed #004 - Tecedor de Redes",
      color: "from-red-400 to-pink-500",
      icon: <Users className="w-6 h-6" />,
      status: "locked",
      fluxSeed: "004",
      unlockMessage: "A taverna te recebe! Hora de encontrar sua tribo na Web3.",
      completionMessage: "Incrível! Você teceu suas primeiras redes. O FluxSeed #004 conecta você ao coletivo.",
      communityQuests: [
        { name: "Greenpill Brasil", role: "Explorador de Impacto" },
        { name: "Gitcoin Community", role: "Financiador de Bens Públicos" },
        { name: "ReFi DAO", role: "Regenerador Climático" },
        { name: "Nouns Brasil", role: "Criador Colaborativo" }
      ]
    },
    {
      id: 6,
      title: "Construindo em Rede: Contribuições Reais",
      subtitle: "O Laboratório do Criador",
      description: "Agora que você conhece o território e encontrou sua tribo, é hora de criar. Sua contribuição única pode ser a peça que faltava no quebra-cabeças coletivo.",
      storyIntro: "🔬 Você descobriu o laboratório secreto onde os verdadeiros criadores trabalham. Aqui, ideias se transformam em realidade, contribuições individuais se tornam impacto coletivo. Qual será sua criação?",
      actions: [
        "Identificar sua forma única de contribuir",
        "Criar algo de valor para a comunidade",
        "Colaborar em projetos existentes",
        "Documentar e compartilhar seu processo"
      ],
      challenge: "Projeto do Criador: Crie uma contribuição real para a comunidade Web3. Pode ser: um artigo, um tutorial, uma arte, um código, uma proposta, uma tradução, um evento... O importante é que seja SUA contribuição única. Documente todo o processo e impacto gerado.",
      xpReward: 400,
      symbol: "🎨 FluxSeed #005 - Cocriador@",
      color: "from-cyan-400 to-blue-500",
      icon: <Palette className="w-6 h-6" />,
      status: "locked",
      fluxSeed: "005",
      unlockMessage: "O laboratório está aberto! Hora de criar sua contribuição única.",
      completionMessage: "Extraordinário! Você criou algo único para o mundo. O FluxSeed #005 materializa sua criatividade.",
      creationTypes: [
        { type: "Técnica", description: "Código, tutorial, ferramenta", icon: "💻" },
        { type: "Criativa", description: "Arte, design, conteúdo", icon: "🎨" },
        { type: "Educativa", description: "Artigo, vídeo, workshop", icon: "📚" },
        { type: "Comunitária", description: "Evento, conexão, facilitação", icon: "🤝" },
        { type: "Estratégica", description: "Proposta, análise, visão", icon: "🎯" }
      ]
    },
    {
      id: 7,
      title: "Ciclo de Retorno e Celebração Regenerativa",
      subtitle: "O Círculo Sagrado",
      description: "Toda jornada tem seu momento de celebração e reflexão. Você completou um ciclo, mas isso não é um fim - é uma espiral ascendente para novos patamares.",
      storyIntro: "🌟 Você retorna ao círculo sagrado onde tudo começou, mas agora carrega consigo as sementes de transformação. É hora de celebrar, refletir e decidir: que nova jornada te chama?",
      actions: [
        "Refletir sobre toda a jornada vivida",
        "Celebrar suas conquistas e aprendizados",
        "Compartilhar sua história com outros",
        "Escolher seu próximo caminho"
      ],
      challenge: "Ritual de Celebração: Crie um relato completo de sua jornada (pode ser texto, vídeo, áudio, arte...). Inclua: principais aprendizados, momentos marcantes, transformações pessoais e que convite você deixa para futuros exploradores. Este será seu legado para a comunidade.",
      xpReward: 500,
      symbol: "🎉 FluxSeed #006 - Celebraçã@",
      color: "from-emerald-400 to-teal-500",
      icon: <Gift className="w-6 h-6" />,
      status: "locked",
      fluxSeed: "006",
      unlockMessage: "O círculo se completa! Hora de celebrar sua transformação.",
      completionMessage: "LENDÁRIO! Você completou o primeiro ciclo. O FluxSeed #006 coroa sua jornada heroica.",
      nextPaths: [
        { path: "Especialização", description: "Aprofunde-se em DeFi, NFTs, DAOs ou ReFi", icon: "🎓" },
        { path: "Mentoria", description: "Guie outros exploradores em sua jornada", icon: "🧙‍♂️" },
        { path: "Construção", description: "Crie seu próprio projeto Web3", icon: "🏗️" },
        { path: "Liderança", description: "Lidere uma comunidade ou movimento", icon: "👑" }
      ]
    }
  ];

  const handleBlockSelect = (blockId: number) => {
    if (blockId <= userProgress.currentBlock) {
      setSelectedBlock(selectedBlock === blockId ? null : blockId);
    }
  };

  const handleCompleteBlock = (blockId: number) => {
    // Simulação de completar bloco
    setUserProgress(prev => {
      const block = blocks[blockId - 1];
      const newFluxSeeds = block.fluxSeed ? [...prev.fluxSeeds, block.fluxSeed] : prev.fluxSeeds;
      
      return {
        ...prev,
        currentBlock: Math.min(blockId + 1, 7),
        completedBlocks: [...prev.completedBlocks, blockId],
        fluxSeeds: newFluxSeeds,
        totalXP: prev.totalXP + block.xpReward
      };
    });
  };

  const handleReportSubmit = (reportData: any) => {
    // Salvar report e completar bloco
    setUserProgress(prev => ({
      ...prev,
      reports: {
        ...prev.reports,
        [reportData.blockId]: reportData
      }
    }));
    
    // Completar o bloco após submissão do report
    handleCompleteBlock(reportData.blockId);
  };

  const getBlockStatus = (blockId: number) => {
    if (userProgress.completedBlocks.includes(blockId)) return 'completed';
    if (blockId === userProgress.currentBlock) return 'current';
    if (blockId < userProgress.currentBlock) return 'available';
    return 'locked';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'ring-2 ring-neon-green';
      case 'current': return 'ring-2 ring-neon-blue animate-pulse';
      case 'available': return 'ring-1 ring-gray-400';
      default: return 'ring-1 ring-gray-600 opacity-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-neon-green" />;
      case 'current': return <Star className="w-4 h-4 text-neon-blue animate-pulse" />;
      case 'available': return <Play className="w-4 h-4 text-gray-400" />;
      default: return <Lock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header with Progress */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Trilha CalangoFlux
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Sua Jornada RPG na Web3 • Ciclo 01
          </p>
          
          {/* Progress Bar */}
          <div className="glass rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-bold">{userProgress.totalXP} XP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-neon-purple" />
                  <span className="text-white">{userProgress.fluxSeeds.length} FluxSeeds</span>
                </div>
              </div>
              <div className="text-gray-300 text-sm">
                Bloco {userProgress.currentBlock} de 7
              </div>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full transition-all duration-500"
                style={{ width: `${(userProgress.currentBlock / 7) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center">
              {blocks.map((block) => (
                <div key={block.id} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    getBlockStatus(block.id) === 'completed' ? 'bg-neon-green' :
                    getBlockStatus(block.id) === 'current' ? 'bg-neon-blue' :
                    getBlockStatus(block.id) === 'available' ? 'bg-gray-400' : 'bg-gray-600'
                  }`}>
                    {getStatusIcon(getBlockStatus(block.id))}
                  </div>
                  <span className="text-xs text-gray-400 hidden md:block">Bloco {block.id}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-4">
              "Esta é sua jornada heroica na Web3. Cada bloco é desbloqueado apenas após completar o anterior."
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Scroll className="w-4 h-4 text-neon-blue" />
                <span className="text-gray-300">Storytelling RPG</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-neon-green" />
                <span className="text-gray-300">Reports obrigatórios</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-neon-purple" />
                <span className="text-gray-300">NFTs por conquista</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blocks.map((block) => {
            const status = getBlockStatus(block.id);
            const isAccessible = status !== 'locked';
            
            return (
              <div 
                key={block.id}
                className={`glass rounded-2xl p-6 transition-all duration-300 ${
                  isAccessible ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed'
                } ${getStatusColor(status)} ${
                  selectedBlock === block.id ? 'ring-2 ring-neon-blue' : ''
                }`}
                onClick={() => isAccessible && handleBlockSelect(block.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${block.color} rounded-xl flex items-center justify-center ${
                    !isAccessible ? 'opacity-50' : ''
                  }`}>
                    {!isAccessible ? <Lock className="w-6 h-6" /> : block.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white text-lg">Bloco {block.id}</h3>
                      {getStatusIcon(status)}
                    </div>
                    {block.fluxSeed && (
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Award className="w-3 h-3" />
                        <span>FluxSeed #{block.fluxSeed}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <h4 className="font-bold text-white mb-2">{block.title}</h4>
                <p className="text-neon-blue text-sm font-medium mb-3">{block.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{block.description}</p>
                
                {status === 'locked' && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Complete o bloco anterior para desbloquear</span>
                  </div>
                )}
                
                {isAccessible && (
                  <div className="flex items-center justify-between">
                    <span className="text-neon-blue text-sm font-medium">
                      {status === 'completed' ? 'Revisar' : status === 'current' ? 'Continuar' : 'Explorar'}
                    </span>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm">{block.xpReward} XP</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Block Details */}
        {selectedBlock && (
          <div className="glass rounded-2xl p-8 mb-12">
            {(() => {
              const block = blocks.find(b => b.id === selectedBlock);
              const status = getBlockStatus(selectedBlock);
              if (!block) return null;
              
              return (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${block.color} rounded-xl flex items-center justify-center`}>
                      {block.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">Bloco {block.id}</h3>
                        {getStatusIcon(status)}
                      </div>
                      <h4 className="text-xl text-neon-blue font-medium">{block.subtitle}</h4>
                      <p className="text-gray-300">{block.title}</p>
                    </div>
                  </div>

                  {/* Story Introduction */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl border border-neon-blue/20">
                    <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Scroll className="w-5 h-5 text-neon-blue" />
                      📖 História da Jornada
                    </h5>
                    <p className="text-gray-300 leading-relaxed">{block.storyIntro}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-neon-green" />
                          🎯 Missões do Bloco
                        </h5>
                        <ul className="space-y-2">
                          {block.actions.map((action, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {block.fundamentals && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Brain className="w-4 h-4 text-neon-purple" />
                            📚 Conhecimentos a Desbloquear
                          </h5>
                          <ul className="space-y-2">
                            {block.fundamentals.map((fundamental, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <Lightbulb className="w-4 h-4 text-neon-yellow mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{fundamental}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {block.toolsQuest && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-yellow-400" />
                            ⚒️ Quests de Ferramentas
                          </h5>
                          <div className="space-y-2">
                            {block.toolsQuest.map((quest, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{quest.name}</div>
                                <div className="text-gray-400 text-xs">{quest.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.communityQuests && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-red-400" />
                            🏰 Comunidades para Explorar
                          </h5>
                          <div className="space-y-2">
                            {block.communityQuests.map((quest, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{quest.name}</div>
                                <div className="text-red-300 text-xs">Papel: {quest.role}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      {/* Challenge */}
                      <div className="p-6 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-yellow-400" />
                          🏆 Desafio Principal
                        </h5>
                        <p className="text-gray-300 text-sm mb-4">{block.challenge}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">{block.xpReward} XP</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-neon-purple" />
                            <span className="text-neon-purple text-sm">{block.symbol}</span>
                          </div>
                        </div>
                      </div>

                      {block.creationTypes && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Palette className="w-4 h-4 text-cyan-400" />
                            🎨 Tipos de Criação
                          </h5>
                          <div className="space-y-2">
                            {block.creationTypes.map((type, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-lg">{type.icon}</span>
                                  <span className="font-medium text-white text-sm">{type.type}</span>
                                </div>
                                <div className="text-gray-400 text-xs">{type.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.nextPaths && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Share2 className="w-4 h-4 text-emerald-400" />
                            🌟 Próximos Caminhos
                          </h5>
                          <div className="space-y-2">
                            {block.nextPaths.map((path, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-lg">{path.icon}</span>
                                  <span className="font-medium text-white text-sm">{path.path}</span>
                                </div>
                                <div className="text-gray-400 text-xs">{path.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Unlock/Completion Messages */}
                      {status === 'current' && (
                        <div className="p-4 bg-neon-blue/10 rounded-xl border border-neon-blue/20">
                          <p className="text-neon-blue text-sm font-medium">{block.unlockMessage}</p>
                        </div>
                      )}

                      {status === 'completed' && (
                        <div className="p-4 bg-neon-green/10 rounded-xl border border-neon-green/20">
                          <p className="text-neon-green text-sm font-medium">{block.completionMessage}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    {status === 'current' && (
                      <div className="flex gap-4">
                        <button 
                          className="btn-primary flex-1"
                          onClick={() => setReportModalOpen(true)}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Report do Desafio
                        </button>
                        <button 
                          className="btn-secondary"
                          onClick={() => handleCompleteBlock(block.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Pular (Sem Report)
                        </button>
                      </div>
                    )}
                    
                    {status === 'completed' && (
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/20 text-neon-green rounded-lg">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Bloco Completado!</span>
                        </div>
                      </div>
                    )}
                    
                    {status === 'available' && (
                      <button className="btn-primary w-full">
                        <Play className="w-4 h-4 mr-2" />
                        Iniciar Bloco {block.id}
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            🎮 Sua Aventura RPG na Web3
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada bloco é uma nova fase da sua jornada heroica. Complete desafios, ganhe XP, 
            colete FluxSeeds e desbloqueie novos territórios na Web3.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              {userProgress.currentBlock === 1 ? 'Começar Aventura' : `Continuar Bloco ${userProgress.currentBlock}`}
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              <Scroll className="w-5 h-5 mr-2" />
              Ver Passaporte de Aventuras
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            ✅ Progressão controlada • ✅ Reports obrigatórios • ✅ NFTs por conquista • ✅ Storytelling imersivo
          </p>
                  </div>
        </div>

        {/* Report Modal */}
        {selectedBlock && reportModalOpen && (
          <ReportModal
            isOpen={reportModalOpen}
            onClose={() => setReportModalOpen(false)}
            onSubmit={handleReportSubmit}
            block={blocks.find(b => b.id === selectedBlock)!}
          />
        )}
      </div>
    );
  };
  
  export default Journey;