import React from 'react';
import { motion } from 'framer-motion';
import { useGamification } from '../../hooks/useGamification';
import { ProgressCardProps } from '../../types/gamification';

// Este componente será substituído pelo código do v0.dev
// Mantendo apenas como template de integração

const GamificationCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  level,
  xp,
  xpToNext,
  achievements,
  onCardClick,
  animated = true,
}) => {
  const {
    currentLevelData,
    recentAchievements,
    addXp,
    isLoading,
  } = useGamification();

  // Animações
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, y: -5 },
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%` },
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="animate-pulse bg-gray-300 h-48 rounded-2xl"></div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={onCardClick}
    >
      {/* 
        AQUI VAMOS COLAR O CÓDIGO DO V0.DEV
        
        O v0.dev vai gerar um componente visual bonito com:
        - Progress ring
        - XP display
        - Achievement badges
        - Level indicator
        - Gradients e animações
        
        Depois vamos conectar com nossos hooks e dados:
        - currentLevelData
        - recentAchievements
        - progress, xp, level (props)
        - onCardClick handler
      */}
      
      {/* Template temporário até o v0.dev gerar */}
      <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-6 rounded-2xl shadow-xl">
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-purple-100 mb-4">{currentLevelData.name}</p>
          
          {/* Progress Ring Placeholder */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{progress}%</span>
            </div>
          </div>
          
          {/* XP Display */}
          <div className="text-center mb-4">
            <p className="text-purple-100">XP: {xp}</p>
            <p className="text-sm text-purple-200">{xpToNext} to next level</p>
          </div>
          
          {/* Achievement Badges */}
          <div className="flex justify-center space-x-2">
            {recentAchievements.slice(0, 3).map((achievement, index) => (
              <div
                key={achievement.id}
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm"
              >
                {achievement.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GamificationCard;