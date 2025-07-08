import React, { useState } from 'react';
import { Play, Clock, Users, Award, CheckCircle, BookOpen, Video, Bot, Zap, Sparkles, Heart, Leaf, Target, Network, Gift, Search, MessageCircle, Lightbulb, Wrench, Globe, Share2, Palette, Brain, Compass } from 'lucide-react';

const Journey = () => {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  const blocks = [
    {
      id: 1,
      title: "Protagonismo Regenerativo no Aprendizado Descentralizado",
      subtitle: "Entrada na trilha com consciência regenerativa",
      description: "Criar uma jornada de aprendizagem viva e descentralizada",
      actions: [
        "Compreender princípios da trilha",
        "Definir intenções pessoais",
        "Conectar-se com a rede",
        "Estabelecer ritmo próprio"
      ],
      symbol: "Entrada consciente na trilha",
      color: "from-neon-blue to-blue-600",
      icon: <Target className="w-6 h-6" />,
      fluxSeed: null,
      tools: [],
      reflections: [],
      ethics: []
    },
    {
      id: 2,
      title: "Iniciação Simbólica: Identidade e Wallet",
      subtitle: "FluxSeed #001 - NFT de identidade Web3",
      description: "Dar início à jornada prática com consciência e leveza",
      actions: [
        "Criar ou recuperar uma Wallet (TON recomendada)",
        "Registrar o nome simbólico",
        "Receber o NFT de Iniciação (FluxSeed #001)",
        "Anotar primeira intenção no Passaporte Web3",
        "Responder: 'O que me trouxe até aqui?'"
      ],
      symbol: "FluxSeed #001",
      color: "from-neon-green to-green-600",
      icon: <Zap className="w-6 h-6" />,
      fluxSeed: "001",
      ritual: "Ativação da wallet como ritual simbólico",
      tools: [
        { name: "Wallet (TON)", function: "Armazena identidade e NFTs simbólicos" },
        { name: "Formulário Notion", function: "Registro da intenção inicial" },
        { name: "Bot IA", function: "Envia NFT simbólico + ativa próxima etapa" },
        { name: "HackMD", function: "Mostra documento de instrução" }
      ],
      reflections: [
        "Nome simbólico escolhido",
        "ID pública da wallet (opcional)",
        "Intenção registrada no Passaporte",
        "NFT simbólico recebido"
      ],
      ethics: [
        "Nunca compartilhe suas chaves privadas",
        "O NFT recebido é apenas simbólico, sem valor comercial",
        "A wallet pode ser usada em testnet ou apenas como registro"
      ]
    },
    {
      id: 3,
      title: "Círculo de Exploração: Fundamentos da Web3",
      subtitle: "FluxSeed #002 - NFT de exploração",
      description: "Explorar conceitos fundamentais com linguagem própria",
      actions: [
        "Assistir vídeo ou leitura de fontes públicas",
        "Responder ao Agente IA com perguntas guiadas",
        "Fazer mapa mental (analógico ou digital)",
        "Compartilhar dúvida ou insight em grupo",
        "Criar analogia própria (desenho, fala, escrita, poema)"
      ],
      symbol: "FluxSeed #002 - Curioso Viajante",
      color: "from-neon-purple to-purple-600",
      icon: <Search className="w-6 h-6" />,
      fluxSeed: "002",
      fundamentals: [
        "O que é Web3?",
        "Qual a diferença entre Web2 e Web3?",
        "Blockchain: o que é, por que surgiu, para quem serve?",
        "Tokens, NFTs, DAOs, dApps: pra que tudo isso?",
        "A importância de uma internet mais livre"
      ],
      tools: [
        { name: "Vídeos públicos", function: "Sem login obrigatório" },
        { name: "Bot IA", function: "Resumos e links seguros" },
        { name: "Painel Notion", function: "Material aberto e remixável" },
        { name: "HackMD", function: "Versões públicas e replicáveis" }
      ],
      reflections: [
        "Qual conceito Web3 mais te instiga?",
        "Que dúvida ou desconforto surgiu?",
        "O que te parece possível construir com isso?"
      ],
      ethics: [
        "Nenhum conceito é obrigatório",
        "Todas as dúvidas são bem-vindas",
        "Não há julgamento, apenas escuta"
      ]
    },
    {
      id: 4,
      title: "Ferramentas do Presente: Wallets, dApps e Exploradores",
      subtitle: "FluxSeed #003 - NFT de prática",
      description: "Experiência prática com ferramentas reais e públicas",
      actions: [
        "Navegar em um dApp (simples, sem login ou risco)",
        "Localizar sua wallet num explorador blockchain",
        "Criar ou clonar um NFT simbólico via IPFS ou bot",
        "Registrar a experiência com prints, anotações ou relatos"
      ],
      symbol: "FluxSeed #003 - Ferramenteir@",
      color: "from-yellow-400 to-orange-500",
      icon: <Wrench className="w-6 h-6" />,
      fluxSeed: "003",
      toolsPresented: [
        { name: "Wallet (TON / MetaMask)", function: "Identidade, acesso e assinatura simbólica" },
        { name: "dApp (Atlantis, Gotas, Snapshot)", function: "Navegação e participação leve" },
        { name: "Explorador (TONscan / Etherscan)", function: "Visualização de registros públicos" },
        { name: "NFT.Storage / IPFS", function: "Armazenamento descentralizado" },
        { name: "ENS / TON DNS", function: "Nome simbólico na Web3" }
      ],
      reflections: [
        "O que me surpreendeu?",
        "O que me pareceu mais útil?",
        "Senti-me mais autônomo ou mais confuso? Por quê?"
      ],
      ethics: [
        "Todo conteúdo é em testnet ou simbólico",
        "Nenhuma chave privada será pedida ou exposta",
        "A experiência é vivencial e registrada por escolha pessoal"
      ]
    },
    {
      id: 5,
      title: "Redes e Comunidades Web3: Participação Viva",
      subtitle: "FluxSeed #004 - NFT de comunidade",
      description: "Conectar-se com redes descentralizadas vivas",
      actions: [
        "Entrar em ao menos 1 comunidade Web3 de interesse",
        "Ler ou comentar um post real de uma DAO",
        "Conhecer e registrar 3 iniciativas regenerativas",
        "Identificar valores que fazem sentido com seu caminho"
      ],
      symbol: "FluxSeed #004 - Tecedor de Redes",
      color: "from-red-400 to-pink-500",
      icon: <Users className="w-6 h-6" />,
      fluxSeed: "004",
      communities: [
        "Greenpill Brasil",
        "Giveth / Gitcoin",
        "ReFi DAO",
        "Lil Nouns / Nouns Brasil",
        "Atlantis Protocol / Gotas.social"
      ],
      tools: [
        { name: "Discord / Telegram", function: "Comunicação direta com comunidades Web3" },
        { name: "Mirror.xyz / Farcaster / X", function: "Publicações descentralizadas" },
        { name: "Repositórios públicos", function: "Acesso a documentos e propostas abertas" }
      ],
      reflections: [
        "Qual projeto mais ressoou contigo?",
        "Como você foi recebido?",
        "Que contribuição você gostaria de oferecer nesse tipo de rede?"
      ],
      ethics: [
        "Toda participação é voluntária e simbólica",
        "Nenhuma comunidade será usada como canal de venda",
        "A proposta é aprender pelo vínculo, não pela performance"
      ]
    },
    {
      id: 6,
      title: "Construindo em Rede: Contribuições Reais",
      subtitle: "FluxSeed #005 - NFT de contribuição",
      description: "Cocriação e devolutiva simbólica",
      actions: [
        "Oferecer contribuição técnica, criativa, afetiva ou estratégica",
        "Usar HackMD coletivo como mural de contribuições",
        "Receber sugestões do Bot IA sobre onde contribuir",
        "Registrar tipo de contribuição no Passaporte Web3"
      ],
      symbol: "FluxSeed #005 - Cocriador@",
      color: "from-cyan-400 to-blue-500",
      icon: <Palette className="w-6 h-6" />,
      fluxSeed: "005",
      contributionTypes: [
        { type: "Técnica", examples: "Corrigir link, traduzir termo, sugerir script" },
        { type: "Criativa", examples: "Criar arte, texto, NFT, vídeo" },
        { type: "Afetiva", examples: "Acolher alguém novo, agradecer no chat" },
        { type: "Estratégica", examples: "Propor ideia de melhoria, apontar sinergias" },
        { type: "Documental", examples: "Escrever um relato ou feedback no HackMD" }
      ],
      reflections: [
        "Qual foi sua contribuição neste bloco?",
        "Como se sentiu ao oferecer algo?",
        "Que tipo de retorno ou impacto houve (mesmo que invisível)?"
      ],
      ethics: [
        "Toda contribuição é válida e reconhecida",
        "A participação é simbólica, não obrigatória",
        "Ninguém será ranqueado por 'fazer mais'"
      ]
    },
    {
      id: 7,
      title: "Ciclo de Retorno e Celebração Regenerativa",
      subtitle: "FluxSeed #006 - NFT de celebração",
      description: "Celebração e ramificação em novos ciclos",
      actions: [
        "Rever os registros do Passaporte Web3",
        "Compartilhar um relato (público ou privado) sobre sua trilha",
        "Participar de um círculo simbólico de celebração",
        "Escolher entre: seguir para novo ciclo ou pausar com fechamento"
      ],
      symbol: "FluxSeed #006 - Celebraçã@",
      color: "from-emerald-400 to-teal-500",
      icon: <Gift className="w-6 h-6" />,
      fluxSeed: "006",
      symbolicElements: [
        { element: "NFT FluxSeed #006", description: "Celebraçã@ – representa o ciclo concluído" },
        { element: "Token Círculo Vivo", description: "Libera acesso a mentorias ou Labs" },
        { element: "Badge Tecel@", description: "Indica contribuição viva à rede" }
      ],
      pathways: [
        { path: "Novo ciclo", description: "Inicia trilha temática (Ecossistemas, DAOs, NFTs etc.)" },
        { path: "Ciclo de pausa", description: "Encerra com documentação pessoal e NFT final" },
        { path: "Mentoria", description: "Pode se tornar facilitador ou ponto de apoio local" }
      ],
      reflections: [
        "O que você levou da trilha para sua vida real?",
        "Que relação você passou a ter com a Web3?",
        "Que convite você deixaria para quem virá depois?"
      ],
      ethics: [
        "Nenhuma trilha é final",
        "A pausa é um direito, a continuidade é um convite",
        "O valor está em cada vivência, não em um certificado"
      ]
    }
  ];

  const principles = [
    {
      title: "Autonomia não solitária",
      description: "Cada pessoa é parte ativa e responsável",
      icon: "🌱"
    },
    {
      title: "Aprender fazendo",
      description: "Com sentido real e prático",
      icon: "🛠️"
    },
    {
      title: "Registro sem vigilância",
      description: "Progresso autogerido",
      icon: "📝"
    },
    {
      title: "Não competição",
      description: "Gamificação simbólica, não opressora",
      icon: "🤝"
    },
    {
      title: "Cocriação contínua",
      description: "Todo conteúdo pode ser remixado",
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            Letramento Web3 regenerativo • Ciclo 01
          </p>
          <div className="glass rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-4">
              "A trilha não é sobre Web3. É sobre se tornar um nó vivo em uma nova rede de aprendizagem."
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-blue" />
                <span className="text-gray-300">7 blocos orgânicos</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-neon-green" />
                <span className="text-gray-300">Ritmo próprio</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-neon-purple" />
                <span className="text-gray-300">FluxSeeds simbólicos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 gradient-text">
            🌱 Princípios da Trilha
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{principle.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{principle.title}</h3>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flow */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 gradient-text">
            🌀 Fluxo Proposto (não obrigatório)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 glass-dark rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
              <span className="text-gray-300 text-sm">Iniciação simbólica com identidade digital</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-dark rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-green to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
              <span className="text-gray-300 text-sm">Exploração dos fundamentos em linguagem própria</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-dark rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-purple to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
              <span className="text-gray-300 text-sm">Experiência com ferramentas reais e públicas</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-dark rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
              <span className="text-gray-300 text-sm">Conexão com redes descentralizadas vivas</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-dark rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">5</div>
              <span className="text-gray-300 text-sm">Cocriação e devolutiva simbólica</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-dark rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">6</div>
              <span className="text-gray-300 text-sm">Celebração e ramificação em novos ciclos</span>
            </div>
          </div>
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blocks.map((block) => (
            <div 
              key={block.id}
              className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedBlock === block.id ? 'ring-2 ring-neon-blue' : ''
              }`}
              onClick={() => setSelectedBlock(selectedBlock === block.id ? null : block.id)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${block.color} rounded-xl flex items-center justify-center`}>
                  {block.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Bloco {block.id}</h3>
                  {block.fluxSeed && (
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Award className="w-3 h-3" />
                      <span>FluxSeed #{block.fluxSeed}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <h4 className="font-bold text-white mb-2">{block.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{block.description}</p>
              
              {block.fluxSeed && (
                <div className="flex items-center gap-2 text-xs text-neon-blue mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>{block.subtitle}</span>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-neon-blue text-sm font-medium">Ver detalhes</span>
                <Play className="w-4 h-4 text-neon-blue" />
              </div>
            </div>
          ))}
        </div>

        {/* Block Details */}
        {selectedBlock && (
          <div className="glass rounded-2xl p-8 mb-12">
            {(() => {
              const block = blocks.find(b => b.id === selectedBlock);
              if (!block) return null;
              
              return (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${block.color} rounded-xl flex items-center justify-center`}>
                      {block.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Bloco {block.id}</h3>
                      <h4 className="text-xl text-gray-300">{block.title}</h4>
                      {block.fluxSeed && (
                        <div className="flex items-center gap-2 mt-2">
                          <Award className="w-4 h-4 text-neon-blue" />
                          <span className="text-neon-blue text-sm font-medium">{block.symbol}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-neon-blue" />
                          🌱 Ações do Bloco:
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
                            📚 Fundamentos Abordados:
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

                      {block.toolsPresented && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-yellow-400" />
                            🧩 Ferramentas Apresentadas:
                          </h5>
                          <div className="space-y-2">
                            {block.toolsPresented.map((tool, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{tool.name}</div>
                                <div className="text-gray-400 text-xs">{tool.function}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.communities && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-red-400" />
                            🌐 Comunidades Sugeridas:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {block.communities.map((community, index) => (
                              <span key={index} className="px-3 py-1 bg-red-400/20 text-red-300 rounded-full text-xs">
                                {community}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.contributionTypes && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Palette className="w-4 h-4 text-cyan-400" />
                            🌱 Tipos de Contribuição:
                          </h5>
                          <div className="space-y-2">
                            {block.contributionTypes.map((contrib, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{contrib.type}</div>
                                <div className="text-gray-400 text-xs">{contrib.examples}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-neon-blue" />
                          🎯 Intenção:
                        </h5>
                        <p className="text-gray-300 text-sm">{block.description}</p>
                      </div>

                      {block.tools && block.tools.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Bot className="w-4 h-4 text-neon-green" />
                            🛠️ Ferramentas:
                          </h5>
                          <div className="space-y-2">
                            {block.tools.map((tool, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{tool.name}</div>
                                <div className="text-gray-400 text-xs">{tool.function}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.reflections && block.reflections.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-neon-purple" />
                            🧠 Reflexões no Passaporte:
                          </h5>
                          <ul className="space-y-2">
                            {block.reflections.map((reflection, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <Compass className="w-4 h-4 text-neon-purple mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{reflection}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {block.symbolicElements && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Gift className="w-4 h-4 text-emerald-400" />
                            🪙 Elementos Simbólicos:
                          </h5>
                          <div className="space-y-2">
                            {block.symbolicElements.map((element, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{element.element}</div>
                                <div className="text-gray-400 text-xs">{element.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.pathways && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Share2 className="w-4 h-4 text-emerald-400" />
                            🌀 Encaminhamentos:
                          </h5>
                          <div className="space-y-2">
                            {block.pathways.map((pathway, index) => (
                              <div key={index} className="p-3 glass-dark rounded-lg">
                                <div className="font-medium text-white text-sm">{pathway.path}</div>
                                <div className="text-gray-400 text-xs">{pathway.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {block.ethics && block.ethics.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-400" />
                            🌍 Ética e Cuidado:
                          </h5>
                          <ul className="space-y-2">
                            {block.ethics.map((ethic, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300">
                                <Heart className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ethic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button className="btn-primary w-full md:w-auto">
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar Bloco {block.id}
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Components */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">🧩 Componentes Ativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">HackMD</h3>
              <p className="text-gray-400 text-sm">Registro público de aprendizados</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Bot CalangoNauta</h3>
              <p className="text-gray-400 text-sm">Guia da jornada e checkpoint</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Wallet TON</h3>
              <p className="text-gray-400 text-sm">Identidade simbólica + NFTs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Painel de Jornada</h3>
              <p className="text-gray-400 text-sm">Rastreia avanços com autonomia</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">NFT de Bloco</h3>
              <p className="text-gray-400 text-sm">Simboliza participação</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Passaporte Web3</h3>
              <p className="text-gray-400 text-sm">Documento pessoal de trilha</p>
            </div>
          </div>
        </div>

        {/* Tokenization */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">🪙 Tokenização Ética</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🌱</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Tokens Simbólicos</h3>
              <p className="text-gray-400 text-sm">Sem valor financeiro, apenas simbólico</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="font-semibold text-white mb-2">FluxSeeds</h3>
              <p className="text-gray-400 text-sm">1 token por bloco completado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">🔄</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Acesso a Labs</h3>
              <p className="text-gray-400 text-sm">Mentorias e DAO simulada</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            🌱 Pronto para se tornar um nó vivo?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            A trilha é aberta, orgânica e adaptável. Pode ser utilizada para autoformação, 
            vivência em grupo, mentoria ou ciclo educativo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Iniciar Bloco 01
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Passaporte Web3
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            ✅ Autonomia não solitária • ✅ Ritmo próprio • ✅ Registro sem vigilância • ✅ Cocriação contínua
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;