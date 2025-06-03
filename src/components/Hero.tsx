import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 z-0" />
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-1/6 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-1/3 left-1/6 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Inteligência aplicada para impacto real
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A CalangoFlux cria agentes de IA, automações e soluções digitais acessíveis para pessoas e projetos com propósito.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button onClick={scrollToServices} className="btn btn-primary">
              Conheça nossos serviços
            </button>
            <a 
              href="https://wa.me/5522999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Fale conosco
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <motion.a
          href="#sobre"
          className="inline-flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-sm font-medium mb-2">Rolar para baixo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;