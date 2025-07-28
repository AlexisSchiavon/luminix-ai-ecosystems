import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-tech-gray-light to-background relative overflow-hidden">
      <FloatingParticles count={20} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main CTA */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              ¿Preparado para <span className="gradient-text">liderar</span> tu sector con IA?
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trabajamos exclusivamente con <span className="text-primary font-bold">3 e-commerce por mes</span> para 
              garantizar implementaciones extraordinarias
            </p>
          </div>

          {/* Urgency Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Solo 3 cupos disponibles</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Implementación en 15 días</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="btn-hero pulse-purple group text-xl px-12 py-6"
              onClick={() => window.open('https://calendly.com/alexis-schiavon/consultoria-gratuita-con-ia-en-clave', '_blank')}
            >
              Evaluar mi E-commerce Gratis
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Análisis completo sin compromiso • Respuesta en 24h
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Garantía de satisfacción</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">15 días</div>
              <div className="text-sm text-muted-foreground">Time to market</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte especializado</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;