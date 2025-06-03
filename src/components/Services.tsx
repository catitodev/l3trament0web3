import { Bot, Cpu, Terminal, Laptop, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Nossos Serviços</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Soluções tecnológicas que unem automação, inteligência artificial e propósito.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Agentes AI Personalizados"
            description="Criamos bots sob medida para Telegram, Discord, WhatsApp, sites e apps. Eles respondem automaticamente, ajudam com vendas, suporte, educação ou qualquer fluxo específico do seu negócio."
            icon={<Bot size={24} />}
            color="primary"
            linkTo="/agentes-ai"
            delay={0.1}
          />
          
          <ServiceCard
            title="Automações com IA"
            description="Integramos IA com plataformas como Notion, Google Drive, WhatsApp e n8n. Criamos fluxos automatizados que reduzem trabalho manual e aumentam a eficiência do seu negócio."
            icon={<Terminal size={24} />}
            color="secondary"
            linkTo="/automacoes"
            delay={0.2}
          />
          
          <ServiceCard
            title="Agentics Personalizados"
            description="Desenvolvemos sistemas autônomos com IA que tomam decisões, aprendem com dados e executam ações com base em critérios definidos. São agentes inteligentes para gestão, atendimento e operação."
            icon={<Cpu size={24} />}
            color="accent"
            linkTo="/agentics"
            delay={0.3}
          />
          
          <ServiceCard
            title="Webdesign Completo"
            description="Cuidamos de tudo: identidade visual, branding, design UX/UI, domínio e publicação do site. Sites responsivos, leves e conectados com automações e IA."
            icon={<Laptop size={24} />}
            color="primary"
            linkTo="/webdesign"
            delay={0.4}
          />
          
          <ServiceCard
            title="DAOs e Web3"
            description="Criamos organizações descentralizadas com contratos inteligentes, tokens e governança participativa. Fazemos letramento Web3, infraestrutura segura e NFTs funcionais."
            icon={<Database size={24} />}
            color="secondary"
            linkTo="/daos-web3"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;