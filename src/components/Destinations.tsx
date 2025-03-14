import { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Updated destinations data with Brazilian locations
const destinationsData = {
  aventura: [
    {
      id: 1,
      title: 'Chapada Diamantina, Bahia',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2073&auto=format&fit=crop',
      description: 'Trilhas desafiadoras e paisagens deslumbrantes em um dos parques nacionais mais famosos do Brasil.',
      price: 'A partir de R$ 3.199',
    },
    {
      id: 2,
      title: 'Lençóis Maranhenses, Maranhão',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2073&auto=format&fit=crop',
      description: 'Dunas de areia branca e lagoas cristalinas formam um cenário único para aventuras inesquecíveis.',
      price: 'A partir de R$ 3.499',
    }
  ],
  cultural: [
    {
      id: 3,
      title: 'Ouro Preto, Minas Gerais',
      image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop',
      description: 'Cidade histórica com arquitetura barroca impressionante e rica história do período colonial.',
      price: 'A partir de R$ 2.699',
    },
    {
      id: 4,
      title: 'São Luís, Maranhão',
      image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop',
      description: 'Única capital brasileira fundada por franceses, com centro histórico reconhecido pela UNESCO.',
      price: 'A partir de R$ 3.199',
    }
  ],
  ecoturismo: [
    {
      id: 5,
      title: 'Pantanal, Mato Grosso',
      image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop',
      description: 'Maior planície alagada do mundo, com rica biodiversidade e experiências únicas de observação da fauna.',
      price: 'A partir de R$ 3.599',
    }
  ],
  gastronomia: [
    {
      id: 6,
      title: 'São Paulo, SP',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
      description: 'Capital gastronômica do Brasil, com restaurantes premiados e diversidade culinária internacional.',
      price: 'A partir de R$ 2.899',
    }
  ]
};

const categoryLabels = {
  aventura: 'Aventura',
  cultural: 'Cultural',
  ecoturismo: 'Ecoturismo',
  gastronomia: 'Gastronomia'
};

const categoryRoutes = {
  aventura: '/aventura',
  cultural: '/cultural',
  ecoturismo: '/ecoturismo',
  gastronomia: '/gastronomia',
};

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">Descubra o Mundo</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
            Embarque conosco nesta experiência única, conheça destinos que desafiam o convencional, mergulhe em culturas vibrantes,
            conecte-se espiritualmente e saboreie a autenticidade gastronômica de cada lugar. Ateliê especializado em viagens de
            experiência, românticas e de lua de mel.
          </p>
          <a
            href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300 font-medium"
          >
            Fale Conosco
          </a>
        </div>
        
        {/* Destinations Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(destinationsData).map(([category, destinations]) => (
            <div key={category} className="relative group overflow-hidden rounded-lg">
              {destinations[0] && (
                <>
                  <div className="relative h-[500px] overflow-hidden">
                    <img 
                      src={destinations[0].image} 
                      alt={destinations[0].title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </h3>
                      
                      <Link 
                        to={categoryRoutes[category as keyof typeof categoryRoutes]} 
                        className="inline-block border border-white px-5 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        Saiba mais
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Destinations;
