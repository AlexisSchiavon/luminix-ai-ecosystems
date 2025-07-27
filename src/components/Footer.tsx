import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-black text-white py-16">
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
                  <h3 className="text-2xl font-bold">Luminix.tech</h3>
                  <p className="text-primary text-sm">Ecosistemas IA para E-commerce del Futuro</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transformamos e-commerces con ecosistemas inteligentes que integran CRM, 
                agentes autónomos y entornos colaborativos para maximizar resultados.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Infraestructuras IA</button></li>
                <li><button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Agentes Especializados</button></li>
                <li><button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Sistemas RAG</button></li>
                <li><button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">CRM Inteligente</button></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => document.getElementById('value-proposition')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Sobre Nosotros</button></li>
                <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Preguntas Frecuentes</button></li>
                <li><button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Contacto</button></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                © 2025 Luminix.tech. Todos los derechos reservados.
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
                Transformando el futuro del e-commerce
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;