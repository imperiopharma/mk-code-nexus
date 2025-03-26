
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const GlowButton = ({ children, href, className, icon, style }: GlowButtonProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "glow-btn group flex items-center gap-2 bg-mk-darkNavy px-5 py-3 rounded-lg border border-mk-blue/40 hover:border-mk-neonBlue/90 transition-all duration-300",
        className
      )}
      style={style}
    >
      {icon && (
        <span className="text-mk-blue group-hover:text-mk-neonBlue transition-colors duration-300">
          {icon}
        </span>
      )}
      <span className="font-jetbrains text-white/90 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </a>
  );
};

export default GlowButton;
