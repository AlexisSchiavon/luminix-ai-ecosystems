import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import UseCasesSection from '@/components/UseCasesSection';
import ProcessSection from '@/components/ProcessSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <ServicesSection />
      <BenefitsSection />
      <UseCasesSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
