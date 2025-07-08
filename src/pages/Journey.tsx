import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Sua Jornada
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Personalize sua experiência de aprendizado e acompanhe seu progresso
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Etapas da Jornada
          </h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Descoberta</h3>
                <p className="text-gray-300">Explore os conceitos fundamentais e descubra seu interesse.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Aprendizado</h3>
                <p className="text-gray-300">Desenvolva habilidades práticas através de conteúdo interativo.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Aplicação</h3>
                <p className="text-gray-300">Coloque conhecimento em prática e contribua para a comunidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transforme sua relação com a tecnologia e contribua para um futuro mais justo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/digital-literacy" className="btn-primary flex items-center gap-2 justify-center">
              Começar Agora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/community" className="btn-secondary flex items-center gap-2 justify-center">
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;