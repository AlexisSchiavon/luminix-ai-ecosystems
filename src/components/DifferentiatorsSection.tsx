import { Brain, Eye, Users, Zap } from 'lucide-react';

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "Aprendizaje Continuo",
      description: "Cada agente aprende continuamente de tu negocio específico",
      highlight: "IA que evoluciona contigo"
    },
    {
      icon: Eye,
      title: "CRM Predictivo",
      description: "CRM que predice oportunidades antes de que aparezcan",
      highlight: "Anticipación inteligente"
    },
    {
      icon: Users,
      title: "Colaboración Híbrida",
      description: "Entorno colaborativo donde humanos e IA trabajan como equipo",
      highlight: "Sinergia humano-IA"
    },
    {
      icon: Zap,
      title: "Escalabilidad Infinita",
      description: "Escalabilidad desde 100 hasta 500,000+ productos sin pérdida de performance",
      highlight: "Crecimiento sin límites"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Más que automatización,{' '}
              <span className="gradient-text">es evolución</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Características únicas que hacen de Luminix.tech la plataforma más avanzada del mercado
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="card-glow group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="service-icon">
                      <item.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {item.highlight}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Feature Highlight */}
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 text-center border border-primary/20 overflow-hidden relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 bg-primary rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/50 rounded-full animate-bounce" />
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/30 rounded-full animate-ping" />
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl lg:text-4xl font-bold">
                  El único ecosistema que <span className="gradient-text">aprende</span> mientras vendes
                </h3>
                <p className="text-xl text-muted-foreground">
                  Mientras tu competencia usa herramientas separadas, tú tienes un cerebro digital 
                  que conecta cada punto de contacto con el cliente en una experiencia única.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Capacidad de aprendizaje</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Personalización automática</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">0ms</div>
                    <div className="text-sm text-muted-foreground">Latencia de respuesta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;