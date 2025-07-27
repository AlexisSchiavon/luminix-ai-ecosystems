import { Rocket, Target, Wrench, BarChart3, Link, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Ecosistema Unificado",
      description: "CRM, agentes IA y analytics en una sola plataforma que tu equipo dominará en días",
      emoji: "🚀"
    },
    {
      icon: Target,
      title: "IA que Aprende Continuamente", 
      description: "Cada interacción mejora el sistema, cada venta optimiza el proceso automáticamente",
      emoji: "🎯"
    },
    {
      icon: Zap,
      title: "Implementación Express",
      description: "Tu ecosistema funcionando en 15 días con integración completa y entrenamiento incluido",
      emoji: "⚡"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-tech-gray-light to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Lo que hace diferente a{' '}
              <span className="gradient-text">Luminix.tech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No solo implementamos tecnología, creamos ecosistemas que evolucionan contigo
            </p>
          </div>

           {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-glow group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{benefit.emoji}</div>
                    <div className="service-icon">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Ecosistemas que aprenden y evolucionan 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;