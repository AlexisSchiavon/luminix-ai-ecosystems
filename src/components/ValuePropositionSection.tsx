import { Zap, Target, Users, TrendingUp } from 'lucide-react';

const ValuePropositionSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description: "IA que aprende y mejora continuamente"
    },
    {
      icon: Target,
      title: "Precisión Predictiva", 
      description: "Anticipa necesidades antes de que aparezcan"
    },
    {
      icon: Users,
      title: "Colaboración Humano-IA",
      description: "Tu equipo potenciado con inteligencia artificial"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad Infinita",
      description: "Crece sin límites manteniendo la calidad"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-tech-gray-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold">
              El Futuro del{' '}
              <span className="gradient-text">E-commerce</span>{' '}
              está Aquí
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              En <span className="text-primary font-semibold">Luminix.tech</span> desarrollamos ecosistemas completos de IA que no solo automatizan, 
              sino que crean <span className="text-primary font-semibold">experiencias de compra extraordinarias</span> mientras 
              optimizan cada aspecto de tu operación comercial.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-glow group text-center space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon mx-auto">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Central Value Statement */}
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-6xl font-bold text-primary mb-4">∞</div>
              <h3 className="text-2xl lg:text-3xl font-bold">
                Más que automatización, es <span className="gradient-text">evolución</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Cada interacción mejora el sistema. Cada venta optimiza el proceso. 
                Cada cliente entrena tu ecosistema para ser más inteligente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;