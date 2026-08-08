'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ImpactStats() {
  const t = useTranslations('ImpactStats');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [counts, setCounts] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const targets = { s1: 0, s2: 0, s3: 0, s4: 0 };
        gsap.to(targets, {
          s1: 520,
          s2: 420,
          s3: 18500,
          s4: 24,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            setCounts({
              stat1: Math.round(targets.s1),
              stat2: Math.round(targets.s2),
              stat3: Math.round(targets.s3),
              stat4: Math.round(targets.s4),
            });
          },
        });
      },
    });

    return () => trigger.kill();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-bg-secondary border-y border-line relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('title')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mt-2">
            {t('subtitle')}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-primary border border-line/60 hover:border-accent-solar/40 transition-colors duration-300 shadow-sm">
            <span className="font-serif text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
              {counts.stat1}
              <span className="text-2xl md:text-3xl text-accent-solar ml-1">{t('stat1.unit')}</span>
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-primary mt-3">
              {t('stat1.label')}
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-primary border border-line/60 hover:border-accent-solar/40 transition-colors duration-300 shadow-sm">
            <span className="font-serif text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
              {counts.stat2}
              <span className="text-2xl md:text-3xl text-accent-gold ml-1">{t('stat2.unit')}</span>
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-primary mt-3">
              {t('stat2.label')}
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-primary border border-line/60 hover:border-accent-solar/40 transition-colors duration-300 shadow-sm">
            <span className="font-serif text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
              {counts.stat3.toLocaleString()}
              <span className="text-2xl md:text-3xl text-accent-solar ml-1">{t('stat3.unit')}</span>
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-primary mt-3">
              {t('stat3.label')}
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-primary border border-line/60 hover:border-accent-solar/40 transition-colors duration-300 shadow-sm">
            <span className="font-serif text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
              {counts.stat4}
              <span className="text-2xl md:text-3xl text-accent-sky ml-1">{t('stat4.unit')}</span>
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-primary mt-3">
              {t('stat4.label')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
