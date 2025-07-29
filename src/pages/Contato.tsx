import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Contato = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-white/80 text-lg md:text-xl mb-2">Fale Conosco</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contato
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Estamos prontos para ajudar você a criar a viagem dos seus sonhos. 
              Entre em contato conosco e comece a planejar hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
              Vamos Planejar Juntos
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nossa equipe de consultores especializados está pronta para transformar 
              seus sonhos de viagem em realidade. Com atendimento personalizado e 
              experiência em destinos únicos, garantimos que cada detalhe da sua 
              jornada seja cuidadosamente planejado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informações de Contato</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações de contato */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Email</h4>
                    <p className="text-gray-600 mb-1">contato@gotrip.com.br</p>
                    <p className="text-gray-600">suporte@gotrip.com.br</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Telefone</h4>
                    <p className="text-gray-600">(41) 99245-1213</p>
                    <p className="text-sm text-gray-500 mt-1">WhatsApp disponível</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Endereço e horários */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Sao Pio X, 134<br />
                      Curitiba - PR<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda - Sexta: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábado: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar sua Aventura?</h2>
            <p className="text-lg mb-8">
              Clique no botão abaixo e entre em contato via WhatsApp. Nossos consultores 
              estão prontos para criar uma experiência única para você.
            </p>
            <a href="https://api.whatsapp.com/message/VAQWXCNDIPPAH1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-amber-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
                <Send className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contato;