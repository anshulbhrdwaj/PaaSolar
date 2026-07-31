'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { TrendingUp, ZapOff, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function WhySolar() {
  const t = useTranslations('WhySolar');
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

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
      className="relative min-h-screen bg-bg-primary overflow-hidden py-24 flex flex-col justify-center"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
        </div>
        <p className="text-text-secondary text-base max-w-md">
          {t('subtitle')}
        </p>
      </div>

      {/* Track Horizontal Container */}
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row gap-8 px-6 max-w-7xl mx-auto lg:max-w-none lg:w-max"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`w-full lg:w-[420px] rounded-3xl p-8 bg-bg-secondary/70 border border-line flex flex-col justify-between hover:border-accent-solar/50 transition-all duration-300 shadow-lg ${
              index === 3
                ? 'bg-gradient-to-br from-accent-solar/10 via-bg-secondary to-bg-primary border-accent-solar/40 ring-1 ring-accent-solar/20'
                : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-3xl font-bold text-text-secondary/50">
                  {card.num}
                </span>
                <div className="p-3 rounded-2xl bg-bg-primary border border-line">
                  {icons[index]}
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">
                {card.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {card.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-line/60 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-solar">
                {card.highlight}
              </span>
              <ArrowRight className="w-4 h-4 text-text-secondary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
