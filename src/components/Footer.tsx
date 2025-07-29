import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Go Trip!</h2>
            <p className="text-gray-400 mb-6">Proporcionando experiências inesquecíveis e viagens extraordinárias desde 2010. 
Sua jornada começa aqui.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/GOTRIP-Viagens-e-Turismo/100063079156801/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/gotripturismo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pacotes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Promoções</a>
              </li>
              
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>
          
          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Destinos Populares</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Rio de Janeiro</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Fernando de Noronha</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Gramado</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Lençóis Maranhenses</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Bonito</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Chapada Diamantina</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Rua Sao Pio X, 134, Curitiba, PR, Brasil
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">(41) 99245-1213</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">contato@gotrip.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Go Trip! Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;