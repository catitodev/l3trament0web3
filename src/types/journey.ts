// Tipos para jornada gamificada L3trament0Web3
export interface JourneyModule {
  id: string;
  title: string;
  description: string;
  order: number;
  xpRange: [number, number];
  gotasReward: number;
  lessons: Lesson[];
  project?: Project;
  prerequisites: string[];
  estimatedHours: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'discovery' | 'digital_literacy' | 'public_goods' | 'commons' | 'relationships' | 'refi';
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'reading' | 'interactive' | 'quiz' | 'project' | 'simulation';
  content: LessonContent;
  xpReward: number;
  gotasReward: number;
  duration: number; // minutos
  prerequisites: string[];
  achievements: string[];
  completed: boolean;
  completedAt?: Date;
}

export interface LessonContent {
  text?: string;
  videoUrl?: string;
  interactiveElements?: InteractiveElement[];
  quiz?: Quiz;
  project?: Project;
  simulation?: Simulation;
}

export interface InteractiveElement {
  type: 'simulation' | 'game' | 'tool' | 'demo' | 'calculator';
  title: string;
  description: string;
  component: string; // nome do componente
  params: Record<string, any>;
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
  passingScore: number;
  maxAttempts: number;
  attempts: number;
  bestScore?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'true_false' | 'short_answer' | 'code';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  points: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  deliverables: string[];
  evaluation: ProjectEvaluation;
  submissions: ProjectSubmission[];
  maxScore: number;
  dueDate?: Date;
}

export interface ProjectEvaluation {
  criteria: {
    technical: number;
    creativity: number;
    impact: number;
    presentation: number;
  };
  peerReview: boolean;
  mentorReview: boolean;
}

export interface ProjectSubmission {
  id: string;
  userId: string;
  submittedAt: Date;
  content: string;
  attachments: string[];
  score?: number;
  feedback?: string;
  status: 'submitted' | 'under_review' | 'approved' | 'rejected';
}

export interface Simulation {
  id: string;
  title: string;
  description: string;
  type: 'wallet' | 'defi' | 'dao' | 'nft' | 'carbon_credits';
  scenario: string;
  objectives: string[];
  tools: string[];
  duration: number;
}

// Integração com gotas.social
export interface GotasIntegration {
  wallet: string;
  balance: number;
  transactions: GotasTransaction[];
  rewards: GotasReward[];
  staking: GotasStaking[];
}

export interface GotasTransaction {
  id: string;
  type: 'earned' | 'spent' | 'donated' | 'staked' | 'unstaked';
  amount: number;
  description: string;
  timestamp: Date;
  moduleId?: string;
  lessonId?: string;
  achievementId?: string;
  hash?: string; // blockchain hash
}

export interface GotasReward {
  id: string;
  name: string;
  description: string;
  cost: number; // em gotas
  category: 'nft' | 'access' | 'mentorship' | 'event' | 'physical';
  available: boolean;
  timeLimit?: Date;
  quantity?: number;
  claimed?: boolean;
}

export interface GotasStaking {
  id: string;
  amount: number;
  duration: number; // em dias
  apy: number;
  startDate: Date;
  endDate: Date;
  rewards: number;
  status: 'active' | 'completed' | 'cancelled';
}

// Sistema de mentoria
export interface MentorshipProgram {
  id: string;
  mentor: User;
  mentees: User[];
  focus: 'technical' | 'community' | 'leadership' | 'projects';
  sessions: MentorshipSession[];
  rewards: {
    mentorGotas: number;
    menteeGotas: number;
  };
  status: 'active' | 'completed' | 'paused';
}

export interface MentorshipSession {
  id: string;
  date: Date;
  duration: number;
  topics: string[];
  completed: boolean;
  feedback?: string;
  rating?: number;
}

// Peer review
export interface PeerReview {
  id: string;
  projectId: string;
  reviewer: string;
  reviewed: string;
  criteria: {
    technical: number;
    creativity: number;
    impact: number;
    presentation: number;
  };
  feedback: string;
  gotasAwarded: number;
  submittedAt: Date;
}

// Marketplace de gotas
export interface GotasMarketplace {
  nfts: MarketplaceItem[];
  access: MarketplaceItem[];
  events: MarketplaceItem[];
  physical: MarketplaceItem[];
}

export interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  category: 'nft' | 'access' | 'mentorship' | 'event' | 'physical';
  available: boolean;
  timeLimit?: Date;
  quantity?: number;
  remaining?: number;
  image?: string;
  metadata?: Record<string, any>;
}

// Dashboard do usuário
export interface UserDashboard {
  progress: {
    overall: number;
    modules: ModuleProgress[];
    achievements: Achievement[];
    streak: number;
    totalTimeSpent: number;
  };
  
  gotas: {
    balance: number;
    earned: number;
    spent: number;
    pending: number;
    staked: number;
  };
  
  community: {
    mentees: number;
    mentors: number;
    contributions: number;
    reputation: number;
    reviews: number;
  };
  
  impact: {
    projectsCompleted: number;
    carbonOffset: number;
    fundsRaised: number;
    peopleHelped: number;
  };
}

export interface ModuleProgress {
  moduleId: string;
  progress: number;
  completed: boolean;
  completedAt?: Date;
  lessonsCompleted: number;
  totalLessons: number;
  xpEarned: number;
  gotasEarned: number;
}

// Integração Web3
export interface Web3Integration {
  wallet: {
    connected: boolean;
    address: string;
    balance: number;
    network: string;
    provider: string;
  };
  
  transactions: {
    gotasEarned: number;
    nftsMinted: number;
    donationsMade: number;
  };
  
  identity: {
    ensName?: string;
    avatar?: string;
    reputation: number;
    verified: boolean;
  };
}

// Níveis atualizados
export const JOURNEY_LEVELS = {
  1: { name: 'Web3 Novato', minXp: 0, gotas: 10, color: '#10B981' },
  2: { name: 'Explorador Digital', minXp: 100, gotas: 25, color: '#3B82F6' },
  3: { name: 'Pioneiro Comum', minXp: 300, gotas: 50, color: '#8B5CF6' },
  4: { name: 'Guardião dos Bens', minXp: 600, gotas: 100, color: '#F59E0B' },
  5: { name: 'Articulador Social', minXp: 1000, gotas: 200, color: '#EF4444' },
  6: { name: 'Regenerador', minXp: 1500, gotas: 400, color: '#06B6D4' },
  7: { name: 'Sábio Digital', minXp: 2500, gotas: 1000, color: '#EC4899' },
} as const;

// Categorias de conquistas
export const ACHIEVEMENT_CATEGORIES = {
  EXPLORER: {
    name: 'Explorador',
    description: 'Descoberta e curiosidade',
    color: '#10B981',
    badges: [
      { id: 'first_step', name: 'Primeiro Passo', description: 'Completou a primeira lição', gotas: 10 },
      { id: 'curious_mind', name: 'Mente Curiosa', description: 'Explorou 10 lições diferentes', gotas: 25 },
      { id: 'deep_diver', name: 'Mergulhador Profundo', description: 'Completou um módulo inteiro', gotas: 50 },
    ]
  },
  BUILDER: {
    name: 'Construtor',
    description: 'Criação e implementação',
    color: '#3B82F6',
    badges: [
      { id: 'first_project', name: 'Primeiro Projeto', description: 'Submeteu seu primeiro projeto', gotas: 50 },
      { id: 'skilled_builder', name: 'Construtor Habilidoso', description: 'Completou 5 projetos', gotas: 100 },
      { id: 'master_creator', name: 'Criador Mestre', description: 'Projeto aprovado com nota máxima', gotas: 200 },
    ]
  },
  COMMUNITY: {
    name: 'Comunidade',
    description: 'Colaboração e liderança',
    color: '#8B5CF6',
    badges: [
      { id: 'helpful_peer', name: 'Colega Prestativo', description: 'Ajudou 5 colegas', gotas: 30 },
      { id: 'mentor', name: 'Mentor', description: 'Mentorou outro usuário', gotas: 100 },
      { id: 'community_leader', name: 'Líder Comunitário', description: 'Organizou evento comunitário', gotas: 300 },
    ]
  },
  REGENERATOR: {
    name: 'Regenerador',
    description: 'Impacto e sustentabilidade',
    color: '#F59E0B',
    badges: [
      { id: 'green_warrior', name: 'Guerreiro Verde', description: 'Completou módulo ReFi', gotas: 100 },
      { id: 'impact_maker', name: 'Criador de Impacto', description: 'Projeto com impacto social', gotas: 200 },
      { id: 'world_changer', name: 'Transformador Mundial', description: 'Alcançou 1000 pessoas', gotas: 500 },
    ]
  }
} as const;

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  joinedAt: Date;
  lastActive: Date;
  profile: UserProfile;
  preferences: UserPreferences;
}

export interface UserProfile {
  level: number;
  xp: number;
  totalXp: number;
  xpToNextLevel: number;
  gotasBalance: number;
  streakDays: number;
  completedModules: string[];
  achievements: Achievement[];
  reputation: number;
  rank: number;
}

export interface UserPreferences {
  notifications: boolean;
  publicProfile: boolean;
  mentorshipAvailable: boolean;
  language: string;
  theme: 'light' | 'dark';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: keyof typeof ACHIEVEMENT_CATEGORIES;
  gotasReward: number;
  unlockedAt?: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}