import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MapPin } from 'lucide-react';
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
        {/* Top contact bar - visible on larger screens */}
        <div className="hidden lg:flex justify-end items-center space-x-6 text-sm mb-3 text-gray-600">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>(41) 99245-1213</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Curitiba, Brasil</span>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Go Trip!</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-gray-900 hover:text-primary transition-colors">Início</a>
            <a href="#destinations" className="font-medium text-gray-900 hover:text-primary transition-colors">Destinos</a>
            <a href="#testimonials" className="font-medium text-gray-900 hover:text-primary transition-colors">Depoimentos</a>
            <a href="#contact" className="font-medium text-gray-900 hover:text-primary transition-colors">Contato</a>
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
          <a href="#testimonials" className="px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded-lg">Depoimentos</a>
          <a href="#contact" className="px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded-lg">Contato</a>
          <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary mx-4">Reserve Agora</button>
          </a>

          {/* Mobile contact info */}
          <div className="border-t border-gray-200 mt-2 pt-4 px-4 space-y-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>(41) 99245-1213</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Curitiba, Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;