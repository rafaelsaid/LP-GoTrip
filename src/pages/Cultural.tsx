
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

// Data for Cultural destinations
const culturalDestinations = [
  {
    id: 1,
    title: 'Paraty, Rio de Janeiro',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop',
    description: 'Centro histórico colonial cercado por riquezas naturais, história e cultura viva.',
    price: 'A partir de R$ 2.799',
    duration: '4 dias / 3 noites',
    activities: ['Arquitetura Colonial', 'Gastronomia', 'História'],
    highlights: [
      'Centro Histórico - Patrimônio Mundial da UNESCO',
      'Festival Literário Internacional de Paraty (FLIP)',
      'Tour pelos engenhos de cachaça',
      'Passeio de barco pelas ilhas'
    ]
  },
  {
    id: 2,
    title: 'Salvador, Bahia',
    image: 'https://images.unsplash.com/photo-1682553064442-8dd1292b47aa?q=80&w=2070&auto=format&fit=crop',
    description: 'Capital da alegria com rica herança africana, música contagiante e culinária única.',
    price: 'A partir de R$ 3.499',
    duration: '5 dias / 4 noites',
    activities: ['Música', 'Gastronomia', 'Cultura Afro'],
    highlights: [
      'Pelourinho - Centro Histórico',
      'Aulas de capoeira e percussão',
      'Tour gastronômico com acarajé e moqueca',
      'Festa de Iemanjá (quando disponível)'
    ]
  },
  {
    id: 3,
    title: 'Ouro Preto, Minas Gerais',
    image: 'https://images.unsplash.com/photo-1591479485817-1a7636541954?q=80&w=2070&auto=format&fit=crop',
    description: 'Cidade histórica com arquitetura barroca impressionante e rica história do período colonial.',
    price: 'A partir de R$ 2.699',
    duration: '4 dias / 3 noites',
    activities: ['Igrejas Barrocas', 'Museus', 'Mineração'],
    highlights: [
      'Visita à Igreja de São Francisco de Assis',
      'Museu da Inconfidência',
      'Mina do Chico Rei',
      'Degustação de pratos típicos mineiros'
    ]
  },
  {
    id: 4,
    title: 'São Luís, Maranhão',
    image: 'https://images.unsplash.com/photo-1518138945051-3795edfcb137?q=80&w=2070&auto=format&fit=crop',
    description: 'Única capital brasileira fundada por franceses, com centro histórico reconhecido pela UNESCO.',
    price: 'A partir de R$ 3.199',
    duration: '5 dias / 4 noites',
    activities: ['Casarões Históricos', 'Reggae', 'Bumba Meu Boi'],
    highlights: [
      'Centro Histórico com azulejos portugueses',
      'Festa do Bumba Meu Boi (sazonal)',
      'Rota Reggae em São Luís',
      'Passeio à Alcântara colonial'
    ]
  },
];

const Cultural = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cultural
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Mergulhe na história, tradições e sabores autênticos do Brasil. Conheça destinos 
              que preservam nossa rica identidade cultural e patrimônio histórico.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Imersão Cultural no Brasil
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossas experiências culturais proporcionam um mergulho profundo nas tradições, 
              história e manifestações artísticas brasileiras. De Paraty a Salvador, você viverá 
              experiências autênticas que revelam a alma e a diversidade cultural do nosso país.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Patrimônios UNESCO
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Gastronomia
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Festas Populares
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Artesanato
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Música e Dança
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Culturais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalDestinations.map((destination) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Descubra a Alma do Brasil</h2>
            <p className="text-lg mb-8">
              Converse com nossos especialistas e crie um roteiro personalizado para conhecer as 
              riquezas culturais brasileiras do seu jeito.
            </p>
            <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Solicite uma Consultoria
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cultural;
