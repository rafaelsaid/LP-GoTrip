import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

// Data for Gastronomia destinations
const gastronomiaDestinations = [
  {
    id: 1,
    title: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    description: 'Capital gastronômica do Brasil, com restaurantes premiados e diversidade culinária internacional.',
    price: 'A partir de R$ 2.899',
    duration: '4 dias / 3 noites',
    activities: ['Alta Gastronomia', 'Mercados', 'Workshops'],
    highlights: [
      'Jantar em restaurante estrelado Michelin',
      'Tour pelo Mercado Municipal',
      'Aula de culinária brasileira',
      'Experiência em bares tradicionais'
    ]
  },
  {
    id: 2,
    title: 'Salvador, Bahia',
    image: 'https://images.unsplash.com/photo-1584608582455-6bfea8c9f1cf?q=80&w=2070&auto=format&fit=crop',
    description: 'Berço da culinária afro-brasileira, com sabores únicos e tradições culinárias centenárias.',
    price: 'A partir de R$ 2.599',
    duration: '5 dias / 4 noites',
    activities: ['Culinária Baiana', 'Mercados', 'Festivais'],
    highlights: [
      'Aula de culinária baiana tradicional',
      'Tour gastronômico pelo Pelourinho',
      'Experiência com quituteiras locais',
      'Degustação de acarajé'
    ]
  },
  {
    id: 3,
    title: 'Belém, Pará',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    description: 'Descubra os sabores únicos da Amazônia em um dos mercados mais famosos do Brasil.',
    price: 'A partir de R$ 2.799',
    duration: '4 dias / 3 noites',
    activities: ['Mercados', 'Culinária Amazônica', 'Degustação'],
    highlights: [
      'Visita ao Ver-o-Peso',
      'Degustação de frutas amazônicas',
      'Preparo do açaí tradicional',
      'Pratos típicos paraenses'
    ]
  },
  {
    id: 4,
    title: 'Vale dos Vinhedos, RS',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop',
    description: 'Principal região vinícola do Brasil, com vinícolas premiadas e gastronomia italiana.',
    price: 'A partir de R$ 3.199',
    duration: '4 dias / 3 noites',
    activities: ['Vinícolas', 'Degustação', 'Gastronomia'],
    highlights: [
      'Tour por vinícolas premiadas',
      'Degustação de vinhos e espumantes',
      'Almoço em cantina tradicional',
      'Curso básico de harmonização'
    ]
  },
];

const Gastronomia = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gastronomia
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Descubra os sabores autênticos do Brasil em uma jornada gastronômica pelos 
              melhores destinos culinários do país.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Experiências Gastronômicas Únicas
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Embarque em uma viagem pelos sabores do Brasil, conhecendo a rica diversidade 
              culinária de cada região. De restaurantes premiados a mercados tradicionais, 
              você viverá experiências gastronômicas inesquecíveis.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Alta Gastronomia
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Culinária Regional
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Mercados
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Workshops
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Degustações
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Gastronômicos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gastronomiaDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 overflow-hidden relative">
                  <LazyImage 
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
                    <Users className="w-4 h-4 mr-1" />
                    <span>Grupos pequenos</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Destaques:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {destination.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
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
                    <button className="btn-primary text-sm py-2 px-4">Ver Detalhes</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gastronomia;