import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <BookOpen className="w-8 h-8 text-blue-400 mr-2" />
          <span className="font-bold text-xl text-white">
            L3trament0<span className="text-blue-400">Web3</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`
            }
          >
            Início
          </NavLink>
          <NavLink 
            to="/digital-literacy" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`
            }
          >
            Letramento Digital
          </NavLink>
          <NavLink 
            to="/public-goods" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`
            }
          >
            Bens Públicos
          </NavLink>
          <NavLink 
            to="/commons-life" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`
            }
          >
            Commons
          </NavLink>
          <NavLink 
            to="/refi" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`
            }
          >
            ReFi
          </NavLink>
          <NavLink 
            to="/community" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`
            }
          >
            Comunidade
          </NavLink>
        </nav>

        <Link 
          to="/journey"
          className="hidden md:flex btn-primary"
        >
          Começar Jornada
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
              }
              onClick={toggleMenu}
            >
              Início
            </NavLink>
            <NavLink 
              to="/digital-literacy" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
              }
              onClick={toggleMenu}
            >
              Letramento Digital
            </NavLink>
            <NavLink 
              to="/public-goods" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
              }
              onClick={toggleMenu}
            >
              Bens Públicos
            </NavLink>
            <NavLink 
              to="/commons-life" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
              }
              onClick={toggleMenu}
            >
              Commons
            </NavLink>
            <NavLink 
              to="/refi" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
              }
              onClick={toggleMenu}
            >
              ReFi
            </NavLink>
            <NavLink 
              to="/community" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
              }
              onClick={toggleMenu}
            >
              Comunidade
            </NavLink>
            <Link 
              to="/journey"
              className="btn-primary"
              onClick={toggleMenu}
            >
              Começar Jornada
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;