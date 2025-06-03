import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Cpu, Wifi } from 'lucide-react';

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
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center text-primary-600">
            <Cpu size={28} className="mr-1" />
            <Wifi size={24} />
          </div>
          <span className="ml-2 font-heading font-bold text-xl">
            Calango<span className="text-secondary-500">Flux</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition ${
                isActive 
                  ? 'text-primary-600' 
                  : isScrolled ? 'text-gray-800 hover:text-primary-500' : 'text-gray-800 hover:text-primary-500'
              }`
            }
          >
            Início
          </NavLink>
          <a 
            href="/#sobre" 
            className={`text-sm font-medium transition ${
              isScrolled ? 'text-gray-800 hover:text-primary-500' : 'text-gray-800 hover:text-primary-500'
            }`}
          >
            Sobre
          </a>
          <a 
            href="/#servicos" 
            className={`text-sm font-medium transition ${
              isScrolled ? 'text-gray-800 hover:text-primary-500' : 'text-gray-800 hover:text-primary-500'
            }`}
          >
            Serviços
          </a>
          <a 
            href="/#impacto" 
            className={`text-sm font-medium transition ${
              isScrolled ? 'text-gray-800 hover:text-primary-500' : 'text-gray-800 hover:text-primary-500'
            }`}
          >
            Impacto
          </a>
          <a 
            href="/#contato" 
            className={`text-sm font-medium transition ${
              isScrolled ? 'text-gray-800 hover:text-primary-500' : 'text-gray-800 hover:text-primary-500'
            }`}
          >
            Contato
          </a>
        </nav>

        <a 
          href="https://wa.me/5522999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex btn btn-primary"
        >
          Fale Conosco
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={toggleMenu}
            >
              Início
            </NavLink>
            <a 
              href="/#sobre" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a 
              href="/#servicos" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="/#impacto" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Impacto
            </a>
            <a 
              href="/#contato" 
              className="text-base font-medium py-2 text-gray-800"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <a 
              href="https://wa.me/5522999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={toggleMenu}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;