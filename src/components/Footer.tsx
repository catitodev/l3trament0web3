import { Link } from 'react-router-dom';
import { Github, Send, Twitter, Globe, Heart, Code, Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text">L3trament0Web3</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              Transformando vidas através do letramento digital, bens públicos e cultura regenerativa. 
              Uma jornada prática para o futuro descentralizado.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <a 
                href="https://github.com/catitodev/l3trament0web3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center hover:bg-glass-medium transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/l3trament0web3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center hover:bg-glass-medium transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-neon-blue" />
              </a>
              <a 
                href="https://t.me/l3trament0web3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center hover:bg-glass-medium transition-colors group"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 text-gray-400 group-hover:text-neon-green" />
              </a>
              <a 
                href="https://manus.space" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center hover:bg-glass-medium transition-colors group"
                aria-label="Manus Space"
              >
                <Globe className="w-5 h-5 text-gray-400 group-hover:text-neon-purple" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Aprender</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/digital-literacy" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
                  <span className="text-sm">Letramento Digital</span>
                </Link>
              </li>
              <li>
                <Link to="/public-goods" className="text-gray-400 hover:text-neon-green transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-green rounded-full"></span>
                  <span className="text-sm">Bens Públicos</span>
                </Link>
              </li>
              <li>
                <Link to="/commons-life" className="text-gray-400 hover:text-neon-purple transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                  <span className="text-sm">Cultura Commons</span>
                </Link>
              </li>
              <li>
                <Link to="/refi" className="text-gray-400 hover:text-neon-green transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-green rounded-full"></span>
                  <span className="text-sm">ReFi</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Experience */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Experiência</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/journey" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
                  <span className="text-sm">Sua Jornada</span>
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-neon-purple transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                  <span className="text-sm">Comunidade</span>
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-400 hover:text-neon-green transition-colors flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-neon-green rounded-full"></span>
                  <span className="text-sm">Nosso Impacto</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {/* Copyright */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-gray-400 text-xs md:text-sm mb-2">
                © 2025 L3trament0Web3 – Construindo um futuro digital mais justo
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Scale className="w-3 h-3" />
                  <span>MIT License</span>
                </div>
                <div className="flex items-center gap-1 flex-wrap justify-center">
                  <Code className="w-3 h-3" />
                  <span>Desenvolvido por</span>
                  <span className="text-neon-blue hover:text-neon-purple transition-colors font-medium">
                    @CalangoFluxTeam
                  </span>
                </div>
              </div>
            </div>
            
            {/* Made with Love */}
            <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm order-1 md:order-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>para a comunidade Web3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;