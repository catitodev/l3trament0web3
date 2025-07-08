import React, { useState } from 'react';
import { X, Send, FileText, Star, Award, Upload, Link, Mic, Camera, Palette } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (report: ReportData) => void;
  block: {
    id: number;
    title: string;
    subtitle: string;
    challenge: string;
    xpReward: number;
    symbol: string;
  };
}

interface ReportData {
  blockId: number;
  content: string;
  type: 'text' | 'link' | 'file' | 'media';
  attachments?: string[];
  reflections: {
    mainLearning: string;
    difficulty: string;
    nextSteps: string;
  };
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, onSubmit, block }) => {
  const [reportData, setReportData] = useState<ReportData>({
    blockId: block.id,
    content: '',
    type: 'text',
    attachments: [],
    reflections: {
      mainLearning: '',
      difficulty: '',
      nextSteps: ''
    }
  });

  const [activeTab, setActiveTab] = useState<'content' | 'reflections'>('content');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reportData.content.trim() && reportData.reflections.mainLearning.trim()) {
      onSubmit(reportData);
      onClose();
    }
  };

  const reportTypes = [
    { id: 'text', label: 'Texto', icon: <FileText className="w-4 h-4" />, description: 'Relato escrito' },
    { id: 'link', label: 'Link', icon: <Link className="w-4 h-4" />, description: 'Link para conteúdo' },
    { id: 'file', label: 'Arquivo', icon: <Upload className="w-4 h-4" />, description: 'Upload de arquivo' },
    { id: 'media', label: 'Mídia', icon: <Camera className="w-4 h-4" />, description: 'Foto/Vídeo/Áudio' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Report do Bloco {block.id}</h3>
                <p className="text-gray-400 text-sm">{block.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Challenge Reminder */}
          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              🏆 Desafio para Completar
            </h4>
            <p className="text-gray-300 text-sm mb-3">{block.challenge}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">{block.xpReward} XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-neon-purple" />
                <span className="text-neon-purple">{block.symbol}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'content'
                  ? 'bg-neon-blue text-white'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              📝 Conteúdo do Report
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reflections')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'reflections'
                  ? 'bg-neon-blue text-white'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              🧠 Reflexões
            </button>
          </div>

          {activeTab === 'content' && (
            <div className="space-y-6">
              {/* Report Type */}
              <div>
                <label className="block text-white font-medium mb-3">
                  📋 Tipo de Report
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {reportTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setReportData(prev => ({ ...prev, type: type.id as any }))}
                      className={`p-3 rounded-lg border transition-all ${
                        reportData.type === type.id
                          ? 'border-neon-blue bg-neon-blue/20 text-neon-blue'
                          : 'border-white/20 bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {type.icon}
                        <span className="text-sm font-medium">{type.label}</span>
                        <span className="text-xs opacity-75">{type.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Input */}
              <div>
                <label className="block text-white font-medium mb-3">
                  ✍️ Seu Report
                </label>
                <textarea
                  value={reportData.content}
                  onChange={(e) => setReportData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder={`Descreva como você completou o desafio do Bloco ${block.id}...`}
                  className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue resize-none"
                  required
                />
              </div>

              {/* Attachments */}
              <div>
                <label className="block text-white font-medium mb-3">
                  📎 Anexos (opcional)
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm mb-2">
                    Arraste arquivos aqui ou clique para selecionar
                  </p>
                  <p className="text-gray-500 text-xs">
                    Aceita: imagens, vídeos, áudios, documentos
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reflections' && (
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-3">
                  🌟 Principal Aprendizado
                </label>
                <textarea
                  value={reportData.reflections.mainLearning}
                  onChange={(e) => setReportData(prev => ({
                    ...prev,
                    reflections: { ...prev.reflections, mainLearning: e.target.value }
                  }))}
                  placeholder="O que você aprendeu de mais importante neste bloco?"
                  className="w-full h-24 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  🎯 Dificuldades e Superações
                </label>
                <textarea
                  value={reportData.reflections.difficulty}
                  onChange={(e) => setReportData(prev => ({
                    ...prev,
                    reflections: { ...prev.reflections, difficulty: e.target.value }
                  }))}
                  placeholder="Quais foram as maiores dificuldades? Como você as superou?"
                  className="w-full h-24 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  🚀 Próximos Passos
                </label>
                <textarea
                  value={reportData.reflections.nextSteps}
                  onChange={(e) => setReportData(prev => ({
                    ...prev,
                    reflections: { ...prev.reflections, nextSteps: e.target.value }
                  }))}
                  placeholder="Como você pretende aplicar o que aprendeu? Que novos caminhos se abriram?"
                  className="w-full h-24 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue resize-none"
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
              disabled={!reportData.content.trim() || !reportData.reflections.mainLearning.trim()}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;