import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Wallet, Zap } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // Safe wallet hook usage
  let walletData = {
    tonConnected: false,
    metamaskConnected: false,
    tonWallet: null as any,
    metamaskWallet: null as any
  };

  try {
    // Try to use wallet provider if available
    const { useWallet } = require('./wallet/WalletProvider');
    const { tonConnected, metamaskConnected, tonWallet, metamaskWallet } = useWallet();
    walletData = { tonConnected, metamaskConnected, tonWallet, metamaskWallet };
  } catch (error) {
    // Fallback to default values if wallet provider is not available
    console.warn('Wallet provider not available, using default values');
  }

  const isWalletConnected = walletData.tonConnected || walletData.metamaskConnected;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center mr-3 group-hover:shadow-glow transition-all duration-300">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl text-white">
            L3trament0<span className="gradient-text">Web3</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink 
            to="/" 
            className="nav-link"
          >
            Início
          </NavLink>
          <NavLink 
            to="/digital-literacy" 
            className="nav-link"
          >
            Letramento Digital
          </NavLink>
          <NavLink 
            to="/public-goods" 
            className="nav-link"
          >
            Bens Públicos
          </NavLink>
          <NavLink 
            to="/commons-life" 
            className="nav-link"
          >
            Commons
          </NavLink>
          <NavLink 
            to="/refi" 
            className="nav-link"
          >
            ReFi
          </NavLink>
          <NavLink 
            to="/community" 
            className="nav-link"
          >
            Comunidade
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Wallet Status */}
          {isWalletConnected && (
            <div className="flex items-center gap-2 px-3 py-2 glass-dark rounded-xl">
              {walletData.tonConnected && (
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-neon-blue" />
                  <span className="text-sm text-gray-300">
                    {formatAddress(walletData.tonWallet?.account?.address || '')}
                  </span>
                </div>
              )}
              {walletData.metamaskConnected && (
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-neon-orange" />
                  <span className="text-sm text-gray-300">
                    {formatAddress(walletData.metamaskWallet?.address || '')}
                  </span>
                </div>
              )}
            </div>
          )}

          <Link 
            to="/journey"
            className="btn-primary"
          >
            {isWalletConnected ? 'Continuar Jornada' : 'Começar Jornada'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 glass-dark rounded-xl text-white focus:outline-none hover:bg-glass-medium transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {/* Wallet Status Mobile */}
            {isWalletConnected && (
              <div className="p-4 glass rounded-xl mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Carteira Conectada</span>
                </div>
                {walletData.tonConnected && (
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-neon-blue" />
                    <span className="text-gray-300">
                      TON: {formatAddress(walletData.tonWallet?.account?.address || '')}
                    </span>
                  </div>
                )}
                {walletData.metamaskConnected && (
                  <div className="flex items-center gap-2 text-sm">
                    <Wallet className="w-4 h-4 text-neon-orange" />
                    <span className="text-gray-300">
                      ETH: {formatAddress(walletData.metamaskWallet?.address || '')}
                    </span>
                  </div>
                )}
              </div>
            )}

            <NavLink 
              to="/" 
              className="nav-link block py-3"
              onClick={toggleMenu}
            >
              Início
            </NavLink>
            <NavLink 
              to="/digital-literacy" 
              className="nav-link block py-3"
              onClick={toggleMenu}
            >
              Letramento Digital
            </NavLink>
            <NavLink 
              to="/public-goods" 
              className="nav-link block py-3"
              onClick={toggleMenu}
            >
              Bens Públicos
            </NavLink>
            <NavLink 
              to="/commons-life" 
              className="nav-link block py-3"
              onClick={toggleMenu}
            >
              Commons
            </NavLink>
            <NavLink 
              to="/refi" 
              className="nav-link block py-3"
              onClick={toggleMenu}
            >
              ReFi
            </NavLink>
            <NavLink 
              to="/community" 
              className="nav-link block py-3"
              onClick={toggleMenu}
            >
              Comunidade
            </NavLink>
            <Link 
              to="/journey"
              className="btn-primary w-full justify-center mt-4"
              onClick={toggleMenu}
            >
              {isWalletConnected ? 'Continuar Jornada' : 'Começar Jornada'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;