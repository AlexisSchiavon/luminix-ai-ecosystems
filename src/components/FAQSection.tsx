import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el CRM integrado con los agentes de IA?",
      answer: "Nuestro CRM inteligente unifica todos los puntos de contacto del cliente mientras los agentes de IA analizan comportamientos, predicen necesidades y ejecutan acciones automáticas. Cada interacción alimenta el sistema para mejorar las predicciones y personalización."
    },
    {
      question: "¿Qué tan complejo es entrenar a mi equipo en el nuevo entorno?",
      answer: "El entorno está diseñado para ser intuitivo. Incluimos 2 semanas de onboarding personalizado, documentación completa y soporte en vivo. La mayoría de equipos están operando al 100% en 5-7 días."
    },
    {
      question: "¿Los agentes pueden manejar múltiples idiomas y monedas?",
      answer: "Sí, nuestros agentes soportan más de 40 idiomas y todas las monedas principales. Se adaptan automáticamente según la ubicación del cliente y pueden manejar conversiones en tiempo real."
    },
    {
      question: "¿Cómo se integra con nuestras herramientas actuales?",
      answer: "Conectamos nativamente con Shopify, WooCommerce, redes sociales, herramientas de email marketing y más de 100 plataformas. La migración preserva todos tus datos históricos y configuraciones."
    },
    {
      question: "¿Qué nivel de personalización ofrecen los agentes?",
      answer: "Cada agente se entrena específicamente con tu catálogo, políticas, tono de comunicación y objetivos. Pueden aprender patrones únicos de tu negocio y adaptarse a situaciones específicas de tu industria."
    },
    {
      question: "¿Cómo medimos el ROI del ecosistema implementado?",
      answer: "Proporcionamos dashboards en tiempo real con métricas clave: conversión, tiempo de respuesta, satisfacción del cliente, valor promedio de pedido y más. Realizamos análisis mensuales comparativos con tu performance previa."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Preguntas <span className="gradient-text">Frecuentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre nuestros ecosistemas de IA
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-glow border-primary/20 bg-gradient-to-r from-primary/5 to-transparent"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors px-6 py-4 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="text-center pt-12">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">¿Tienes más preguntas?</h3>
              <p className="text-muted-foreground mb-6">
                Agenda una consulta gratuita y resolvemos todas tus dudas específicas
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Consulta sin compromiso
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Análisis personalizado
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Respuesta en 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;