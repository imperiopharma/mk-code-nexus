
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  typingAnimation?: boolean;
}

const AnimatedTitle = ({ text, className, typingAnimation = false }: AnimatedTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!typingAnimation || !titleRef.current) return;
    
    const title = titleRef.current;
    title.style.width = '0';
    
    setTimeout(() => {
      title.style.width = '100%';
    }, 500);
  }, [typingAnimation]);

  return (
    <h1 
      ref={titleRef}
      className={cn(
        "font-orbitron font-bold text-white",
        typingAnimation ? "typing-container overflow-hidden whitespace-nowrap animate-typing" : "",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default AnimatedTitle;
