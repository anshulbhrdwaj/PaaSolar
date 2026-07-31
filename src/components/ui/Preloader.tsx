'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SunArcAnimation } from './SunArcAnimation';

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
        className="preloader-curtain absolute inset-0 bg-bg-primary flex flex-col items-center justify-center z-10 border-b border-line"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-28 h-28 relative">
            <SunArcAnimation progress={progress} animated={true} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="font-serif italic text-3xl text-text-primary tracking-wide">
              Paa Solar
            </span>
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-line overflow-hidden rounded-full">
                <div
                  className="h-full bg-accent-solar transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-mono text-text-secondary tracking-widest min-w-[40px]">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
