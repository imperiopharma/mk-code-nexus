
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const SkillTag = ({ name, icon, className, delay = 0 }: SkillTagProps) => {
  return (
    <div 
      className={cn(
        "skill-tag flex items-center gap-2 opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {icon && <span className="text-mk-blue">{icon}</span>}
      <span>{name}</span>
    </div>
  );
};

export default SkillTag;
