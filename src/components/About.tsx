import { motion } from 'framer-motion';
import { Zap, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Sobre a CalangoFlux</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Construindo SaaS Agentic que une automação, inteligência artificial e comunicação com impacto positivo real.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Trabalhamos de forma nômade, descentralizada e regenerativa, criando soluções tecnológicas acessíveis para coletivos, empreendedores, agentes públicos e projetos com propósito.
            </p>
            <p className="text-lg text-gray-700">
              Acreditamos em autonomia, ética e colaboração digital como força transformadora.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div 
              className="bg-primary-50 p-6 rounded-xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-600">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Inovação</h3>
              <p className="text-gray-700">Soluções criativas que integram tecnologia e propósito.</p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-50 p-6 rounded-xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-secondary-600">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Descentralização</h3>
              <p className="text-gray-700">Modelo de trabalho nômade e distribuído geograficamente.</p>
            </motion.div>
            
            <motion.div 
              className="bg-accent-50 p-6 rounded-xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-accent-600">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Colaboração</h3>
              <p className="text-gray-700">Construímos juntos para gerar impacto positivo e sustentável.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;