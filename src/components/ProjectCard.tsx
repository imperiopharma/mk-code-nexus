
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ProjectCard = ({ title, description, href, className }: ProjectCardProps) => {
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "glass group p-5 flex flex-col h-full transition-all duration-500 hover:bg-white/10 border border-mk-blue/20 hover:border-mk-neonBlue/50",
        className
      )}
    >
      <h3 className="font-orbitron text-lg font-semibold text-mk-blue group-hover:text-mk-neonBlue transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 font-jetbrains">
        {description}
      </p>
      <div className="mt-3 text-xs text-mk-blue font-jetbrains opacity-80 group-hover:opacity-100 transition-all duration-300">
        Ver projeto →
      </div>
    </a>
  );
};

export default ProjectCard;
