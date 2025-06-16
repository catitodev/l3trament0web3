import { ArrowLeft, Cpu, Brain, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Agentics = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Agentics Personalizados | CalangoFlux';
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-accent-500 text-white py-20">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Agentics Personalizados</h1>
            <p className="text-xl max-w-3xl mb-8">
              Desenvolvemos sistemas autônomos com IA que tomam decisões, aprendem com dados e executam ações com base em critérios definidos. São agentes inteligentes para gestão, atendimento, curadoria ou operação.
            </p>
            <a 
              href="https://wa.me/5522988324416" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white text-accent-600 hover:bg-white/90"
            >
              Criar meu Agentic
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
                Agentes inteligentes para escalar seu negócio
              </h2>
              <p className="text-gray-700 mb-6">
                Os Agentics são sistemas de IA autônomos capazes de realizar tarefas complexas, tomar decisões e executar ações sem intervenção humana constante.
              </p>
              <p className="text-gray-700">
                Diferente de simples automações, os Agentics são projetados para aprender, adaptar-se e melhorar continuamente à medida que interagem com seu ambiente e dados.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-accent-50 p-8 rounded-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-accent-100 w-20 h-20 rounded-full flex items-center justify-center text-accent-600">
                  <Cpu size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">O que torna um Agentic especial:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-accent-100 w-8 h-8 rounded-full flex items-center justify-center text-accent-600 mr-3 mt-1">
                    <Brain size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Autonomia</span> - Toma decisões independentes com base em dados e contexto
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent-100 w-8 h-8 rounded-full flex items-center justify-center text-accent-600 mr-3 mt-1">
                    <Target size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Objetivos</span> - Trabalha para atingir metas específicas definidas para seu negócio
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent-100 w-8 h-8 rounded-full flex items-center justify-center text-accent-600 mr-3 mt-1">
                    <Activity size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Aprendizado contínuo</span> - Melhora com o tempo e se adapta a novos cenários
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Casos de uso</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Agentic de Vendas</h3>
              <p className="text-gray-700 mb-4">
                Identifica leads qualificados, envia propostas personalizadas e acompanha o funil de vendas automaticamente.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Qualificação automatizada de leads</li>
                <li>• Envio de propostas personalizadas</li>
                <li>• Acompanhamento proativo de oportunidades</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Agentic de Atendimento</h3>
              <p className="text-gray-700 mb-4">
                Resolve problemas de clientes de forma autônoma, escalando para humanos apenas quando necessário.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Resolução autônoma de problemas comuns</li>
                <li>• Encaminhamento inteligente para especialistas</li>
                <li>• Acompanhamento de satisfação pós-atendimento</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Agentic de Conteúdo</h3>
              <p className="text-gray-700 mb-4">
                Pesquisa, cria, edita e publica conteúdo relevante para sua audiência.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Criação de conteúdo baseado em dados</li>
                <li>• Otimização para SEO e conversão</li>
                <li>• Distribuição automatizada em múltiplos canais</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Agentic de Gestão</h3>
              <p className="text-gray-700 mb-4">
                Monitora KPIs, identifica tendências e sugere ações para otimizar resultados.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Análise contínua de métricas de negócio</li>
                <li>• Previsões e alertas proativos</li>
                <li>• Recomendações estratégicas baseadas em dados</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="bg-accent-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Pronto para ter um agente inteligente trabalhando para você?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato para uma consulta gratuita. Vamos identificar os melhores casos de uso para Agentics em seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5522988324416" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Criar meu Agentic
                </a>
                <a href="/#contato" className="btn btn-outline border-accent-500 text-accent-500 hover:bg-accent-50">
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agentics;