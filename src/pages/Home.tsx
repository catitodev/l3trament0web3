import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Heart, Leaf, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              L3trament0Web3
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transformando vidas através do letramento digital, bens públicos e cultura regenerativa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/digital-literacy"
                className="btn-primary flex items-center gap-2"
              >
                Começar Jornada <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/gamification-demo"
                className="btn-secondary flex items-center gap-2"
              >
                Ver Gamificação <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics Grid */}
      <section className="py-20 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Explore os Pilares do Web3
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Literacy */}
            <Link
              to="/digital-literacy"
              className="group p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Letramento Digital</h3>
              </div>
              <p className="text-gray-300">
                Desenvolva habilidades essenciais para navegar no mundo digital com segurança e eficácia.
              </p>
            </Link>

            {/* Public Goods */}
            <Link
              to="/public-goods"
              className="group p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Bens Públicos</h3>
              </div>
              <p className="text-gray-300">
                Entenda como os bens públicos digitais podem transformar comunidades e sociedades.
              </p>
            </Link>

            {/* Commons Life */}
            <Link
              to="/commons-life"
              className="group p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Cultura Commons</h3>
              </div>
              <p className="text-gray-300">
                Descubra como a cultura colaborativa e compartilhada pode criar valor sustentável.
              </p>
            </Link>

            {/* Abundant Relationships */}
            <Link
              to="/abundant-relationships"
              className="group p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-pink-400" />
                <h3 className="text-xl font-bold text-white">Relações Abundantes</h3>
              </div>
              <p className="text-gray-300">
                Construa relacionamentos baseados em confiança, reciprocidade e crescimento mútuo.
              </p>
            </Link>

            {/* ReFi */}
            <Link
              to="/refi"
              className="group p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">ReFi</h3>
              </div>
              <p className="text-gray-300">
                Explore as finanças regenerativas e como podem impactar positivamente o planeta.
              </p>
            </Link>

            {/* Journey */}
            <Link
              to="/journey"
              className="group p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <ArrowRight className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Sua Jornada</h3>
              </div>
              <p className="text-gray-300">
                Personalize sua experiência de aprendizado e acompanhe seu progresso.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Transformar sua Relação com a Tecnologia?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a uma comunidade global que está construindo um futuro mais justo, sustentável e abundante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="btn-primary flex items-center gap-2 justify-center"
            >
              Participar da Comunidade <Users className="w-5 h-5" />
            </Link>
            <Link
              to="/impact"
              className="btn-secondary flex items-center gap-2 justify-center"
            >
              Ver Nosso Impacto <Globe className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;