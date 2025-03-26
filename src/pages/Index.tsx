
import React from 'react';
import CircuitBackground from '@/components/CircuitBackground';
import AnimatedTitle from '@/components/AnimatedTitle';
import GlowButton from '@/components/GlowButton';
import SkillTag from '@/components/SkillTag';
import ProjectCard from '@/components/ProjectCard';
import { Github, Linkedin, MessageSquare, FileText, Javascript, Database, Webhook, Api } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <CircuitBackground />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <img 
            src="/lovable-uploads/e355f16c-c4c8-4858-acd3-00efb1b9773c.png" 
            alt="MK CODE Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40"
          />
        </div>
        
        {/* Title Section */}
        <div className="text-center mb-10">
          <AnimatedTitle 
            text="MK CODE" 
            className="text-4xl sm:text-5xl md:text-6xl tracking-wider mb-3 animate-glow"
            typingAnimation={true}
          />
          <h2 className="font-jetbrains text-lg sm:text-xl text-mk-blue animate-fadeIn opacity-0" style={{ animationDelay: '1000ms' }}>
            Automação. Código. Inteligência.
          </h2>
        </div>
        
        {/* Bio Section */}
        <div className="glass p-6 mb-10 max-w-2xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: '1200ms' }}>
          <p className="text-white/80 font-space text-center">
            Desenvolvedor focado em automações inteligentes com IA, bots e APIs. Transformando ideias em sistemas reais.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <GlowButton 
            href="https://github.com" 
            icon={<Github size={18} />}
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: '1400ms' }}
          >
            GitHub
          </GlowButton>
          <GlowButton 
            href="https://linkedin.com" 
            icon={<Linkedin size={18} />}
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: '1500ms' }}
          >
            LinkedIn
          </GlowButton>
          <GlowButton 
            href="https://wa.me/1234567890" 
            icon={<MessageSquare size={18} />}
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: '1600ms' }}
          >
            WhatsApp
          </GlowButton>
          <GlowButton 
            href="#" 
            icon={<FileText size={18} />}
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: '1700ms' }}
          >
            Portfólio
          </GlowButton>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16 animate-fadeIn opacity-0" style={{ animationDelay: '1800ms' }}>
          <h3 className="text-center font-orbitron text-xl mb-5 text-white/90">
            <span className="border-b-2 border-mk-blue pb-1">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <SkillTag name="JavaScript" icon={<Javascript size={14} />} className="animate-fadeIn" delay={1900} />
            <SkillTag name="Node.js" icon={<Javascript size={14} />} className="animate-fadeIn" delay={2000} />
            <SkillTag name="OpenAI" icon={<Api size={14} />} className="animate-fadeIn" delay={2100} />
            <SkillTag name="Baileys" icon={<MessageSquare size={14} />} className="animate-fadeIn" delay={2200} />
            <SkillTag name="APIs" icon={<Api size={14} />} className="animate-fadeIn" delay={2300} />
            <SkillTag name="FastAPI" icon={<Api size={14} />} className="animate-fadeIn" delay={2400} />
            <SkillTag name="Webhooks" icon={<Webhook size={14} />} className="animate-fadeIn" delay={2500} />
            <SkillTag name="SQLite" icon={<Database size={14} />} className="animate-fadeIn" delay={2600} />
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '2700ms' }}>
          <h3 className="text-center font-orbitron text-xl mb-5 text-white/90">
            <span className="border-b-2 border-mk-blue pb-1">Projetos</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProjectCard 
              title="WhatsApp Bot" 
              description="Bot inteligente de atendimento via WhatsApp integrado com IA"
              href="#"
            />
            <ProjectCard 
              title="API Nexus" 
              description="Sistema de integração com múltiplas plataformas e serviços"
              href="#"
            />
            <ProjectCard 
              title="Dashboard IA" 
              description="Painel de controle para análise e automação de processos"
              href="#"
            />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-white/50 font-jetbrains animate-fadeIn opacity-0" style={{ animationDelay: '2900ms' }}>
          <p>© {new Date().getFullYear()} MK CODE • Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
