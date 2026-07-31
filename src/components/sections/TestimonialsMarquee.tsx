'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';

export function TestimonialsMarquee() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      quote: t('items.0.quote'),
      author: t('items.0.author'),
      role: t('items.0.role'),
    },
    {
      quote: t('items.1.quote'),
      author: t('items.1.author'),
      role: t('items.1.role'),
    },
    {
      quote: t('items.2.quote'),
      author: t('items.2.author'),
      role: t('items.2.role'),
    },
    {
      quote: t('items.3.quote'),
      author: t('items.3.author'),
      role: t('items.3.role'),
    },
  ];

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-bg-secondary/40 border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
          {t('tag')}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
          {t('title')}
        </h2>
        <p className="text-text-secondary text-base max-w-md mx-auto mt-3">
          {t('subtitle')}
        </p>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-4">
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="w-[360px] md:w-[420px] shrink-0 rounded-3xl p-8 bg-bg-primary border border-line hover:border-accent-solar/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-accent-solar/40 mb-4" />
                <p className="text-text-primary text-base font-serif italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-line/60">
                <p className="font-semibold text-text-primary text-sm">{item.author}</p>
                <p className="text-xs font-mono text-text-secondary mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
