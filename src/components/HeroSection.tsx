import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Menu } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import FloatingParticles from './FloatingParticles';
import TypingEffect from './TypingEffect';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Luminix.tech</span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-tech-black/90 backdrop-blur-sm border-primary/20">
            <DropdownMenuItem 
              onClick={() => scrollToSection('servicios')}
              className="text-white hover:bg-primary/20 hover:text-primary cursor-pointer"
            >
              Servicios
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollToSection('implementacion')}
              className="text-white hover:bg-primary/20 hover:text-primary cursor-pointer"
            >
              Implementación
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollToSection('video')}
              className="text-white hover:bg-primary/20 hover:text-primary cursor-pointer"
            >
              Video Explicativo
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollToSection('beneficios')}
              className="text-white hover:bg-primary/20 hover:text-primary cursor-pointer"
            >
              Beneficios
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:bg-primary/20 hover:text-primary cursor-pointer"
            >
              FAQ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Floating Particles */}
        <FloatingParticles count={30} />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8 fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium">
              <Sparkles className="w-4 h-4" />
              Ecosistemas de IA de Nueva Generación
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white text-shadow">
              <TypingEffect 
                text="Revoluciona tu E-commerce" 
                speed={80}
                className="block"
              />
              <span className="block mt-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                con Ecosistemas de IA
              </span>
              <span className="block text-white">Inteligentes</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Plataformas completas que integran <span className="text-primary font-semibold">CRM</span>, 
              <span className="text-primary font-semibold"> agentes autónomos</span> y 
              <span className="text-primary font-semibold"> entornos colaborativos</span> para 
              maximizar tus ventas online
            </p>
            
            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="btn-hero pulse-purple group"
              >
                Descubrir mi Ecosistema IA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10x</div>
                <div className="text-gray-300">Productividad del Equipo</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">15 días</div>
                <div className="text-gray-300">Implementación Express</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500k+</div>
                <div className="text-gray-300">Productos Soportados</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;