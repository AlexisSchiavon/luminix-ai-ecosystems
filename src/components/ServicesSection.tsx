import { Brain, Users, Database, BarChart3, Bot, Search, ShoppingCart, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "Ecosistema IA Completo",
      description: "CRM inteligente + Agentes especializados + Analytics predictivo",
      features: [
        "CRM con scoring automático y segmentación predictiva",
        "Agentes IA para ventas, soporte y recuperación de carritos",
        "Dashboard colaborativo centralizado para tu equipo"
      ],
      gradient: "from-purple-500/10 to-blue-500/10"
    },
    {
      icon: Bot,
      title: "Agentes Autónomos",
      description: "IA que vende, asiste y analiza 24/7",
      features: [
        "Consultor virtual que cierra ventas automáticamente",
        "Soporte inteligente que resuelve el 90% de consultas",
        "Analista que predice oportunidades antes de que aparezcan"
      ],
      gradient: "from-green-500/10 to-purple-500/10"
    }
  ];

  const specializedAgents = [
    { icon: ShoppingCart, name: "Agente de Ventas", description: "Cierra deals automáticamente" },
    { icon: MessageSquare, name: "Agente de Soporte", description: "Resuelve consultas 24/7" },
    { icon: BarChart3, name: "Agente Analista", description: "Insights en tiempo real" },
    { icon: Users, name: "Agente de Retención", description: "Recupera clientes perdidos" }
  ];

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Ecosistemas Inteligentes</span>
              <br />para E-commerce
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones completas que trabajan en perfecta sincronía para revolucionar tu operación comercial
            </p>
          </div>

          {/* Main Services */}
          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <Card 
                key={index} 
                className={`card-glow bg-gradient-to-br ${service.gradient} border-primary/20`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="service-icon">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-20">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 text-center border border-primary/10">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-3xl font-bold">
                Resultados que <span className="gradient-text">Transforman</span> tu Negocio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">300%</div>
                  <div className="text-muted-foreground">Aumento en conversiones</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15 días</div>
                  <div className="text-muted-foreground">Implementación completa</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Operación autónoma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;