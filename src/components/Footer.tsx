import { Link } from 'react-router-dom';
import { Github, Send, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">L3trament0Web3</h3>
            <p className="text-gray-300 mb-4">
              Transformando vidas através do letramento digital, bens públicos e cultura regenerativa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/digital-literacy" className="text-gray-300 hover:text-blue-400 transition">
                  Letramento Digital
                </Link>
              </li>
              <li>
                <Link to="/public-goods" className="text-gray-300 hover:text-blue-400 transition">
                  Bens Públicos
                </Link>
              </li>
              <li>
                <Link to="/commons-life" className="text-gray-300 hover:text-blue-400 transition">
                  Cultura Commons
                </Link>
              </li>
              <li>
                <Link to="/abundant-relationships" className="text-gray-300 hover:text-blue-400 transition">
                  Relações Abundantes
                </Link>
              </li>
              <li>
                <Link to="/refi" className="text-gray-300 hover:text-blue-400 transition">
                  ReFi
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Experiência</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/journey" className="text-gray-300 hover:text-blue-400 transition">
                  Sua Jornada
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-blue-400 transition">
                  Comunidade
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-blue-400 transition">
                  Nosso Impacto
                </Link>
              </li>
              <li>
                <Link to="/gamification-demo" className="text-gray-300 hover:text-blue-400 transition">
                  Demo Gamificação
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © L3trament0Web3 2025 – Construindo um futuro digital mais justo e sustentável
          </p>
          
          <div className="flex space-x-4">
            <a href="https://github.com/catitodev/l3trament0web3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/l3trament0web3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://t.me/l3trament0web3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Telegram">
              <Send size={20} />
            </a>
            <a href="https://manus.space" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Manus Space">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;