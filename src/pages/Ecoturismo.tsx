import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

// Data for Ecoturismo destinations
const ecoturismoDestinations = [
  {
    id: 1,
    title: 'Pantanal, Mato Grosso',
    image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop',
    description: 'Maior planície alagada do mundo, com rica biodiversidade e experiências únicas de observação da fauna.',
    price: 'A partir de R$ 3.599',
    duration: '5 dias / 4 noites',
    activities: ['Safári', 'Observação de Aves', 'Passeios de Barco'],
    highlights: [
      'Observação de onças-pintadas',
      'Passeio de barco pelos rios',
      'Focagem noturna de jacarés',
      'Trilhas interpretativas'
    ]
  },
  {
    id: 2,
    title: 'Amazônia, Amazonas',
    image: 'https://images.unsplash.com/photo-1628605032145-90e9c2366b46?q=80&w=2070&auto=format&fit=crop',
    description: 'Mergulhe na maior floresta tropical do mundo, com experiências autênticas e sustentáveis.',
    price: 'A partir de R$ 4.299',
    duration: '6 dias / 5 noites',
    activities: ['Trilhas', 'Comunidades', 'Navegação'],
    highlights: [
      'Hospedagem em lodge sustentável',
      'Visita a comunidades ribeirinhas',
      'Encontro com botos-cor-de-rosa',
      'Caminhada na copa das árvores'
    ]
  },
  {
    id: 3,
    title: 'Fernando de Noronha, Pernambuco',
    image: 'https://images.unsplash.com/photo-1589308454676-22a0e7be6069?q=80&w=2070&auto=format&fit=crop',
    description: 'Paraíso ecológico com praias preservadas, vida marinha abundante e práticas sustentáveis.',
    price: 'A partir de R$ 5.199',
    duration: '4 dias / 3 noites',
    activities: ['Mergulho', 'Praias', 'Conservação'],
    highlights: [
      'Mergulho com tartarugas marinhas',
      'Projeto TAMAR',
      'Trilha do Mirante dos Golfinhos',
      'Praia do Sancho'
    ]
  },
  {
    id: 4,
    title: 'Bonito, Mato Grosso do Sul',
    image: 'https://images.unsplash.com/photo-1590123550582-d64adb0027ce?q=80&w=2069&auto=format&fit=crop',
    description: 'Destino modelo em ecoturismo, com rios cristalinos e grutas impressionantes.',
    price: 'A partir de R$ 3.899',
    duration: '5 dias / 4 noites',
    activities: ['Flutuação', 'Mergulho', 'Grutas'],
    highlights: [
      'Gruta do Lago Azul',
      'Flutuação no Rio Sucuri',
      'Aquário Natural',
      'Balneário do Rio do Peixe'
    ]
  },
];

const Ecoturismo = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ecoturismo
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Explore a natureza de forma responsável e sustentável, conhecendo a biodiversidade 
              brasileira e contribuindo para sua preservação.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Turismo Sustentável no Brasil
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossas experiências de ecoturismo são cuidadosamente planejadas para proporcionar 
              encontros únicos com a natureza, sempre respeitando o meio ambiente e apoiando 
              as comunidades locais.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Conservação
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Biodiversidade
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Sustentabilidade
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Comunidades
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Natureza
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Ecoturísticos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecoturismoDestinations.map((destination) => (
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

export default Ecoturismo;