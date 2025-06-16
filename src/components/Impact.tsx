import { motion } from 'framer-motion';
import { Heart, BarChart, ShieldCheck } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impacto" className="section bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Nosso Modelo de Impacto</h2>
          <div className="w-16 h-1 bg-primary-400 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="bg-primary-500/20 w-16 h-16 rounded-full flex items-center justify-center text-primary-300">
                <Heart size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Subsídio Cruzado</h3>
                <p className="text-gray-200">
                  A cada 10 clientes pagantes, entregamos 1 serviço completo gratuitamente para uma associação, coletivo, escola ou projeto social.
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-center border-t border-white/20 pt-6 mt-6">
              Tecnologia de verdade para quem mais precisa.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-accent-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-accent-300">
                <BarChart size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparência e Autonomia</h3>
              <p className="text-gray-300">
                Utilizamos ferramentas abertas e processos transparentes. Nossos clientes têm autonomia sobre seus dados e sistemas.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-300">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Acessibilidade Digital</h3>
              <p className="text-gray-300">
               Incentivamos a inclusão digital com soluções acessíveis e conhecimento compartilhado, fomentando o empoderamento e bom uso tecnológico.
              </p>
            </motion.div>
          </div>
          
          <motion.p 
            className="text-center text-gray-300 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Transparência, autonomia e acessibilidade digital fazem parte do nosso DNA.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Impact;