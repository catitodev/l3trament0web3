import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, ArrowRight } from 'lucide-react';

const AbundantRelationships: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
              Relações Abundantes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Construindo relacionamentos baseados em confiança, reciprocidade e crescimento mútuo
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Pilares das Relações Abundantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Confiança</h3>
              <p className="text-gray-300">Base sólida para relacionamentos duradouros e colaboração efetiva.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Reciprocidade</h3>
              <p className="text-gray-300">Troca equilibrada de valor, conhecimento e apoio mútuo.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Crescimento</h3>
              <p className="text-gray-300">Evolução contínua através do aprendizado compartilhado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Construa Relacionamentos Abundantes
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Faça parte de uma comunidade que valoriza conexões autênticas e colaboração.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="btn-primary flex items-center gap-2 justify-center">
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
            <Link to="/refi" className="btn-secondary flex items-center gap-2 justify-center">
              Explore ReFi <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbundantRelationships;