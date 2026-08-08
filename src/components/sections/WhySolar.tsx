'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TrendingUp, ZapOff, Leaf, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function WhySolar() {
  const t = useTranslations('WhySolar');
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const totalWidth = container.scrollWidth - window.innerWidth + 120;

    const tween = gsap.to(container, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(3, Math.floor(self.progress * 4));
          setActiveIndex(idx);
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -440, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  const icons = [
    <TrendingUp key="1" className="w-8 h-8 text-rose-500" />,
    <ZapOff key="2" className="w-8 h-8 text-amber-500" />,
    <Leaf key="3" className="w-8 h-8 text-emerald-500" />,
    <ShieldCheck key="4" className="w-8 h-8 text-accent-solar" />,
  ];

  const cardsData = [
    {
      num: t('cards.0.num'),
      title: t('cards.0.title'),
      desc: t('cards.0.desc'),
      highlight: t('cards.0.highlight'),
    },
    {
      num: t('cards.1.num'),
      title: t('cards.1.title'),
      desc: t('cards.1.desc'),
      highlight: t('cards.1.highlight'),
    },
    {
      num: t('cards.2.num'),
      title: t('cards.2.title'),
      desc: t('cards.2.desc'),
      highlight: t('cards.2.highlight'),
    },
    {
      num: t('cards.3.num'),
      title: t('cards.3.title'),
      desc: t('cards.3.desc'),
      highlight: t('cards.3.highlight'),
    },
  ];

  return (
    <section
      id="why-solar"
      ref={sectionRef}
      className="relative min-h-screen bg-bg-primary overflow-hidden py-24 flex flex-col justify-center border-t border-line/60"
    >
      {/* Header & Controls */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-bold">
            {t('tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-text-primary text-base font-semibold max-w-md hidden sm:block">
            {t('subtitle')}
          </p>

          {/* Manual Arrow Slider Buttons for Mobile & Desktop */}
          <div className="flex items-center gap-2 border-l border-line/80 pl-4">
            <button
              onClick={scrollLeft}
              aria-label="Scroll cards left"
              className="p-3 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll cards right"
              className="p-3 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Track Horizontal Container */}
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row gap-8 px-6 max-w-7xl mx-auto lg:max-w-none lg:w-max overflow-x-auto lg:overflow-visible no-scrollbar scroll-smooth"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`w-full lg:w-[440px] shrink-0 rounded-3xl p-8 bg-bg-secondary border transition-all duration-500 flex flex-col justify-between shadow-xl ${
              activeIndex === index
                ? 'border-emerald-500 ring-4 ring-emerald-500/20 scale-[1.01] shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                : 'border-line hover:border-emerald-500/50'
            } ${
              index === 3
                ? 'bg-gradient-to-br from-emerald-500/20 via-bg-secondary to-bg-primary border-emerald-500'
                : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-4xl font-black text-emerald-500 dark:text-emerald-400">
                  {card.num}
                </span>
                <div className="p-3.5 rounded-2xl bg-bg-primary border border-emerald-500/30 shadow-sm">
                  {icons[index]}
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {card.title}
              </h3>

              <p className="text-text-primary text-base font-medium leading-relaxed mb-6">
                {card.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-line/60 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                {card.highlight}
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {cardsData.map((_, i) => (
          <div
            key={i}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-10 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                : 'w-2.5 bg-line hover:bg-emerald-500/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
