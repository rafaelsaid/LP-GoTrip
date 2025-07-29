import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logoImg from '/logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src={logoImg} 
              alt="Go Trip Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className="text-2xl font-bold text-primary">Go Trip!</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-gray-900 hover:text-primary transition-colors">Início</a>
            <a href="#destinations" className="font-medium text-gray-900 hover:text-primary transition-colors">Destinos</a>
            <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-primary transition-colors">Contato</a>
            <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Reserve Agora</button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white w-full absolute left-0 right-0 shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#" className="px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded-lg">Início</a>
          <a href="#destinations" className="px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded-lg">Destinos</a>
          <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded-lg">Contato</a>
          <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary mx-4">Reserve Agora</button>
          </a>

        </div>
      </div>
    </header>;
};
export default Navbar;