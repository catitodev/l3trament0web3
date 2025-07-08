import React from 'react';
import GamificationCard from './GamificationCard';
import { useGamification } from '../../hooks/useGamification';

const GamificationDemo: React.FC = () => {
  const {
    user,
    currentLevelData,
    recentAchievements,
    addXp,
    unlockAchievement,
  } = useGamification();

  // Exemplo de como usar o componente integrado
  const handleCardClick = () => {
    // Simular ganhar XP
    addXp(25);
    console.log('🎉 +25 XP earned!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          L3trament0Web3 Gamification Demo
        </h1>
        
        {/* Cards de diferentes categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Digital Literacy Card */}
          <GamificationCard
            title="Digital Literacy"
            progress={75}
            level={user.level}
            xp={user.xp}
            xpToNext={user.xpToNextLevel}
            achievements={recentAchievements}
            onCardClick={handleCardClick}
          />
          
          {/* Public Goods Card */}
          <GamificationCard
            title="Public Goods"
            progress={45}
            level={user.level}
            xp={user.xp}
            xpToNext={user.xpToNextLevel}
            achievements={recentAchievements}
            onCardClick={handleCardClick}
          />
          
          {/* ReFi Card */}
          <GamificationCard
            title="ReFi Journey"
            progress={60}
            level={user.level}
            xp={user.xp}
            xpToNext={user.xpToNextLevel}
            achievements={recentAchievements}
            onCardClick={handleCardClick}
          />
          
        </div>
        
        {/* Stats Panel */}
        <div className="mt-12 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">{user.level}</div>
              <div className="text-purple-100">Current Level</div>
              <div className="text-sm text-purple-200">{currentLevelData.name}</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">{user.xp}</div>
              <div className="text-blue-100">Total XP</div>
              <div className="text-sm text-blue-200">{user.xpToNextLevel} to next level</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">{recentAchievements.length}</div>
              <div className="text-green-100">Achievements</div>
              <div className="text-sm text-green-200">Recent unlocks</div>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-8 bg-purple-800 bg-opacity-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            🎯 Next Steps with v0.dev Integration:
          </h3>
          <ul className="space-y-2 text-purple-100">
            <li>• O v0.dev vai gerar um componente visual lindo</li>
            <li>• Vamos substituir o template no GamificationCard.tsx</li>
            <li>• Todos os dados já estão conectados via hooks</li>
            <li>• Animações e interações já estão preparadas</li>
            <li>• Clique nos cards para testar o sistema de XP!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamificationDemo;