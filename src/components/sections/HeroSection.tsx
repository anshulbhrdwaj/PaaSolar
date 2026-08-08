'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Sparkles, ShieldCheck, Zap, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import gsap from 'gsap';

const BANNERS = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop',
    title: 'Utility-Scale Solar Parks',
    caption: '500+ MW Grid Connected Power Plants Across India',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop',
    title: 'Commercial & Industrial Rooftops',
    caption: '75% Energy Cost Reduction for Manufacturing Plants',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2000&auto=format&fit=crop',
    title: 'Paa Vault BESS Energy Storage',
    caption: 'Sub-10ms Automated Backup & Peak Shaving Microgrids',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2000&auto=format&fit=crop',
    title: 'N-Type TOPCon Module Tech',
    caption: '22.8% Ultra-High Efficiency Bifacial Solar Hardware',
  },
];

export function HeroSection() {
  const t = useTranslations('Hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play timer for background carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = titleRef.current?.querySelectorAll('.hero-line');
      if (lines) {
        gsap.fromTo(
          lines,
          { y: 60, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      gsap.fromTo(
        '.hero-fade',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.6,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-between overflow-hidden bg-bg-primary text-text-primary"
    >
      {/* Background Image Carousel Slider */}
      <div className="absolute inset-0 z-0">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 z-0 pointer-events-none'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${banner.url})` }}
            />
          </div>
        ))}

        {/* Strong Theme-Aware Gradient Fade Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 dark:from-bg-primary/95 via-bg-primary/60 dark:via-bg-primary/70 to-bg-primary/25 dark:to-bg-primary/40 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 dark:from-bg-primary/80 via-bg-primary/40 dark:via-bg-primary/50 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Subtle Low-Opacity Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 z-20 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full my-auto">
        <div className="max-w-4xl flex flex-col items-start gap-6">
          {/* Badge */}
          <div className="hero-fade inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>

          {/* Large Kinetic Title */}
          <h1
            ref={titleRef}
            className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-text-primary leading-[1.05] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          >
            <span className="block hero-line">{t('headlineMain')}</span>
          </h1>

          {/* Subheading / Description */}
          <p className="hero-fade text-xl md:text-2xl text-text-primary font-medium max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="hero-fade flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/get-a-quote"
              data-cursor="explore"
              className="px-8 py-4 rounded-full bg-accent-solar text-white text-sm font-bold tracking-wider uppercase shadow-xl hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t('primaryCta')}
            </Link>
            <Link
              href="/telemetry"
              className="px-8 py-4 rounded-full border border-line hover:border-accent-solar/50 bg-bg-secondary/70 backdrop-blur-md text-text-primary text-sm font-bold tracking-wider uppercase transition-all duration-300"
            >
              {t('secondaryCta')}
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="hero-fade flex flex-wrap items-center gap-6 pt-6 text-sm md:text-base font-semibold text-text-primary border-t border-line/80 w-full max-w-xl">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-accent-solar shrink-0" />
              <span>25-Year Guaranteed Performance</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-accent-gold shrink-0" />
              <span>Sub-10ms Battery Backup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls Bar & Scroll Cue */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs font-medium border-t border-line/80">
        {/* Active Banner Caption */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-accent-solar font-bold text-base md:text-lg">
            0{currentSlide + 1} / 0{BANNERS.length}
          </span>
          <span className="hidden sm:inline text-text-primary/40 font-bold">|</span>
          <span className="text-text-primary font-bold text-sm md:text-base tracking-wide">
            {BANNERS[currentSlide].title}: <span className="text-text-primary/80 font-medium">{BANNERS[currentSlide].caption}</span>
          </span>
        </div>

        {/* Carousel Slide Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {BANNERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-accent-solar' : 'w-2 bg-text-secondary/30 hover:bg-text-secondary/60'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 border-l border-line pl-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause banner slideshow' : 'Play banner slideshow'}
              className="p-2 rounded-full border border-line hover:border-accent-solar text-text-primary hover:text-accent-solar bg-bg-secondary/70 backdrop-blur-md transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={prevSlide}
              aria-label="Previous Banner"
              className="p-2 rounded-full border border-line hover:border-accent-solar text-text-primary hover:text-accent-solar bg-bg-secondary/70 backdrop-blur-md transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Banner"
              className="p-2 rounded-full border border-line hover:border-accent-solar text-text-primary hover:text-accent-solar bg-bg-secondary/70 backdrop-blur-md transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
