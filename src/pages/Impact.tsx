import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Globe, ArrowRight } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Nosso Impacto
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transformando vidas e comunidades através da educação digital
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Métricas de Impacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1,000+</div>
              <p className="text-gray-300">Pessoas capacitadas</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl border border-teal-500/30 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
              <p className="text-gray-300">Projetos colaborativos</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <p className="text-gray-300">Comunidades ativas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Faça Parte do Impacto
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contribua para criar um mundo mais justo e sustentável através da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="btn-primary flex items-center gap-2 justify-center">
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
            <Link to="/journey" className="btn-secondary flex items-center gap-2 justify-center">
              Começar Jornada <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;