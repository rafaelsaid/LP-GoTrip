import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

// Data for Consultoria Personalizada destinations
const consultoriaPersonalizadaDestinations = [
  {
    id: 1,
    title: 'Consultoria Premium',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
    description: 'Planejamento completo e personalizado com consultores especializados para experiências únicas.',
    price: 'Sob consulta',
    duration: 'Planejamento personalizado',
    activities: ['Assessoria', 'Personalização', 'Exclusividade'],
    highlights: [
      'Consultoria one-on-one com especialistas',
      'Roteiros 100% personalizados',
      'Acesso a experiências exclusivas',
      'Suporte 24h durante a viagem'
    ]
  },
  {
    id: 2,
    title: 'Concierge Travel',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
    description: 'Serviço de concierge completo para viajantes que buscam o máximo em comodidade e exclusividade.',
    price: 'A partir de R$ 8.999',
    duration: 'Serviço contínuo',
    activities: ['Concierge', 'Reservas VIP', 'Assistência'],
    highlights: [
      'Reservas em restaurantes exclusivos',
      'Acesso VIP a atrações e eventos',
      'Transfers premium e hospedagens de luxo',
      'Assistente pessoal durante toda a viagem'
    ]
  },
  {
    id: 3,
    title: 'Experiências Sob Medida',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    description: 'Criação de experiências totalmente customizadas baseadas nos seus interesses e preferências únicos.',
    price: 'Sob consulta',
    duration: 'Flexível',
    activities: ['Customização', 'Experiências', 'Exclusividade'],
    highlights: [
      'Experiências criadas especificamente para você',
      'Acesso a locais e atividades não convencionais',
      'Guias especializados e multilíngues',
      'Flexibilidade total de datas e itinerário'
    ]
  },
  {
    id: 4,
    title: 'Assessoria Completa',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    description: 'Serviço completo de assessoria em viagens com foco em experiências diferenciadas e atendimento premium.',
    price: 'A partir de R$ 5.999',
    duration: 'Consultoria completa',
    activities: ['Assessoria', 'Planejamento', 'Suporte'],
    highlights: [
      'Análise detalhada do perfil do viajante',
      'Propostas de roteiros exclusivos',
      'Gestão completa de reservas e documentação',
      'Suporte antes, durante e após a viagem'
    ]
  },
];

const ConsultoriaPersonalizada = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Consultoria Personalizada e Exclusiva
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Transforme seus sonhos de viagem em realidade com nossa consultoria especializada. 
              Criamos experiências únicas e totalmente personalizadas para você.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Viagens Sob Medida Para Você
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossa consultoria especializada oferece um serviço premium e totalmente personalizado. 
              Cada detalhe é cuidadosamente planejado para criar experiências únicas que 
              superam suas expectativas e realizam seus sonhos de viagem mais ambiciosos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Personalização
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Exclusividade
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Assessoria Premium
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Sob Medida
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Suporte 24h
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços Exclusivos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultoriaPersonalizadaDestinations.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 overflow-hidden relative">
                  <LazyImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-semibold text-primary">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <h3 className="font-bold text-xl">{service.title}</h3>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{service.duration}</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>Atendimento individual</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Diferenciais:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                      {service.highlights.length > 2 && (
                        <li className="text-primary text-sm">+ {service.highlights.length - 2} outros</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-500">{service.activities.join(' • ')}</span>
                    <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <button className="btn-primary text-sm py-2 px-4">Solicitar Orçamento</button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Sua Experiência Exclusiva?</h2>
            <p className="text-lg mb-8">
              Entre em contato com nossos consultores especializados e descubra como podemos 
              criar a viagem dos seus sonhos com total personalização e exclusividade.
            </p>
            <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Solicitar Consultoria
              </button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ConsultoriaPersonalizada;