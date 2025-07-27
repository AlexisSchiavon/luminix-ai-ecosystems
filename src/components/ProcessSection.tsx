import { Search, Cpu, Rocket, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Análisis & Diseño",
      description: "Mapeamos tu operación y diseñamos tu ecosistema personalizado",
      details: ["Auditoría completa", "Arquitectura IA personalizada"]
    },
    {
      icon: Rocket,
      number: "02",
      title: "Implementación",
      description: "Desplegamos y entrenamos los agentes con datos de tu negocio",
      details: ["Migración de datos", "Entrenamiento IA", "Go-live asistido"]
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Optimización Continua",
      description: "Tu ecosistema aprende y mejora automáticamente cada día",
      details: ["Monitoreo 24/7", "Evolución automática", "Reportes mensuales"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-tech-gray-light to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Tu <span className="gradient-text">Ecosistema IA</span> en 4 Etapas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proceso probado para transformar tu e-commerce en una máquina de ventas inteligente
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Card */}
                  <div className="card-glow bg-background relative z-10 text-center space-y-6 p-8">
                    {/* Step Number */}
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-lg relative">
                      <span>{step.number}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-full animate-pulse opacity-0 group-hover:opacity-30 transition-opacity" />
                    </div>

                    {/* Icon */}
                    <div className="service-icon mx-auto">
                      <step.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 pt-4 border-t border-border">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Timeline de Implementación</h3>
              <div className="flex flex-wrap justify-center gap-12 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15 días</div>
                  <div className="text-sm text-muted-foreground">Ecosistema funcionando</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Operación autónoma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;