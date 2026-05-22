import React from 'react';

export default function CloudParticles() {
  // Generate configuration for floating particles
  const particles = [
    { size: 'w-72 h-72', color: 'bg-blue-500/10 dark:bg-blue-600/10', duration: '18s', delay: '0s', left: '10%', top: '15%' },
    { size: 'w-96 h-96', color: 'bg-cyan-500/10 dark:bg-cyan-500/5', duration: '25s', delay: '-5s', right: '15%', top: '10%' },
    { size: 'w-80 h-80', color: 'bg-indigo-500/10 dark:bg-indigo-600/10', duration: '22s', delay: '-10s', left: '20%', bottom: '20%' },
    { size: 'w-64 h-64', color: 'bg-sky-400/10 dark:bg-sky-500/10', duration: '15s', delay: '-3s', right: '25%', bottom: '15%' },
    { size: 'w-48 h-48', color: 'bg-blue-400/5 dark:bg-blue-500/5', duration: '20s', delay: '-7s', left: '45%', top: '40%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
      
      {/* Floating Glowing Orbs */}
      {particles.map((p, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full filter blur-[80px] animate-float-slow ${p.size} ${p.color}`}
          style={{
            left: p.left,
            right: p.right,
            top: p.top,
            bottom: p.bottom,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-t from-blue-500/5 dark:from-blue-600/5 to-transparent filter blur-3xl rounded-full" />
    </div>
  );
}
