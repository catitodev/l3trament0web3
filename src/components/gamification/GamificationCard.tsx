import React, { useState, useEffect } from 'react';
import { Trophy, Shield, Zap, Sparkles, Star, Award } from 'lucide-react';
import { useGamification } from '../../hooks/useGamification';
import { ProgressCardProps } from '../../types/gamification';

const GamificationCard: React.FC<ProgressCardProps> = ({
  title,
  progress: targetProgress,
  level,
  xp: targetXp,
  xpToNext,
  achievements,
  onCardClick,
  animated = true,
}) => {
  const {
    currentLevelData,
    recentAchievements,
    isLoading,
  } = useGamification();

  const [progress, setProgress] = useState(0);
  const [xp, setXp] = useState(0);
  const levelTitle = currentLevelData.name;

  // Animações progressivas quando o componente monta
  useEffect(() => {
    if (!animated) {
      setProgress(targetProgress);
      setXp(targetXp);
      return;
    }

    const progressTimer = setTimeout(() => {
      if (progress < targetProgress) {
        setProgress((prev) => Math.min(prev + 1, targetProgress));
      }
    }, 50);

    const xpTimer = setTimeout(() => {
      if (xp < targetXp) {
        setXp((prev) => Math.min(prev + 25, targetXp));
      }
    }, 30);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(xpTimer);
    };
  }, [progress, xp, targetProgress, targetXp, animated]);

  // Cálculos para o círculo de progresso
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Mapear conquistas para ícones
  const getAchievementIcon = (index: number, unlocked: boolean) => {
    const icons = [Trophy, Shield, Star];
    const IconComponent = icons[index] || Star;
    return unlocked ? <IconComponent className="w-6 h-6 text-white" /> : <Star className="w-6 h-6 text-white" />;
  };

  if (isLoading) {
    return (
      <div className="w-80 h-96 mx-auto">
        <div className="animate-pulse bg-gray-700 h-full rounded-3xl"></div>
      </div>
    );
  }

  return (
    <div className="relative group" onClick={onCardClick}>
      {/* Sparkle animations */}
      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 left-4 animate-pulse">
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>
        <div className="absolute top-8 right-2 animate-pulse delay-300">
          <Star className="w-3 h-3 text-purple-400" />
        </div>
        <div className="absolute bottom-4 left-2 animate-pulse delay-500">
          <Sparkles className="w-3 h-3 text-blue-400" />
        </div>
        <div className="absolute bottom-2 right-6 animate-pulse delay-700">
          <Star className="w-4 h-4 text-pink-400" />
        </div>
      </div>

      {/* Main card */}
      <div className="relative w-80 h-96 rounded-3xl p-6 shadow-2xl border border-purple-500/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 hover:shadow-2xl overflow-hidden cursor-pointer">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-indigo-900/80"></div>

        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            <p className="text-purple-300 text-sm">Learning Journey</p>
          </div>

          {/* Progress Circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle cx="50" cy="50" r="45" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="8" fill="none" />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={`url(#gradient-${title.replace(/\s+/g, '-').toLowerCase()})`}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id={`gradient-${title.replace(/\s+/g, '-').toLowerCase()}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Progress percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{progress}%</span>
              </div>
            </div>
          </div>

          {/* XP Display */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-yellow-500/30">
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-yellow-300 font-semibold">{xp.toLocaleString()} XP</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-100"></div>
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-200"></div>
              </div>
            </div>
          </div>

          {/* Level Indicator */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-4 py-2 border border-purple-500/30">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Level {level}</span>
              <span className="text-purple-300">-</span>
              <span className="text-blue-300 font-medium">{levelTitle}</span>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex justify-center gap-4 mt-auto">
            {[0, 1, 2].map((index) => {
              const achievement = recentAchievements[index];
              const isUnlocked = !!achievement;
              
              return (
                <div key={index} className="group/badge relative">
                  <div className={`w-12 h-12 bg-gradient-to-br ${
                    index === 0 ? 'from-yellow-500 to-orange-500' :
                    index === 1 ? 'from-blue-500 to-cyan-500' :
                    'from-purple-500 to-pink-500'
                  } rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-200 hover:scale-110 hover:rotate-12 ${
                    !isUnlocked ? 'opacity-50' : ''
                  }`}>
                    {getAchievementIcon(index, isUnlocked)}
                  </div>
                  
                  {isUnlocked && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  )}
                  
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-gray-900/50 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full animate-spin border-t-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationCard;