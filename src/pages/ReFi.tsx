import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Globe, Users, ArrowRight } from 'lucide-react';

const ReFi: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Leaf className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              ReFi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Finanças Regenerativas: Investindo em um futuro sustentável e abundante
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Princípios do ReFi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Regeneração</h3>
              <p className="text-gray-300">Sistemas financeiros que restauram e regeneram o planeta.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Sustentabilidade</h3>
              <p className="text-gray-300">Investimentos que consideram impacto ambiental e social.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Inclusão</h3>
              <p className="text-gray-300">Acesso democrático a oportunidades financeiras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Participe do Futuro Regenerativo
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se ao movimento que está transformando finanças para regenerar o planeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="btn-primary flex items-center gap-2 justify-center">
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
            <Link to="/journey" className="btn-secondary flex items-center gap-2 justify-center">
              Iniciar Jornada <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReFi;