import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Heart, ArrowRight } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Comunidade
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Conecte-se, aprenda e cresça junto com pessoas que compartilham seus valores
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nossa Comunidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30">
              <MessageCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Diálogo Aberto</h3>
              <p className="text-gray-300">Espaços para compartilhar ideias e aprender uns com os outros.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/30">
              <Heart className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Apoio Mútuo</h3>
              <p className="text-gray-300">Rede de suporte para crescimento pessoal e profissional.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-xl border border-teal-500/30">
              <Users className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Colaboração</h3>
              <p className="text-gray-300">Projetos colaborativos para criar impacto positivo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Junte-se a Nós
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Faça parte de uma comunidade global dedicada ao letramento digital e mudança positiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/impact" className="btn-primary flex items-center gap-2 justify-center">
              Ver Nosso Impacto <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/digital-literacy" className="btn-secondary flex items-center gap-2 justify-center">
              Começar Aprendizado <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;