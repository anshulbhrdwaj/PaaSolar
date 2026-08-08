'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsMarquee() {
  const t = useTranslations('Testimonials');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  // Tripled list for seamless endless looping
  const endlessTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Endless auto-scroll timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = 360;

        // If near end of scroll track, reset to beginning without smooth jump
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
      } else {
        scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-bg-secondary/40 border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Controls */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-bold">
              {t('tag')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mt-2">
              {t('title')}
            </h2>
          </div>

          <div className="flex items-center gap-6 justify-between md:justify-end">
            <p className="text-text-primary/90 text-sm sm:text-base font-medium max-w-sm hidden lg:block">
              {t('subtitle')}
            </p>

            {/* Prev / Next Green Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-3 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Auto-Scrolling Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 snap-x snap-mandatory"
        >
          {endlessTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 snap-start rounded-3xl p-6 sm:p-8 bg-bg-primary border border-line hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/20 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
                </div>

                <p className="text-text-primary text-base sm:text-lg md:text-xl font-serif italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-line/60 flex items-center gap-3.5 mt-auto">
                <div className="w-11 h-11 rounded-full bg-emerald-500/15 border border-emerald-500 text-emerald-500 font-mono text-sm font-bold flex items-center justify-center shrink-0 shadow-sm">
                  {item.author.charAt(0)}
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-text-primary text-base leading-tight truncate">{item.author}</p>
                  <p className="text-xs font-semibold text-text-primary/80 truncate mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
