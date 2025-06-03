import { ArrowLeft, Database, Lock, Users, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const DaosWeb3 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'DAOs e Web3 | CalangoFlux';
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-secondary-500 text-white py-20">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para início
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">DAOs e Web3</h1>
            <p className="text-xl max-w-3xl mb-8">
              Criamos organizações descentralizadas com contratos inteligentes, tokens e governança participativa. Fazemos letramento Web3, infraestrutura segura, NFTs funcionais e integração com ferramentas como TONxDAO, ENS, IPFS e Gnosis Safe.
            </p>
            <a 
              href="https://wa.me/5522999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white text-secondary-600 hover:bg-white/90"
            >
              Montar minha DAO
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Descentralize sua organização
              </h2>
              <p className="text-gray-700 mb-6">
                As DAOs (Organizações Autônomas Descentralizadas) representam uma nova forma de organização, onde decisões são tomadas coletivamente por membros através de mecanismos de governança transparentes e seguros.
              </p>
              <p className="text-gray-700">
                Nossa expertise abrange desde a concepção até a implementação e manutenção de DAOs para diversos propósitos, desde comunidades criativas até organizações de impacto social.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary-50 p-8 rounded-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center text-secondary-600">
                  <Database size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">Benefícios das DAOs:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Lock size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Transparência</span> - Todas as decisões e transações são registradas em blockchain
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Governança participativa</span> - Membros votam e decidem o futuro da organização
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Coins size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Incentivos alinhados</span> - Tokens e recompensas alinham interesses individuais e coletivos
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Nossos serviços Web3</h2>
            <div className="w-16 h-1 bg-secondary-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Estruturação de DAOs</h3>
              <p className="text-gray-700 mb-4">
                Criamos toda a infraestrutura necessária para sua organização descentralizada.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Contratos inteligentes personalizados</li>
                <li>• Mecanismos de governança</li>
                <li>• Tokenomics e incentivos</li>
                <li>• Ferramentas de gestão de tesouraria</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Letramento Web3</h3>
              <p className="text-gray-700 mb-4">
                Capacitamos sua equipe ou comunidade com os conhecimentos necessários para operar no ecossistema Web3.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Workshops educativos</li>
                <li>• Treinamentos práticos</li>
                <li>• Documentação personalizada</li>
                <li>• Acompanhamento contínuo</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">NFTs funcionais</h3>
              <p className="text-gray-700 mb-4">
                Desenvolvemos NFTs que vão além da arte digital, com utilidades reais para sua comunidade.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Tokens de acesso a produtos e serviços</li>
                <li>• Certificações e credenciais</li>
                <li>• Sistemas de lealdade e recompensas</li>
                <li>• Identidades digitais</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Integrações e ferramentas</h3>
              <p className="text-gray-700 mb-4">
                Conectamos sua DAO com o ecossistema de ferramentas Web3 mais adequado para suas necessidades.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• TONxDAO para gestão organizacional</li>
                <li>• ENS para identidade e domínios</li>
                <li>• IPFS para armazenamento descentralizado</li>
                <li>• Gnosis Safe para gestão segura de fundos</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="bg-secondary-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Pronto para entrar no futuro da organização?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato para uma consulta gratuita. Vamos entender seus objetivos e desenhar a melhor estrutura de DAO para sua organização.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5522999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Montar minha DAO
                </a>
                <Link to="/#contato" className="btn btn-outline border-secondary-500 text-secondary-500 hover:bg-secondary-50">
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DaosWeb3;