import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const VideoSection = () => (
  <section id="video" className="py-16 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Descubre nuestro <span className="gradient-text">Ecosistema IA</span> en acción
        </h2>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/v4rgdsrqo1I"
            title="Lumixia.tech - Ecosistemas IA para Empresas"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <ValuePropositionSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
