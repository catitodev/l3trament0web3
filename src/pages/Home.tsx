import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Heart, Leaf, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/10"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center animate-float">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6 animate-fade-in">
              L3trament0Web3
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-slide-up">
              Transformando vidas através do letramento digital, bens públicos e cultura regenerativa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link
                to="/journey"
                className="btn-primary flex items-center gap-2 justify-center group"
              >
                Começar Jornada 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/digital-literacy"
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                Explorar Conteúdo <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">10K+</h3>
              <p className="text-gray-400">Usuários Ativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-green to-neon-blue rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">500K+</h3>
              <p className="text-gray-400">XP Distribuído</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">100+</h3>
              <p className="text-gray-400">Projetos Apoiados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Explore os Pilares do Web3
            </h2>
            <p className="text-xl text-gray-400">
              Descubra como a tecnologia pode transformar sua vida e comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Literacy */}
            <Link
              to="/digital-literacy"
              className="group card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Letramento Digital</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Desenvolva habilidades essenciais para navegar no mundo digital com segurança e eficácia.
              </p>
              <div className="flex items-center gap-2 text-neon-blue">
                <span className="text-sm">Começar agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Public Goods */}
            <Link
              to="/public-goods"
              className="group card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-blue rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Bens Públicos</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Entenda como os bens públicos digitais podem transformar comunidades e sociedades.
              </p>
              <div className="flex items-center gap-2 text-neon-green">
                <span className="text-sm">Explorar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Commons Life */}
            <Link
              to="/commons-life"
              className="group card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Cultura Commons</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Descubra como a cultura colaborativa e compartilhada pode criar valor sustentável.
              </p>
              <div className="flex items-center gap-2 text-neon-purple">
                <span className="text-sm">Descobrir</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Abundant Relationships */}
            <Link
              to="/abundant-relationships"
              className="group card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-orange rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Relações Abundantes</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Construa relacionamentos baseados em confiança, reciprocidade e crescimento mútuo.
              </p>
              <div className="flex items-center gap-2 text-neon-pink">
                <span className="text-sm">Conectar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* ReFi */}
            <Link
              to="/refi"
              className="group card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-blue rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">ReFi</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Explore as finanças regenerativas e como podem impactar positivamente o planeta.
              </p>
              <div className="flex items-center gap-2 text-neon-green">
                <span className="text-sm">Regenerar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Journey */}
            <Link
              to="/journey"
              className="group card-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-orange to-neon-pink rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Sua Jornada</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Personalize sua experiência de aprendizado e acompanhe seu progresso.
              </p>
              <div className="flex items-center gap-2 text-neon-orange">
                <span className="text-sm">Iniciar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Pronto para Transformar sua Relação com a Tecnologia?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a uma comunidade global que está construindo um futuro mais justo, sustentável e abundante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/community"
                className="btn-primary flex items-center gap-2 justify-center group"
              >
                Participar da Comunidade 
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="/impact"
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                Ver Nosso Impacto <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;