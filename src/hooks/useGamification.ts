import { useState, useEffect, useCallback } from 'react';
import { GamificationState, UserProgress, Achievement, LearningModule, LEVELS } from '../types/gamification';

// Mock data inicial - depois conectaremos com APIs reais
const mockUser: UserProgress = {
  userId: 'user1',
  level: 3,
  xp: 450,
  xpToNextLevel: 150,
  totalXp: 450,
};

const mockAchievements: Achievement[] = [
  {
    id: 'first_login',
    name: 'Welcome Explorer',
    description: 'Completed your first login',
    icon: '🚀',
    unlockedAt: new Date(),
    category: 'digital_literacy',
  },
  {
    id: 'first_module',
    name: 'First Steps',
    description: 'Completed your first learning module',
    icon: '📚',
    unlockedAt: new Date(),
    category: 'digital_literacy',
  },
  {
    id: 'week_streak',
    name: 'Dedicated Learner',
    description: 'Maintained a 7-day learning streak',
    icon: '🔥',
    unlockedAt: new Date(),
    category: 'digital_literacy',
  },
];

export const useGamification = (userId?: string) => {
  const [state, setState] = useState<GamificationState>({
    user: mockUser,
    achievements: mockAchievements,
    modules: [],
    streakDays: 7,
    totalTimeSpent: 120, // 2 hours
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calcular nível baseado no XP
  const calculateLevel = useCallback((xp: number) => {
    const levels = Object.entries(LEVELS).reverse();
    for (const [levelNum, levelData] of levels) {
      if (xp >= levelData.minXp) {
        return parseInt(levelNum);
      }
    }
    return 1;
  }, []);

  // Calcular XP para próximo nível
  const calculateXpToNext = useCallback((currentXp: number, currentLevel: number) => {
    const nextLevel = currentLevel + 1;
    const nextLevelData = LEVELS[nextLevel as keyof typeof LEVELS];
    if (!nextLevelData) return 0;
    return nextLevelData.minXp - currentXp;
  }, []);

  // Adicionar XP
  const addXp = useCallback((amount: number) => {
    setState(prev => {
      const newXp = prev.user.xp + amount;
      const newLevel = calculateLevel(newXp);
      const xpToNext = calculateXpToNext(newXp, newLevel);
      
      // Trigger de level up
      if (newLevel > prev.user.level) {
        // Aqui podemos adicionar animação de level up
        console.log(`🎉 Level up! Você alcançou o nível ${newLevel}!`);
      }

      return {
        ...prev,
        user: {
          ...prev.user,
          xp: newXp,
          totalXp: newXp,
          level: newLevel,
          xpToNextLevel: xpToNext,
        },
      };
    });
  }, [calculateLevel, calculateXpToNext]);

  // Desbloquear conquista
  const unlockAchievement = useCallback((achievementId: string) => {
    setState(prev => ({
      ...prev,
      achievements: prev.achievements.map(ach => 
        ach.id === achievementId 
          ? { ...ach, unlockedAt: new Date() }
          : ach
      ),
    }));
  }, []);

  // Completar módulo
  const completeModule = useCallback((moduleId: string) => {
    setState(prev => {
      const module = prev.modules.find(m => m.id === moduleId);
      if (!module || module.completed) return prev;

      // Adicionar XP do módulo
      addXp(module.xpReward);

      return {
        ...prev,
        modules: prev.modules.map(mod => 
          mod.id === moduleId 
            ? { ...mod, completed: true, progress: 100 }
            : mod
        ),
      };
    });
  }, [addXp]);

  // Atualizar progresso do módulo
  const updateModuleProgress = useCallback((moduleId: string, progress: number) => {
    setState(prev => ({
      ...prev,
      modules: prev.modules.map(mod => 
        mod.id === moduleId 
          ? { ...mod, progress: Math.min(100, Math.max(0, progress)) }
          : mod
      ),
    }));
  }, []);

  // Obter dados do nível atual
  const getCurrentLevelData = useCallback(() => {
    return LEVELS[state.user.level as keyof typeof LEVELS] || LEVELS[1];
  }, [state.user.level]);

  // Obter conquistas recentes (últimas 3)
  const getRecentAchievements = useCallback(() => {
    return state.achievements
      .filter(ach => ach.unlockedAt)
      .sort((a, b) => (b.unlockedAt!.getTime() - a.unlockedAt!.getTime()))
      .slice(0, 3);
  }, [state.achievements]);

  // Simular carregamento inicial
  useEffect(() => {
    setIsLoading(true);
    // Simular API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [userId]);

  return {
    // Estado
    ...state,
    isLoading,
    error,
    
    // Dados computados
    currentLevelData: getCurrentLevelData(),
    recentAchievements: getRecentAchievements(),
    
    // Ações
    addXp,
    unlockAchievement,
    completeModule,
    updateModuleProgress,
    
    // Utilitários
    calculateLevel,
    calculateXpToNext,
  };
};