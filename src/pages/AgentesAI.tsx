import { ArrowLeft, Bot, MessageSquare, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const AgentesAI = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Agentes AI Personalizados | CalangoFlux';
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-primary-500 text-white py-20">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Agentes AI Personalizados</h1>
            <p className="text-xl max-w-3xl mb-8">
              Criamos bots sob medida para Telegram, Discord, WhatsApp, sites e apps. Eles respondem automaticamente, ajudam com vendas, suporte, educação ou qualquer fluxo específico do seu negócio.
            </p>
            <a 
              href="https://wa.me/5522999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white text-primary-600 hover:bg-white/90"
            >
              Solicitar orçamento
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
                Automatize atendimentos com inteligência
              </h2>
              <p className="text-gray-700 mb-6">
                Nossos agentes de IA são projetados para interagir naturalmente com seus clientes e usuários, oferecendo respostas rápidas e precisas 24 horas por dia, 7 dias por semana.
              </p>
              <p className="text-gray-700">
                Cada bot é personalizado de acordo com a identidade da sua marca, com uma personalidade única e uma base de conhecimento específica para seu negócio.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-50 p-8 rounded-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center text-primary-600">
                  <Bot size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">Você define:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <Shield size={16} />
                  </div>
                  <div>
                    <span className="font-medium">A personalidade</span> - Tom de voz, estilo de comunicação e valores da marca
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="font-medium">O conteúdo</span> - Base de conhecimento, FAQs, produtos e serviços
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-600 mr-3 mt-1">
                    <Zap size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Os limites</span> - O que o bot pode e não pode fazer ou dizer
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Principais benefícios</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Atendimento 24/7</h3>
              <p className="text-gray-700">
                Seus clientes recebem respostas imediatas a qualquer momento, mesmo fora do horário comercial.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Redução de custos</h3>
              <p className="text-gray-700">
                Automatize tarefas repetitivas e libere sua equipe para trabalhar em atividades mais estratégicas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Experiência consistente</h3>
              <p className="text-gray-700">
                Mantenha um padrão de qualidade e tom de voz uniforme em todas as interações com clientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Escalabilidade</h3>
              <p className="text-gray-700">
                Atenda centenas ou milhares de usuários simultaneamente sem perder qualidade.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Dados e insights</h3>
              <p className="text-gray-700">
                Colete informações valiosas sobre as dúvidas e necessidades dos seus clientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Integração completa</h3>
              <p className="text-gray-700">
                Conecte seu bot com sistemas existentes como CRM, e-commerce e bases de conhecimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Pronto para automatizar seu atendimento?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato para uma consulta gratuita. Vamos entender suas necessidades e criar um agente personalizado para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5522999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Solicitar orçamento
                </a>
                <Link to="/#contato" className="btn btn-outline">
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

export default AgentesAI;