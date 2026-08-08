'use client';

import React, { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsMarquee() {
  const t = useTranslations('Testimonials');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: t('items.0.quote'),
      author: t('items.0.author'),
      role: t('items.0.role'),
      location: 'Gujarat, India',
      rating: 5,
    },
    {
      quote: t('items.1.quote'),
      author: t('items.1.author'),
      role: t('items.1.role'),
      location: 'Maharashtra, India',
      rating: 5,
    },
    {
      quote: t('items.2.quote'),
      author: t('items.2.author'),
      role: t('items.2.role'),
      location: 'Rajasthan, India',
      rating: 5,
    },
    {
      quote: t('items.3.quote'),
      author: t('items.3.author'),
      role: t('items.3.role'),
      location: 'Karnataka, India',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-bg-secondary/40 border-t border-line overflow-hidden">
      {/* Header & Slider Nav Controls */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-bold">
            {t('tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-text-primary text-base font-semibold max-w-sm hidden sm:block">
            {t('subtitle')}
          </p>

          {/* Prev / Next Green Controls */}
          <div className="flex items-center gap-2 border-l border-line/80 pl-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Marquee + Manual Scroll Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        {/* Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-4 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="w-[380px] md:w-[440px] shrink-0 rounded-3xl p-8 bg-bg-primary border border-line hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Rating & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
                </div>

                <p className="text-text-primary text-lg md:text-xl font-serif italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-line/60 flex items-center gap-4">
                {/* Avatar Badge */}
                <div className="w-11 h-11 rounded-full bg-emerald-500/15 border border-emerald-500 text-emerald-500 font-mono text-sm font-bold flex items-center justify-center shrink-0 shadow-sm">
                  {item.author.charAt(0)}
                </div>

                <div>
                  <p className="font-bold text-text-primary text-base leading-tight">{item.author}</p>
                  <p className="text-xs font-semibold text-text-primary/80 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
