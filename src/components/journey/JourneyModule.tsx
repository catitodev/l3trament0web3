import React, { useState } from 'react';
import { JourneyModule as JourneyModuleType, Lesson, User } from '../../types/journey';
import { PlayCircle, BookOpen, Trophy, Zap, Users, Lock, CheckCircle, Star } from 'lucide-react';

interface JourneyModuleProps {
  module: JourneyModuleType;
  user: User;
  onLessonComplete: (lessonId: string) => void;
  onModuleComplete: (moduleId: string) => void;
}

const JourneyModule: React.FC<JourneyModuleProps> = ({
  module,
  user,
  onLessonComplete,
  onModuleComplete
}) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const isModuleUnlocked = module.prerequisites.every(prereq => 
    user.profile.completedModules.includes(prereq)
  );

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = module.lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-900/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-900/20';
      case 'advanced': return 'text-red-400 bg-red-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-5 h-5" />;
      case 'reading': return <BookOpen className="w-5 h-5" />;
      case 'interactive': return <Zap className="w-5 h-5" />;
      case 'quiz': return <Trophy className="w-5 h-5" />;
      case 'project': return <Star className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const handleLessonClick = (lesson: Lesson) => {
    if (!isModuleUnlocked) return;
    
    const hasPrerequisites = lesson.prerequisites.every(prereq => 
      module.lessons.find(l => l.id === prereq)?.completed
    );
    
    if (hasPrerequisites) {
      setSelectedLesson(lesson.id);
      // Aqui você implementaria a lógica de abrir a lição
    }
  };

  const handleLessonComplete = (lessonId: string) => {
    onLessonComplete(lessonId);
    
    // Verificar se o módulo foi completado
    const updatedCompletedLessons = completedLessons + 1;
    if (updatedCompletedLessons === totalLessons) {
      onModuleComplete(module.id);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-purple-500/20">
      {/* Header do Módulo */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl font-bold text-white">{module.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(module.difficulty)}`}>
              {module.difficulty}
            </span>
          </div>
          <p className="text-gray-300 mb-4">{module.description}</p>
          
          {/* Estatísticas do Módulo */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{totalLessons} lições</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>{module.xpRange[0]}-{module.xpRange[1]} XP</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>{module.gotasReward} gotas</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>~{module.estimatedHours}h</span>
            </div>
          </div>
        </div>
        
        {/* Status do Módulo */}
        <div className="flex items-center gap-3">
          {!isModuleUnlocked && (
            <Lock className="w-6 h-6 text-gray-500" />
          )}
          {progressPercentage === 100 && (
            <CheckCircle className="w-6 h-6 text-green-400" />
          )}
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progresso</span>
          <span className="text-sm text-gray-400">{completedLessons}/{totalLessons}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Lista de Lições */}
      <div className="space-y-3">
        {module.lessons.map((lesson, index) => {
          const isUnlocked = isModuleUnlocked && lesson.prerequisites.every(prereq => 
            module.lessons.find(l => l.id === prereq)?.completed
          );
          
          return (
            <div
              key={lesson.id}
              className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                isUnlocked
                  ? 'border-purple-500/30 bg-purple-900/20 hover:bg-purple-900/40'
                  : 'border-gray-700 bg-gray-900/20 cursor-not-allowed'
              } ${selectedLesson === lesson.id ? 'ring-2 ring-purple-500' : ''}`}
              onClick={() => handleLessonClick(lesson)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Ícone do tipo de lição */}
                  <div className={`p-2 rounded-lg ${
                    isUnlocked 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-gray-700 text-gray-500'
                  }`}>
                    {getLessonIcon(lesson.type)}
                  </div>
                  
                  {/* Informações da lição */}
                  <div>
                    <h3 className={`font-medium ${
                      isUnlocked ? 'text-white' : 'text-gray-500'
                    }`}>
                      {lesson.title}
                    </h3>
                    <p className={`text-sm ${
                      isUnlocked ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {lesson.description}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                      <span>{lesson.duration} min</span>
                      <span>{lesson.xpReward} XP</span>
                      <span className="text-yellow-400">{lesson.gotasReward} gotas</span>
                    </div>
                  </div>
                </div>
                
                {/* Status da lição */}
                <div className="flex items-center gap-2">
                  {!isUnlocked && <Lock className="w-4 h-4 text-gray-500" />}
                  {lesson.completed && <CheckCircle className="w-5 h-5 text-green-400" />}
                  {isUnlocked && !lesson.completed && (
                    <div className="w-5 h-5 rounded-full border-2 border-purple-500 animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Projeto Final (se houver) */}
      {module.project && (
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-500/30">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-medium text-white">Projeto Final</h3>
          </div>
          <p className="text-gray-300 mb-3">{module.project.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Pontuação máxima: {module.project.maxScore}</span>
            {module.project.dueDate && (
              <span>Prazo: {module.project.dueDate.toLocaleDateString()}</span>
            )}
          </div>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="mt-6 flex gap-3">
        <button
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
            isModuleUnlocked
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!isModuleUnlocked}
          onClick={() => setShowDetails(!showDetails)}
        >
          {isModuleUnlocked ? 'Começar Módulo' : 'Módulo Bloqueado'}
        </button>
        
        <button
          className="px-6 py-3 border border-purple-500/50 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-all duration-200"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Ocultar' : 'Detalhes'}
        </button>
      </div>

      {/* Detalhes Expandidos */}
      {showDetails && (
        <div className="mt-6 space-y-4">
          {/* Pré-requisitos */}
          {module.prerequisites.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Pré-requisitos:</h4>
              <div className="flex flex-wrap gap-2">
                {module.prerequisites.map(prereq => (
                  <span
                    key={prereq}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {prereq}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Conquistas Possíveis */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Conquistas Possíveis:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {module.lessons.flatMap(lesson => lesson.achievements).map(achievement => (
                <div
                  key={achievement}
                  className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg"
                >
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JourneyModule;