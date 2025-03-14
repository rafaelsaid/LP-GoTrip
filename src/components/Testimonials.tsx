
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Aventureira",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "A Go Trip! superou todas as minhas expectativas. Desde o primeiro contato até o retorno, tudo foi perfeito. Conheci lugares incríveis e tive experiências que vou lembrar para sempre.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Viajante frequente",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Os guias são extremamente conhecedores e atenciosos. A agência realmente se preocupa com cada detalhe para garantir que sua viagem seja inesquecível.",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Fotógrafa",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Como fotógrafa, busco lugares com paisagens deslumbrantes, e a Go Trip! sempre acerta nas recomendações. Já fiz 3 viagens com eles e todas foram perfeitas.",
    rating: 5
  },
  {
    id: 4,
    name: "Pedro Alves",
    role: "Empresário",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "Mesmo com uma agenda apertada, a Go Trip! conseguiu organizar uma viagem que atendeu todas as minhas necessidades. Profissionalismo de alto nível.",
    rating: 4
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
          <h4 className="text-primary font-medium mb-2">Depoimentos</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600">
            Descubra por que tantas pessoas confiam na Go Trip! para criar 
            memórias inesquecíveis em suas viagens pelo mundo.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          ref={testimonialsRef}
        >
          {/* Testimonial cards */}
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <Quote className="w-12 h-12 text-primary/20 mb-4" />
                    
                    <p className="text-gray-700 text-lg mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            onClick={handleNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
