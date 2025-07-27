import { TrendingUp, Users, BarChart3, Megaphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: "Para Gerentes de Ventas",
      emoji: "📈",
      description: "Visualiza el pipeline completo, desde leads hasta conversión, con predicciones de cierre",
      features: ["Pipeline predictivo", "Scoring automático de leads", "Alertas de oportunidades", "Reportes de performance"]
    },
    {
      icon: Users,
      title: "Para Equipos de Atención", 
      emoji: "👥",
      description: "Gestiona múltiples canales desde un solo lugar con respuestas sugeridas por IA",
      features: ["Inbox unificado", "Respuestas inteligentes", "Escalamiento automático", "Métricas de satisfacción"]
    },
    {
      icon: BarChart3,
      title: "Para Propietarios",
      emoji: "📊", 
      description: "Obtén insights accionables sobre tu negocio con reportes automáticos personalizados",
      features: ["Dashboard ejecutivo", "KPIs en tiempo real", "Análisis predictivo", "Reportes automatizados"]
    },
    {
      icon: Megaphone,
      title: "Para Directores de Marketing",
      emoji: "💼",
      description: "Segmenta automáticamente clientes y personaliza campañas basadas en comportamiento real",
      features: ["Segmentación IA", "Campañas automáticas", "A/B testing inteligente", "ROI tracking"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Cómo <span className="gradient-text">potenciamos</span> tu E-commerce
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones específicas para cada rol en tu organización
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="card-glow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{useCase.emoji}</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {useCase.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">85%</div>
                <div className="text-muted-foreground">Reducción en tiempo de respuesta</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">3.2x</div>
                <div className="text-muted-foreground">Aumento en conversiones</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Operación autónoma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;