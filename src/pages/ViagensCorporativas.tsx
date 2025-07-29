import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

// Data for Viagens Corporativas destinations
const viagensCorporativasDestinations = [
  {
    id: 1,
    title: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    description: 'Centro financeiro do Brasil, ideal para eventos corporativos e networking de alto nível.',
    price: 'A partir de R$ 4.599',
    duration: '3 dias / 2 noites',
    activities: ['Networking', 'Team Building', 'Eventos'],
    highlights: [
      'Visitas a startups e empresas inovadoras',
      'Jantares executivos em restaurantes premiados',
      'Atividades de team building personalizadas',
      'Espaços para eventos corporativos'
    ]
  },
  {
    id: 2,
    title: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop',
    description: 'Cidade maravilhosa oferece cenários únicos para eventos corporativos e incentivos empresariais.',
    price: 'A partir de R$ 5.299',
    duration: '4 dias / 3 noites',
    activities: ['Incentivos', 'Convenções', 'Networking'],
    highlights: [
      'Eventos com vista para o Cristo Redentor',
      'Jantares em locais exclusivos',
      'Atividades de integração na praia',
      'Passeios culturais personalizados'
    ]
  },
  {
    id: 3,
    title: 'Brasília, DF',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop',
    description: 'Capital federal com infraestrutura moderna para grandes convenções e eventos governamentais.',
    price: 'A partir de R$ 3.899',
    duration: '2 dias / 1 noite',
    activities: ['Convenções', 'Seminários', 'Reuniões'],
    highlights: [
      'Centros de convenções de última geração',
      'Visitas a órgãos governamentais',
      'Arquitetura modernista única',
      'Networking com setor público'
    ]
  },
  {
    id: 4,
    title: 'Belo Horizonte, MG',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2070&auto=format&fit=crop',
    description: 'Hub de inovação e tecnologia, perfeito para empresas que buscam inspiração e networking qualificado.',
    price: 'A partir de R$ 3.699',
    duration: '3 dias / 2 noites',
    activities: ['Inovação', 'Tecnologia', 'Startups'],
    highlights: [
      'Visitas a incubadoras e parques tecnológicos',
      'Experiências gastronômicas mineiras',
      'Workshops de inovação',
      'Networking com ecossistema de startups'
    ]
  },
];

const ViagensCorporativas = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Viagens Corporativas
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Experiências corporativas personalizadas para empresas que buscam integração 
              de equipes, networking qualificado e eventos de alto nível.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Turismo Corporativo de Excelência
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossos programas corporativos são desenvolvidos para atender às necessidades 
              específicas de cada empresa. De convenções a incentivos, oferecemos experiências 
              que fortalecem equipes, geram networking e impulsionam resultados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Networking
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Team Building
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Eventos
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Incentivos
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Convenções
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Corporativos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {viagensCorporativasDestinations.map((destination) => (
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
                    <span>Grupos corporativos</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Sua Próxima Experiência Corporativa?</h2>
            <p className="text-lg mb-8">
              Fale com nossos especialistas em turismo corporativo e desenvolva um programa 
              personalizado que atenda às necessidades específicas da sua empresa.
            </p>
            <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Solicite uma Proposta
              </button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ViagensCorporativas;