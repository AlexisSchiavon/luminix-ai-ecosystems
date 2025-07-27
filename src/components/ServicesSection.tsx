import { Brain, Users, Database, BarChart3, Bot, Search, ShoppingCart, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "Infraestructuras IA Completas",
      description: "Ecosistema todo-en-uno para tu e-commerce",
      features: [
        "CRM Inteligente Integrado: Gestión unificada con scoring automático",
        "Agente IA Multifuncional: Ventas, soporte y upselling",
        "Entorno Colaborativo: Dashboard centralizado para tu equipo",
        "Analytics Predictivo: Forecasting de ventas y comportamiento"
      ],
      gradient: "from-purple-500/10 to-blue-500/10"
    },
    {
      icon: Bot,
      title: "Agentes de IA Especializados",
      description: "Cada agente domina una función específica",
      features: [
        "Consultor de ventas virtual que cierra deals",
        "Especialista en recuperación de carritos abandonados",
        "Asistente de inventario y recomendaciones",
        "Gestor de quejas y satisfacción del cliente"
      ],
      gradient: "from-green-500/10 to-purple-500/10"
    },
    {
      icon: Search,
      title: "Sistemas RAG Avanzados",
      description: "Conocimiento contextual e inteligente",
      features: [
        "Motor de búsqueda conversacional para productos",
        "Base de conocimiento inteligente sobre tu negocio",
        "Respuestas contextuales basadas en historial",
        "Actualización automática de información"
      ],
      gradient: "from-blue-500/10 to-teal-500/10"
    }
  ];

  const specializedAgents = [
    { icon: ShoppingCart, name: "Agente de Ventas", description: "Cierra deals automáticamente" },
    { icon: MessageSquare, name: "Agente de Soporte", description: "Resuelve consultas 24/7" },
    { icon: BarChart3, name: "Agente Analista", description: "Insights en tiempo real" },
    { icon: Users, name: "Agente de Retención", description: "Recupera clientes perdidos" }
  ];

  return (
    <section className="py-24 bg-background">
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

          {/* Specialized Agents Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">
              Agentes Especializados que <span className="text-primary">Transforman</span> tu Negocio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedAgents.map((agent, index) => (
                <div 
                  key={index}
                  className="card-glow text-center space-y-4 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-icon mx-auto">
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-lg">{agent.name}</h4>
                  <p className="text-muted-foreground text-sm">{agent.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;