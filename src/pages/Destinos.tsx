import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import { Link } from "react-router-dom";

// Consolidated data from all themed pages
const allDestinations = [
  // Aventura
  {
    id: 1,
    category: 'aventura',
    title: 'Ilha do Mel, Paraná',
    image: 'https://images.unsplash.com/photo-1614211939273-6aaa804ccca0?q=80&w=2069&auto=format&fit=crop',
    description: 'Paraíso ecológico com praias deslumbrantes e trilhas para explorar a natureza intocada.',
    price: 'A partir de R$ 2.899',
    duration: '5 dias / 4 noites',
    activities: ['Caminhadas', 'Natação', 'Observação de Fauna'],
    route: '/aventura'
  },
  {
    id: 2,
    category: 'aventura',
    title: 'Florianópolis, Santa Catarina',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2073&auto=format&fit=crop',
    description: 'Ilha da Magia com 42 praias paradisíacas, esportes aquáticos e natureza exuberante.',
    price: 'A partir de R$ 3.299',
    duration: '6 dias / 5 noites',
    activities: ['Surf', 'Trilhas', 'Mergulho'],
    route: '/aventura'
  },
  {
    id: 3,
    category: 'aventura',
    title: 'Foz do Iguaçu, Paraná',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop',
    description: 'As impressionantes Cataratas do Iguaçu em uma cidade repleta de aventuras e natureza exuberante.',
    price: 'A partir de R$ 3.599',
    duration: '4 dias / 3 noites',
    activities: ['Rapel', 'Rafting', 'Tirolesa'],
    route: '/aventura'
  },
  {
    id: 4,
    category: 'aventura',
    title: 'Bonito, Mato Grosso do Sul',
    image: 'https://images.unsplash.com/photo-1590123550582-d64adb0027ce?q=80&w=2069&auto=format&fit=crop',
    description: 'Águas cristalinas, grutas misteriosas e oportunidades de mergulho em rios de águas doces.',
    price: 'A partir de R$ 3.899',
    duration: '5 dias / 4 noites',
    activities: ['Flutuação', 'Cavalgada', 'Mergulho'],
    route: '/aventura'
  },
  // Cultural
  {
    id: 5,
    category: 'cultural',
    title: 'Paraty, Rio de Janeiro',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop',
    description: 'Centro histórico colonial cercado por riquezas naturais, história e cultura viva.',
    price: 'A partir de R$ 2.799',
    duration: '4 dias / 3 noites',
    activities: ['Arquitetura Colonial', 'Gastronomia', 'História'],
    route: '/cultural'
  },
  {
    id: 6,
    category: 'cultural',
    title: 'Salvador, Bahia',
    image: 'https://images.unsplash.com/photo-1682553064442-8dd1292b47aa?q=80&w=2070&auto=format&fit=crop',
    description: 'Capital da alegria com rica herança africana, música contagiante e culinária única.',
    price: 'A partir de R$ 3.499',
    duration: '5 dias / 4 noites',
    activities: ['Música', 'Gastronomia', 'Cultura Afro'],
    route: '/cultural'
  },
  {
    id: 7,
    category: 'cultural',
    title: 'Ouro Preto, Minas Gerais',
    image: 'https://images.unsplash.com/photo-1591479485817-1a7636541954?q=80&w=2070&auto=format&fit=crop',
    description: 'Cidade histórica com arquitetura barroca impressionante e rica história do período colonial.',
    price: 'A partir de R$ 2.699',
    duration: '4 dias / 3 noites',
    activities: ['Igrejas Barrocas', 'Museus', 'Mineração'],
    route: '/cultural'
  },
  {
    id: 8,
    category: 'cultural',
    title: 'São Luís, Maranhão',
    image: 'https://images.unsplash.com/photo-1518138945051-3795edfcb137?q=80&w=2070&auto=format&fit=crop',
    description: 'Única capital brasileira fundada por franceses, com centro histórico reconhecido pela UNESCO.',
    price: 'A partir de R$ 3.199',
    duration: '5 dias / 4 noites',
    activities: ['Casarões Históricos', 'Reggae', 'Bumba Meu Boi'],
    route: '/cultural'
  },
  // Espiritual
  {
    id: 9,
    category: 'espiritual',
    title: 'Chapada dos Veadeiros, Goiás',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop',
    description: 'Santuário natural com cachoeiras místicas, cristais energéticos e céu estrelado.',
    price: 'A partir de R$ 2.599',
    duration: '6 dias / 5 noites',
    activities: ['Meditação', 'Terapias', 'Natureza'],
    route: '/espiritual'
  },
  {
    id: 10,
    category: 'espiritual',
    title: 'Alto Paraíso de Goiás, Goiás',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop',
    description: 'Conhecido centro místico com comunidades alternativas e práticas de bem-estar integradas à natureza.',
    price: 'A partir de R$ 2.899',
    duration: '5 dias / 4 noites',
    activities: ['Yoga', 'Comunidades', 'Xamanismo'],
    route: '/espiritual'
  }
];

const categories = [
  { id: 'todos', label: 'Todos os Destinos', color: 'amber' },
  { id: 'aventura', label: 'Aventura', color: 'emerald' },
  { id: 'cultural', label: 'Cultural', color: 'purple' },
  { id: 'espiritual', label: 'Espiritual', color: 'blue' },
  { id: 'viagens-corporativas', label: 'Viagens Corporativas', color: 'indigo' },
  { id: 'gastronomia', label: 'Gastronomia', color: 'orange' },
  { id: 'lua-de-mel', label: 'Lua de Mel', color: 'pink' }
];

const Destinos = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredDestinations = activeCategory === 'todos' 
    ? allDestinations 
    : allDestinations.filter(dest => dest.category === activeCategory);

  const getCategoryBadgeColor = (category: string) => {
    const colors = {
      aventura: 'bg-emerald-100 text-emerald-800',
      cultural: 'bg-purple-100 text-purple-800',
      espiritual: 'bg-blue-100 text-blue-800',
      'viagens-corporativas': 'bg-indigo-100 text-indigo-800',
      gastronomia: 'bg-orange-100 text-orange-800',
      'lua-de-mel': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      aventura: 'Aventura',
      cultural: 'Cultural',
      espiritual: 'Espiritual',
      'viagens-corporativas': 'Viagens Corporativas',
      gastronomia: 'Gastronomia',
      'lua-de-mel': 'Lua de Mel'
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Explore</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Destinos
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Descubra experiências únicas em destinos selecionados especialmente para você. 
              Do Brasil ao mundo, encontre sua próxima aventura.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Todos os Destinos Go Trip!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Explore nossa coleção completa de destinos cuidadosamente selecionados. 
              Cada experiência é planejada para oferecer momentos únicos e inesquecíveis 
              em diferentes categorias de turismo.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid with Filters */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Escolha sua Experiência</h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-amber-500 bg-amber-500 text-white shadow-lg'
                    : 'border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-500'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destino encontrado' : 'destinos encontrados'}
            </p>
          </div>
          
          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryBadgeColor(destination.category)}`}>
                      {getCategoryLabel(destination.category)}
                    </span>
                  </div>
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
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-500">{destination.activities.join(' • ')}</span>
                    <Link to={destination.route}>
                      <button className="btn-primary text-sm py-2 px-4">Ver Detalhes</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum destino encontrado</h3>
              <p className="text-gray-500">Tente selecionar uma categoria diferente</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link to="/" className="btn-primary inline-flex items-center">
              Voltar ao Início
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para sua Próxima Viagem?</h2>
            <p className="text-lg mb-8">
              Entre em contato conosco e planeje uma experiência personalizada 
              de acordo com seus interesses e preferências.
            </p>
            <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Fale Conosco
              </button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinos;