import { Link } from 'react-router-dom';
import { Instagram, Github, Send, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CalangoFlux</h3>
            <p className="text-gray-300 mb-4">
              Inteligência aplicada para impacto real. Unindo automação, IA e comunicação com propósito.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/agentes-ai" className="text-gray-300 hover:text-primary-300 transition">
                  Agentes AI Personalizados
                </Link>
              </li>
              <li>
                <Link to="/automacoes" className="text-gray-300 hover:text-primary-300 transition">
                  Automações com IA
                </Link>
              </li>
              <li>
                <Link to="/agentics" className="text-gray-300 hover:text-primary-300 transition">
                  Agentics Personalizados
                </Link>
              </li>
              <li>
                <Link to="/webdesign" className="text-gray-300 hover:text-primary-300 transition">
                  Webdesign Completo
                </Link>
              </li>
              <li>
                <Link to="/daos-web3" className="text-gray-300 hover:text-primary-300 transition">
                  Letramento Web3
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#sobre" className="text-gray-300 hover:text-primary-300 transition">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="/#impacto" className="text-gray-300 hover:text-primary-300 transition">
                  Nosso impacto
                </a>
              </li>
              <li>
                <a href="/#contato" className="text-gray-300 hover:text-primary-300 transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="https://discord.gg/NjJeB285" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-300 transition">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © CalangoFlux 2025 – Ética, impacto e autonomia digital
          </p>
          
          <div className="flex space-x-4">
            <a href="https://instagram.com/calangoflux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/calangoflux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://t.me/calangoflux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Telegram">
              <Send size={20} />
            </a>
            <a href="https://youtube.com/@calangoflux?si=5kA1MkuPTCBUjCOs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="ENS Wallet">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;