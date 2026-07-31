'use client';

import React from 'react';

interface SunArcProps {
  className?: string;
  progress?: number; // 0 to 100
  animated?: boolean;
}

export function SunArcAnimation({ className = '', progress = 100, animated = false }: SunArcProps) {
  const dashArray = 300;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-solar)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--accent-gold)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-solar)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-solar)" />
            <stop offset="50%" stopColor="var(--accent-gold)" />
            <stop offset="100%" stopColor="var(--accent-solar-soft)" />
          </linearGradient>
        </defs>

        {/* Ambient Glow Center */}
        <circle
          cx="60"
          cy="60"
          r="28"
          fill="url(#sunGlowGrad)"
          className={animated ? 'animate-solar-pulse' : ''}
        />

        {/* Inner Solid Sun Core */}
        <circle cx="60" cy="60" r="16" fill="var(--accent-solar)" />

        {/* Outer Sun Rays / Arc Path */}
        <path
          d="M 20 60 A 40 40 0 1 1 100 60 A 40 40 0 1 1 20 60"
          stroke="url(#arcStrokeGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          className="transition-all duration-300 ease-out"
        />

        {/* Ray Dots */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
          const rad = (angle * Math.PI) / 180;
          const x = 60 + 52 * Math.cos(rad);
          const y = 60 + 52 * Math.sin(rad);
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill="var(--accent-gold)"
              className="opacity-70 transition-opacity duration-300 hover:opacity-100"
            />
          );
        })}
      </svg>
    </div>
  );
}
