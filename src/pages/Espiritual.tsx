
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

// Data for Espiritual destinations
const espiritualDestinations = [
  {
    id: 1,
    title: 'Chapada dos Veadeiros, Goiás',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop',
    description: 'Santuário natural com cachoeiras místicas, cristais energéticos e céu estrelado.',
    price: 'A partir de R$ 2.599',
    duration: '6 dias / 5 noites',
    activities: ['Meditação', 'Terapias', 'Natureza'],
    highlights: [
      'Vivência em espaços holísticos',
      'Meditação em cachoeiras energéticas',
      'Banhos de lua e observação astronômica',
      'Terapias naturais com cristais de quartzo'
    ]
  },
  {
    id: 2,
    title: 'Alto Paraíso de Goiás, Goiás',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop',
    description: 'Conhecido centro místico com comunidades alternativas e práticas de bem-estar integradas à natureza.',
    price: 'A partir de R$ 2.899',
    duration: '5 dias / 4 noites',
    activities: ['Yoga', 'Comunidades', 'Xamanismo'],
    highlights: [
      'Prática de yoga ao nascer do sol',
      'Visita a comunidades alternativas',
      'Oficinas de alimentação viva',
      'Cerimônias com mestres locais'
    ]
  },
  {
    id: 3,
    title: 'São Thomé das Letras, Minas Gerais',
    image: 'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?q=80&w=2070&auto=format&fit=crop',
    description: 'Cidade mística cercada por lendas, grutas energéticas e rica em quartzo.',
    price: 'A partir de R$ 2.499',
    duration: '4 dias / 3 noites',
    activities: ['Energia dos Cristais', 'Grutas', 'Lendas'],
    highlights: [
      'Visita à Pirâmide de quartzo',
      'Meditação na Gruta de São Tomé',
      'Caminhada energética pela Pedra da Bruxa',
      'Vivência com artesãos de cristais'
    ]
  },
  {
    id: 4,
    title: 'Vale do Amanhecer, Planaltina-DF',
    image: 'https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?q=80&w=2070&auto=format&fit=crop',
    description: 'Comunidade espiritual com rituais únicos que mesclam diversas tradições religiosas.',
    price: 'A partir de R$ 2.399',
    duration: '3 dias / 2 noites',
    activities: ['Rituais', 'Templos', 'Comunidade'],
    highlights: [
      'Visita guiada ao Templo Mãe',
      'Conhecer os rituais e indumentárias',
      'Conversa com médiuns locais',
      'Participação em cerimônias (mediante autorização)'
    ]
  },
];

const Espiritual = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Experiências</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Espiritual
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Reconecte-se com sua essência interior em destinos que proporcionam paz, 
              renovação energética e profundas conexões com a natureza e práticas ancestrais.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Jornadas de Transformação Interior
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossas experiências espirituais foram criadas para quem busca autoconhecimento, 
              renovação e bem-estar integral. Em ambientes de rara beleza natural, você encontrará 
              o equilíbrio perfeito entre práticas ancestrais e terapias contemporâneas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Meditação
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Yoga
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Cura Natural
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Retiros
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Práticas Ancestrais
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Espirituais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {espiritualDestinations.map((destination) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Inicie sua Jornada Interior</h2>
            <p className="text-lg mb-8">
              Descubra como nossas experiências espirituais podem proporcionar transformações 
              profundas e duradouras em sua vida. Nossos consultores estão prontos para ajudá-lo.
            </p>
            <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Converse com um Especialista
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Espiritual;
