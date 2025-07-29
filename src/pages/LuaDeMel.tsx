
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

// Data for Lua de Mel destinations
const luaDeMelDestinations = [
  {
    id: 1,
    title: 'Morro de São Paulo, Bahia',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    description: 'Praias românticas, pôr do sol inesquecível e clima ideal para casais apaixonados.',
    price: 'A partir de R$ 4.299',
    duration: '7 dias / 6 noites',
    activities: ['Praias', 'Passeios de Barco', 'Gastronomia'],
    highlights: [
      'Pacote all-inclusive em resort exclusivo',
      'Jantar romântico à luz de velas na praia',
      'Massagem para casal com vista para o mar',
      'Passeio de barco ao pôr do sol com champagne'
    ]
  },
  {
    id: 2,
    title: 'Fernando de Noronha, Pernambuco',
    image: 'https://images.unsplash.com/photo-1589308955174-7f321b5eb2d3?q=80&w=2070&auto=format&fit=crop',
    description: 'Destino exclusivo com as praias mais paradisíacas do Brasil e experiências únicas para casais.',
    price: 'A partir de R$ 7.899',
    duration: '8 dias / 7 noites',
    activities: ['Mergulho', 'Praias', 'Natureza'],
    highlights: [
      'Hospedagem premium com vista para o mar',
      'Mergulho exclusivo para casal em Baía dos Porcos',
      'Piquenique romântico no Morro Dois Irmãos',
      'Passeio de barco com paradas nas melhores praias'
    ]
  },
  {
    id: 3,
    title: 'Gramado, Rio Grande do Sul',
    image: 'https://images.unsplash.com/photo-1589308955174-7f321b5eb2d3?q=80&w=2070&auto=format&fit=crop',
    description: 'Clima europeu, gastronomia refinada e aconchego perfeito para casais em lua de mel.',
    price: 'A partir de R$ 4.599',
    duration: '6 dias / 5 noites',
    activities: ['Chocolates', 'Vinícolas', 'Charme'],
    highlights: [
      'Hospedagem em hotel boutique com lareira e hidromassagem',
      'Tour romântico pelas vinícolas da região',
      'Jantar fondue com seleção especial de vinhos',
      'Degustação exclusiva nas melhores chocolaterias'
    ]
  },
  {
    id: 4,
    title: 'Jericoacoara, Ceará',
    image: 'https://images.unsplash.com/photo-1520454474749-611b7248ffdb?q=80&w=2071&auto=format&fit=crop',
    description: 'Paraíso rústico e charmoso com dunas, lagoas e o famoso pôr do sol na Duna Por do Sol.',
    price: 'A partir de R$ 5.199',
    duration: '7 dias / 6 noites',
    activities: ['Kitesurf', 'Dunas', 'Lagoas'],
    highlights: [
      'Hospedagem em bangalô privativo com piscina',
      'Passeio de buggy exclusivo para o casal',
      'Jantar romântico na Pedra Furada',
      'Massagem para casal ao pôr do sol'
    ]
  },
];

const LuaDeMel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lua de Mel
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Inicie sua vida a dois com momentos inesquecíveis em destinos românticos, 
              exclusivos e cuidadosamente selecionados para marcar o começo da sua história.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Momentos Inesquecíveis a Dois
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Criamos experiências românticas personalizadas para celebrar o início da vida a dois. 
              Do planejamento à execução, cuidamos de cada detalhe para que você e seu amor aproveitem 
              momentos de pura magia e conexão.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Praias Exclusivas
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Hotéis Boutique
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Gastronomia
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Experiências Private
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Momentos Românticos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Românticos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luaDeMelDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-semibold text-primary">
                    {destination.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <h3 className="font-bold text-xl">{destination.title}</h3>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{destination.duration}</span>
                    <Heart className="w-4 h-4 mr-1 text-rose-500" />
                    <span>Experiência romântica</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Destaques Românticos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {destination.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                      {destination.highlights.length > 2 && (
                        <li className="text-primary text-sm">+ {destination.highlights.length - 2} outros</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-500">{destination.activities.join(' • ')}</span>
                    <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <button className="btn-primary text-sm py-2 px-4">Ver Detalhes</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/" className="btn-primary inline-flex items-center">
              Ver todos os destinos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Planeje sua Lua de Mel dos Sonhos</h2>
            <p className="text-lg mb-8">
              Deixe nossos consultores especializados criarem uma experiência personalizada e 
              inesquecível para celebrar o início da sua vida a dois.
            </p>
            <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Solicite uma Proposta
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LuaDeMel;
