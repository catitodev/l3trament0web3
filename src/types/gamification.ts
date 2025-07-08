// Tipos para sistema de gamificação
export interface UserProgress {
  userId: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalXp: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  category: 'digital_literacy' | 'public_goods' | 'commons' | 'refi' | 'relationships';
}

export interface LearningModule {
  id: string;
  title: string;
  category: string;
  progress: number; // 0-100
  completed: boolean;
  xpReward: number;
  estimatedTime: string;
}

export interface GamificationState {
  user: UserProgress;
  achievements: Achievement[];
  modules: LearningModule[];
  streakDays: number;
  totalTimeSpent: number; // em minutos
}

export interface ProgressCardProps {
  title: string;
  progress: number;
  level: number;
  xp: number;
  xpToNext: number;
  achievements: Achievement[];
  onCardClick?: () => void;
  animated?: boolean;
}

// Níveis do sistema
export const LEVELS = {
  1: { name: 'Digital Newbie', minXp: 0, color: '#10B981' },
  2: { name: 'Tech Explorer', minXp: 100, color: '#3B82F6' },
  3: { name: 'Digital Pioneer', minXp: 300, color: '#8B5CF6' },
  4: { name: 'Web3 Advocate', minXp: 600, color: '#F59E0B' },
  5: { name: 'Commons Guardian', minXp: 1000, color: '#EF4444' },
  6: { name: 'ReFi Master', minXp: 1500, color: '#06B6D4' },
  7: { name: 'Digital Sage', minXp: 2500, color: '#EC4899' },
} as const;

export type LevelKey = keyof typeof LEVELS;