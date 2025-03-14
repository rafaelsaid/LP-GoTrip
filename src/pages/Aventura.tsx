
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

// Data for Aventura destinations
const aventuraDestinations = [
  {
    id: 1,
    title: 'Ilha do Mel, Paraná',
    image: 'https://images.unsplash.com/photo-1614211939273-6aaa804ccca0?q=80&w=2069&auto=format&fit=crop',
    description: 'Paraíso ecológico com praias deslumbrantes e trilhas para explorar a natureza intocada.',
    price: 'A partir de R$ 2.899',
    duration: '5 dias / 4 noites',
    activities: ['Caminhadas', 'Natação', 'Observação de Fauna'],
    highlights: [
      'Trilha até o Farol das Conchas',
      'Visita à Praia do Farol',
      'Passeio de barco pela ilha',
      'Pôr do sol na Praia Grande'
    ]
  },
  {
    id: 2,
    title: 'Florianópolis, Santa Catarina',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2073&auto=format&fit=crop',
    description: 'Ilha da Magia com 42 praias paradisíacas, esportes aquáticos e natureza exuberante.',
    price: 'A partir de R$ 3.299',
    duration: '6 dias / 5 noites',
    activities: ['Surf', 'Trilhas', 'Mergulho'],
    highlights: [
      'Praia Mole e Joaquina - paraísos dos surfistas',
      'Trilha até a Lagoinha do Leste',
      'Passeio de barco na Costa da Lagoa',
      'Visita ao Mercado Público'
    ]
  },
  {
    id: 3,
    title: 'Foz do Iguaçu, Paraná',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop',
    description: 'As impressionantes Cataratas do Iguaçu em uma cidade repleta de aventuras e natureza exuberante.',
    price: 'A partir de R$ 3.599',
    duration: '4 dias / 3 noites',
    activities: ['Rapel', 'Rafting', 'Tirolesa'],
    highlights: [
      'Visita às Cataratas do Iguaçu',
      'Parque das Aves',
      'Passeio de barco no Macuco Safari',
      'Visita à Usina de Itaipu'
    ]
  },
  {
    id: 4,
    title: 'Bonito, Mato Grosso do Sul',
    image: 'https://images.unsplash.com/photo-1590123550582-d64adb0027ce?q=80&w=2069&auto=format&fit=crop',
    description: 'Águas cristalinas, grutas misteriosas e oportunidades de mergulho em rios de águas doces.',
    price: 'A partir de R$ 3.899',
    duration: '5 dias / 4 noites',
    activities: ['Flutuação', 'Cavalgada', 'Mergulho'],
    highlights: [
      'Gruta do Lago Azul',
      'Flutuação no Rio Sucuri',
      'Aventura na Nascente Azul',
      'Cachoeira do Aquidaban'
    ]
  },
];

const Aventura = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2073&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Aventura
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Explore paisagens deslumbrantes, desafie seus limites e crie memórias únicas em destinos 
              que proporcionam adrenalina e conexão com a natureza.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Aventuras Inesquecíveis no Brasil
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossos pacotes de aventura são cuidadosamente elaborados para quem busca emoção, 
              descoberta e experiências autênticas. Do surf em Florianópolis às trilhas na Ilha do Mel, 
              garantimos que cada momento da sua viagem seja repleto de novas sensações e desafios.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Trilhas
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Esportes Aquáticos
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Natureza
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Cachoeiras
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Expedições
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos de Aventura</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aventuraDestinations.map((destination) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para sua Próxima Aventura?</h2>
            <p className="text-lg mb-8">
              Fale com um dos nossos consultores especializados e planeje uma viagem personalizada 
              de acordo com seu estilo de aventura e preferências.
            </p>
            <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Entre em Contato
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Aventura;
