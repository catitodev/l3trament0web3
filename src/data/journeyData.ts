import { JourneyModule, GotasMarketplace, User, Lesson } from '../types/journey';

// Dados mockados da jornada completa
export const JOURNEY_MODULES: JourneyModule[] = [
  {
    id: 'module-01-discovery',
    title: 'Descoberta Web3',
    description: 'Primeiros passos no universo descentralizado. Aprenda os conceitos básicos e configure sua primeira carteira digital.',
    order: 1,
    xpRange: [0, 100],
    gotasReward: 50,
    prerequisites: [],
    estimatedHours: 4,
    difficulty: 'beginner',
    category: 'discovery',
    lessons: [
      {
        id: 'lesson-01-01',
        title: 'Boas-vindas ao L3trament0Web3',
        description: 'Introdução à plataforma e seus objetivos',
        type: 'video',
        content: {
          videoUrl: 'https://example.com/welcome-video',
          text: 'Bem-vindo ao L3trament0Web3! Vamos começar sua jornada...'
        },
        xpReward: 10,
        gotasReward: 5,
        duration: 15,
        prerequisites: [],
        achievements: ['first_step'],
        completed: false
      },
      {
        id: 'lesson-01-02',
        title: 'O que é Web3?',
        description: 'Conceitos fundamentais da web descentralizada',
        type: 'reading',
        content: {
          text: 'Web3 representa a terceira geração da internet...',
          interactiveElements: [
            {
              type: 'demo',
              title: 'Comparação Web2 vs Web3',
              description: 'Visualize as diferenças interativamente',
              component: 'Web3ComparisonDemo',
              params: {}
            }
          ]
        },
        xpReward: 15,
        gotasReward: 7,
        duration: 25,
        prerequisites: ['lesson-01-01'],
        achievements: ['curious_mind'],
        completed: false
      },
      {
        id: 'lesson-01-03',
        title: 'Sua primeira carteira',
        description: 'Aprenda a criar e usar uma carteira digital',
        type: 'simulation',
        content: {
          simulation: {
            id: 'wallet-creation',
            title: 'Simulador de Carteira',
            description: 'Pratique criando uma carteira em ambiente seguro',
            type: 'wallet',
            scenario: 'Você precisa criar sua primeira carteira digital para interagir com aplicações Web3',
            objectives: [
              'Criar uma carteira segura',
              'Fazer backup da seed phrase',
              'Conectar com uma dApp'
            ],
            tools: ['MetaMask Simulator', 'Seed Phrase Generator'],
            duration: 30
          }
        },
        xpReward: 20,
        gotasReward: 10,
        duration: 30,
        prerequisites: ['lesson-01-02'],
        achievements: ['first_wallet'],
        completed: false
      },
      {
        id: 'lesson-01-04',
        title: 'Avaliação: Conceitos Básicos',
        description: 'Teste seus conhecimentos sobre Web3',
        type: 'quiz',
        content: {
          quiz: {
            id: 'quiz-01',
            questions: [
              {
                id: 'q1',
                question: 'O que significa descentralização na Web3?',
                type: 'multiple_choice',
                options: [
                  'Controle por uma única empresa',
                  'Distribuição de poder entre múltiplos participantes',
                  'Maior velocidade de processamento',
                  'Redução de custos'
                ],
                correctAnswer: 1,
                explanation: 'Descentralização significa que o poder e controle são distribuídos entre múltiplos participantes da rede.',
                points: 10
              },
              {
                id: 'q2',
                question: 'Uma carteira digital serve para:',
                type: 'multiple_choice',
                options: [
                  'Armazenar apenas criptomoedas',
                  'Gerenciar identidade e ativos digitais',
                  'Navegar na internet',
                  'Enviar emails'
                ],
                correctAnswer: 1,
                explanation: 'Uma carteira digital é uma ferramenta para gerenciar sua identidade digital e ativos na blockchain.',
                points: 10
              }
            ],
            passingScore: 80,
            maxAttempts: 3,
            attempts: 0
          }
        },
        xpReward: 25,
        gotasReward: 15,
        duration: 20,
        prerequisites: ['lesson-01-03'],
        achievements: ['quiz_master'],
        completed: false
      }
    ]
  },
  {
    id: 'module-02-digital-literacy',
    title: 'Letramento Digital',
    description: 'Desenvolva habilidades essenciais para navegar com segurança no mundo digital e Web3.',
    order: 2,
    xpRange: [100, 300],
    gotasReward: 75,
    prerequisites: ['module-01-discovery'],
    estimatedHours: 6,
    difficulty: 'beginner',
    category: 'digital_literacy',
    lessons: [
      {
        id: 'lesson-02-01',
        title: 'Segurança Digital',
        description: 'Princípios de segurança para o mundo digital',
        type: 'interactive',
        content: {
          text: 'A segurança digital é fundamental...',
          interactiveElements: [
            {
              type: 'simulation',
              title: 'Simulador de Phishing',
              description: 'Aprenda a identificar tentativas de phishing',
              component: 'PhishingSimulator',
              params: {
                scenarios: ['email', 'website', 'social_media']
              }
            }
          ]
        },
        xpReward: 30,
        gotasReward: 12,
        duration: 45,
        prerequisites: [],
        achievements: ['security_aware'],
        completed: false
      },
      {
        id: 'lesson-02-02',
        title: 'Privacidade e Dados',
        description: 'Como proteger sua privacidade online',
        type: 'reading',
        content: {
          text: 'Seus dados são valiosos...',
          interactiveElements: [
            {
              type: 'tool',
              title: 'Verificador de Privacidade',
              description: 'Analise suas configurações de privacidade',
              component: 'PrivacyChecker',
              params: {}
            }
          ]
        },
        xpReward: 25,
        gotasReward: 10,
        duration: 35,
        prerequisites: ['lesson-02-01'],
        achievements: ['privacy_guardian'],
        completed: false
      }
    ]
  },
  {
    id: 'module-03-public-goods',
    title: 'Bens Públicos',
    description: 'Entenda a teoria dos bens públicos e como contribuir para o ecossistema Web3.',
    order: 3,
    xpRange: [300, 600],
    gotasReward: 100,
    prerequisites: ['module-02-digital-literacy'],
    estimatedHours: 8,
    difficulty: 'intermediate',
    category: 'public_goods',
    lessons: [
      {
        id: 'lesson-03-01',
        title: 'Teoria dos Bens Públicos',
        description: 'Fundamentos econômicos dos bens públicos',
        type: 'reading',
        content: {
          text: 'Bens públicos são recursos que beneficiam toda a sociedade...',
          interactiveElements: [
            {
              type: 'demo',
              title: 'Visualizador de Bens Públicos',
              description: 'Explore exemplos interativos',
              component: 'PublicGoodsVisualizer',
              params: {}
            }
          ]
        },
        xpReward: 40,
        gotasReward: 15,
        duration: 50,
        prerequisites: [],
        achievements: ['public_goods_scholar'],
        completed: false
      }
    ],
    project: {
      id: 'project-03',
      title: 'Proposta de Bem Público',
      description: 'Crie uma proposta para um bem público digital',
      requirements: [
        'Identificar um problema real',
        'Propor uma solução como bem público',
        'Justificar o impacto social',
        'Planejar sustentabilidade'
      ],
      deliverables: [
        'Documento de proposta (máx. 2 páginas)',
        'Apresentação em slides',
        'Vídeo pitch de 3 minutos'
      ],
      evaluation: {
        criteria: {
          technical: 25,
          creativity: 25,
          impact: 30,
          presentation: 20
        },
        peerReview: true,
        mentorReview: true
      },
      submissions: [],
      maxScore: 100
    }
  }
];

// Dados mockados do marketplace
export const MARKETPLACE_DATA: GotasMarketplace = {
  nfts: [
    {
      id: 'nft-pioneer-badge',
      name: 'Badge Pioneiro L3',
      description: 'NFT exclusivo para os primeiros 100 usuários da plataforma',
      cost: 500,
      category: 'nft',
      available: true,
      quantity: 100,
      remaining: 47,
      image: '/images/pioneer-badge.png',
      metadata: {
        rarity: 'legendary',
        artist: 'L3trament0 Team',
        benefits: ['Acesso vitalício a workshops', 'Prioridade em eventos']
      }
    },
    {
      id: 'nft-module-completion',
      name: 'Certificado de Conclusão',
      description: 'NFT que comprova a conclusão de um módulo',
      cost: 200,
      category: 'nft',
      available: true,
      quantity: 1000,
      remaining: 856
    }
  ],
  access: [
    {
      id: 'access-advanced-workshop',
      name: 'Workshop Avançado ReFi',
      description: 'Acesso a workshop exclusivo sobre finanças regenerativas',
      cost: 300,
      category: 'access',
      available: true,
      timeLimit: new Date('2024-12-31')
    },
    {
      id: 'access-mentor-session',
      name: 'Sessão de Mentoria 1:1',
      description: 'Uma hora de mentoria individual com expert',
      cost: 400,
      category: 'mentorship',
      available: true,
      quantity: 50,
      remaining: 23
    }
  ],
  events: [
    {
      id: 'event-hackathon-ticket',
      name: 'Ingresso Hackathon Web3',
      description: 'Participação no hackathon de soluções Web3',
      cost: 250,
      category: 'event',
      available: true,
      timeLimit: new Date('2024-03-15'),
      quantity: 200,
      remaining: 156
    }
  ],
  physical: [
    {
      id: 'physical-tshirt',
      name: 'Camiseta L3trament0Web3',
      description: 'Camiseta oficial da comunidade',
      cost: 150,
      category: 'physical',
      available: true,
      quantity: 100,
      remaining: 78
    }
  ]
};

// Dados mockados do usuário
export const MOCK_USER: User = {
  id: 'user-001',
  username: 'web3explorer',
  email: 'user@example.com',
  avatar: '/images/avatar.png',
  bio: 'Apaixonado por tecnologia e impacto social',
  joinedAt: new Date('2024-01-15'),
  lastActive: new Date(),
  profile: {
    level: 2,
    xp: 150,
    totalXp: 150,
    xpToNextLevel: 150,
    gotasBalance: 324,
    streakDays: 7,
    completedModules: ['module-01-discovery'],
    achievements: [
      {
        id: 'first_step',
        name: 'Primeiro Passo',
        description: 'Completou a primeira lição',
        icon: '🚀',
        category: 'EXPLORER',
        gotasReward: 10,
        unlockedAt: new Date('2024-01-16'),
        rarity: 'common'
      },
      {
        id: 'curious_mind',
        name: 'Mente Curiosa',
        description: 'Explorou 10 lições diferentes',
        icon: '🧠',
        category: 'EXPLORER',
        gotasReward: 25,
        unlockedAt: new Date('2024-01-20'),
        rarity: 'rare'
      }
    ],
    reputation: 85,
    rank: 156
  },
  preferences: {
    notifications: true,
    publicProfile: true,
    mentorshipAvailable: false,
    language: 'pt-BR',
    theme: 'dark'
  }
};

// Funções utilitárias para demonstração
export const getModuleById = (moduleId: string): JourneyModule | undefined => {
  return JOURNEY_MODULES.find(module => module.id === moduleId);
};

export const getNextModule = (currentModuleId: string): JourneyModule | undefined => {
  const currentModule = getModuleById(currentModuleId);
  if (!currentModule) return undefined;
  
  return JOURNEY_MODULES.find(module => module.order === currentModule.order + 1);
};

export const getUserProgress = (userId: string) => {
  // Simular busca de progresso do usuário
  const completedLessons = JOURNEY_MODULES.flatMap(module => 
    module.lessons.filter(lesson => lesson.completed)
  );
  
  const totalLessons = JOURNEY_MODULES.flatMap(module => module.lessons).length;
  
  return {
    overallProgress: (completedLessons.length / totalLessons) * 100,
    completedModules: MOCK_USER.profile.completedModules.length,
    totalModules: JOURNEY_MODULES.length,
    currentLevel: MOCK_USER.profile.level,
    totalXp: MOCK_USER.profile.totalXp,
    gotasBalance: MOCK_USER.profile.gotasBalance
  };
};

export const simulateGotasTransaction = (
  type: 'earned' | 'spent' | 'donated',
  amount: number,
  description: string,
  moduleId?: string,
  lessonId?: string
) => {
  return {
    id: `tx-${Date.now()}`,
    type,
    amount,
    description,
    timestamp: new Date(),
    moduleId,
    lessonId,
    hash: `0x${Math.random().toString(16).substr(2, 64)}`
  };
};

export const getAvailableRewards = (gotasBalance: number) => {
  const allItems = [
    ...MARKETPLACE_DATA.nfts,
    ...MARKETPLACE_DATA.access,
    ...MARKETPLACE_DATA.events,
    ...MARKETPLACE_DATA.physical
  ];
  
  return allItems.filter(item => 
    item.available && 
    item.cost <= gotasBalance &&
    (!item.timeLimit || item.timeLimit > new Date()) &&
    (!item.remaining || item.remaining > 0)
  );
};

export default {
  JOURNEY_MODULES,
  MARKETPLACE_DATA,
  MOCK_USER,
  getModuleById,
  getNextModule,
  getUserProgress,
  simulateGotasTransaction,
  getAvailableRewards
};