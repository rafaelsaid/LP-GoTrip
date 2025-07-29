
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
          <h4 className="text-primary font-medium mb-2">Entre em Contato</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Planejar
          </h2>
          <p className="text-gray-600">
            Estamos prontos para ajudar você a criar a viagem dos seus sonhos. 
            Entre em contato conosco e comece a planejar hoje mesmo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Email */}
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-600">contato@gotrip.com.br</p>
              <p className="text-gray-600">suporte@gotrip.com.br</p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-gray-600">(41) 99245-1213</p>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Endereço</h4>
              <p className="text-gray-600">
                Rua Sao Pio X, 134<br />
                Curitiba - PR<br />
                Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
