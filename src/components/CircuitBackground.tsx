
import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-50">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
      
      {/* Animated Circuit Elements */}
      <div className="absolute top-[10%] left-[5%] w-1 h-16 circuit-line"></div>
      <div className="absolute top-[10%] left-[5%] w-16 h-1 circuit-line"></div>
      
      <div className="absolute top-[30%] right-[15%] w-1 h-32 circuit-line"></div>
      <div className="absolute top-[30%] right-[15%] w-24 h-1 circuit-line"></div>
      
      <div className="absolute bottom-[20%] left-[25%] w-1 h-24 circuit-line"></div>
      <div className="absolute bottom-[20%] left-[25%] w-32 h-1 circuit-line"></div>
      
      <div className="absolute top-[60%] right-[10%] w-1 h-16 circuit-line"></div>
      
      {/* Circuit Nodes */}
      <div className="absolute top-[10%] left-[5%] w-3 h-3 rounded-full bg-mk-blue/30 animate-pulse"></div>
      <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-mk-blue/30 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[25%] w-3 h-3 rounded-full bg-mk-blue/30 animate-pulse"></div>
      <div className="absolute top-[60%] right-[10%] w-3 h-3 rounded-full bg-mk-blue/30 animate-pulse"></div>
      
      {/* Floating Circles */}
      <div className="absolute top-[15%] left-[40%] w-24 h-24 rounded-full border border-mk-blue/10 animate-circleFloat delay-100"></div>
      <div className="absolute top-[65%] left-[70%] w-32 h-32 rounded-full border border-mk-blue/10 animate-circleFloat delay-300"></div>
      <div className="absolute top-[45%] left-[15%] w-40 h-40 rounded-full border border-mk-blue/10 animate-circleFloat delay-200"></div>
    </div>
  );
};

export default CircuitBackground;
