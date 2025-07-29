
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h4 className="text-white/80 text-lg md:text-xl mb-2">Descubra o Mundo</h4>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Destinos incríveis começam aqui!
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
          Planeje sua próxima viagem com a Go Trip! e viva experiências únicas em destinos extraordinários ao redor do mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#destinations" className="btn-primary px-8 py-3 text-lg">
              Descubra Destinos
            </a>
            <a 
              href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-8 py-3 text-lg text-white border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Explore Mais</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
