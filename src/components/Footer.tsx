import { Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacto" className="bg-tech-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Lumixia.tech</h3>
                  <p className="text-primary text-sm">Ecosistemas IA para Empresas del Futuro</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transformamos empresas con ecosistemas inteligentes que integran CRM, 
                agentes autónomos y entornos colaborativos para maximizar resultados.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Navegación</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('video')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Video Explicativo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('beneficios')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Beneficios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('proceso')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Implementación
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                © 2025 Lumixia.tech. Todos los derechos reservados.
              </p>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs text-primary font-medium">
                Transformando el futuro de los negocios
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;