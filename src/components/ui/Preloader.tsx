'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PaaSolarLogo, PaaSolarEmblemSVG } from './PaaSolarLogo';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!curtainRef.current) return;

    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        if (onComplete) onComplete();
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(obj.val));
      },
    });

    tl.to(curtainRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto flex items-center justify-center overflow-hidden">
      {/* Top Curtain */}
      <div
        ref={curtainRef}
        className="preloader-curtain absolute inset-0 bg-bg-primary flex flex-col items-center justify-center z-10 border-b border-line px-4 py-6 overflow-y-auto max-h-screen"
      >
        <div className="flex flex-col items-center gap-5 sm:gap-7 text-center max-w-lg w-full mx-auto my-auto">
          {/* PAA SOLAR Logo Presentation with Circular Completing Ring */}
          <div className="relative flex flex-col items-center group w-full">
            {/* Ambient solar glow backdrop */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-orange-500/20 rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none" />

            {/* Circular Ring Frame */}
            <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
              {/* Circular Progress Ring SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 160 160">
                <defs>
                  <linearGradient id="preloaderRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#ff5722" />
                  </linearGradient>
                  <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Track Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r="72"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-line/40"
                />

                {/* Completing Animated Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r="72"
                  fill="none"
                  stroke="url(#preloaderRingGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={452.39}
                  strokeDashoffset={452.39 - (progress / 100) * 452.39}
                  filter="url(#ringGlow)"
                  className="transition-all duration-150 ease-out"
                />
              </svg>

              {/* Centered Brand Emblem Vector */}
              <div className="h-16 xs:h-20 sm:h-24 md:h-28 w-auto flex items-center justify-center p-2 relative z-10 filter drop-shadow-xl transition-transform duration-500 hover:scale-105">
                <PaaSolarEmblemSVG className="h-full w-auto max-w-full" />
              </div>
            </div>

            <div className="relative z-10 w-full px-2">
              <PaaSolarLogo size="lg" showImage={false} align="center" showTagline={true} />
            </div>
          </div>

          {/* Progress Bar & Percentage */}
          <div className="flex flex-col items-center gap-2.5 w-52 xs:w-64 sm:w-72 max-w-[85vw] mx-auto">
            <div className="h-1.5 w-full bg-line overflow-hidden rounded-full p-[1px]">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-sky-500 to-accent-solar rounded-full transition-all duration-150 shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between w-full text-xs font-mono text-text-secondary tracking-widest px-0.5">
              <span className="uppercase text-[10px] text-text-secondary/70 font-semibold">Energizing</span>
              <span className="font-bold text-accent-solar font-mono">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
