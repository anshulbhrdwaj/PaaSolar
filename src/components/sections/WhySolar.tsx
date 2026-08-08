'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { TrendingUp, ZapOff, Leaf, ShieldCheck, Sun, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export function WhySolar() {
  const t = useTranslations('WhySolar');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const cardsData = [
    {
      num: t('cards.0.num'),
      title: t('cards.0.title'),
      desc: t('cards.0.desc'),
      highlight: t('cards.0.highlight'),
      icon: <TrendingUp className="w-6 h-6 text-rose-500" />,
      color: 'rose',
      glow: 'shadow-[0_0_25px_rgba(244,63,94,0.35)]',
      border: 'border-rose-500',
      bg: 'bg-rose-500/10',
      text: 'text-rose-500',
      angle: 0, // Top
    },
    {
      num: t('cards.1.num'),
      title: t('cards.1.title'),
      desc: t('cards.1.desc'),
      highlight: t('cards.1.highlight'),
      icon: <ZapOff className="w-6 h-6 text-amber-500" />,
      color: 'amber',
      glow: 'shadow-[0_0_25px_rgba(245,158,11,0.35)]',
      border: 'border-amber-500',
      bg: 'bg-amber-500/10',
      text: 'text-amber-500',
      angle: 90, // Right
    },
    {
      num: t('cards.2.num'),
      title: t('cards.2.title'),
      desc: t('cards.2.desc'),
      highlight: t('cards.2.highlight'),
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      color: 'emerald',
      glow: 'shadow-[0_0_25px_rgba(16,185,129,0.35)]',
      border: 'border-emerald-500',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-500',
      angle: 180, // Bottom
    },
    {
      num: t('cards.3.num'),
      title: t('cards.3.title'),
      desc: t('cards.3.desc'),
      highlight: t('cards.3.highlight'),
      icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
      color: 'sky',
      glow: 'shadow-[0_0_25px_rgba(14,165,233,0.35)]',
      border: 'border-sky-500',
      bg: 'bg-sky-500/10',
      text: 'text-sky-500',
      angle: 270, // Left
    },
  ];

  // Auto-rotation timer for the circular visualization
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoRotating, cardsData.length]);

  const activeCard = cardsData[activeIndex];

  return (
    <section
      id="why-solar"
      className="relative min-h-screen bg-bg-primary overflow-hidden py-20 md:py-24 border-t border-line/60 flex flex-col justify-center"
    >
      {/* Background Decorative Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('tag')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mt-1">
            {t('title')}
          </h2>
          <p className="text-text-primary/80 text-base sm:text-lg font-medium leading-relaxed mt-4">
            {t('subtitle')}
          </p>
        </div>

        {/* Circular Visualization + Active Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left/Center: Interactive Circular Orbital System */}
          <div
            className="lg:col-span-6 flex items-center justify-center relative py-6"
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setIsAutoRotating(true)}
          >
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center">
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-line/60" />
              <div className="absolute inset-16 rounded-full border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]" />

              {/* Central Sun Core */}
              <div className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-amber-400 via-emerald-500 to-sky-500 p-1 shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all duration-500">
                <div className="w-full h-full rounded-full bg-bg-primary/95 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center">
                  <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 animate-pulse mb-1" />
                  <span className="font-mono text-[10px] sm:text-xs font-black uppercase text-emerald-500 tracking-wider">
                    PAA SOLAR
                  </span>
                  <span className="text-[9px] text-text-primary/70 font-semibold truncate max-w-[90%]">
                    ENERGY CORE
                  </span>
                </div>
              </div>

              {/* Orbiting Satellite Nodes (0°, 90°, 180°, 270°) */}
              {cardsData.map((node, idx) => {
                const isActive = activeIndex === idx;
                // Calculate position on circumference (radius ~ 140px on mobile, ~190px on desktop)
                const radius = 160; 
                const rad = (node.angle - 90) * (Math.PI / 180); // Offset top
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <button
                    key={node.num}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsAutoRotating(false);
                    }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-30 p-3.5 sm:p-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                      isActive
                        ? `${node.border} ${node.bg} ${node.glow} scale-125 ring-4 ring-emerald-500/20`
                        : 'border-line bg-bg-primary hover:border-emerald-500/50 hover:scale-110'
                    }`}
                    aria-label={`Select ${node.title}`}
                  >
                    {node.icon}
                    
                    {/* Node Label Tooltip */}
                    <span
                      className={`absolute whitespace-nowrap text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all duration-300 ${
                        idx === 0 ? '-top-8' : idx === 1 ? '-right-24' : idx === 2 ? '-bottom-8' : '-left-24'
                      } ${
                        isActive
                          ? 'bg-emerald-500 text-white border-emerald-400 shadow-md scale-105'
                          : 'bg-bg-secondary/90 text-text-primary border-line opacity-80'
                      }`}
                    >
                      {node.num} • {node.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}

              {/* SVG Connecting Ray Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <circle cx="50%" cy="50%" r="35%" fill="none" stroke="currentColor" strokeDasharray="4 4" className="text-emerald-500/30" />
              </svg>
            </div>
          </div>

          {/* Right: Active Detail Card Display */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div
              key={activeIndex}
              className={`rounded-3xl p-8 sm:p-10 bg-bg-secondary/90 border transition-all duration-500 shadow-2xl relative overflow-hidden animate-fade-in ${activeCard.border}`}
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-emerald-500">
                    {activeCard.num}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold">
                    Pillar 0{activeIndex + 1} of 04
                  </span>
                </div>

                <div className={`p-4 rounded-2xl ${activeCard.bg} ${activeCard.border} border shadow-md`}>
                  {activeCard.icon}
                </div>
              </div>

              {/* Card Title & Description */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-tight">
                {activeCard.title}
              </h3>

              <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed mb-8">
                {activeCard.desc}
              </p>

              {/* Highlight Tag & Arrow CTA */}
              <div className="pt-6 border-t border-line/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                    {activeCard.highlight}
                  </span>
                </div>

                {/* Step Switch Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : cardsData.length - 1))}
                    className="p-2.5 rounded-full border border-line hover:border-emerald-500 hover:text-emerald-500 bg-bg-primary transition-all active:scale-95"
                    aria-label="Previous Pillar"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveIndex((prev) => (prev + 1) % cardsData.length)}
                    className="p-2.5 rounded-full border border-line hover:border-emerald-500 hover:text-emerald-500 bg-bg-primary transition-all active:scale-95"
                    aria-label="Next Pillar"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Circular Progress Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mt-6">
              {cardsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsAutoRotating(false);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-10 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : 'w-2.5 bg-line hover:bg-emerald-500/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
