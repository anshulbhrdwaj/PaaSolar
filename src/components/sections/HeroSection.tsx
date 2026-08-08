'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Sparkles, ShieldCheck, Zap, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import gsap from 'gsap';

const BANNERS = [
  {
    id: 1,
    url: 'https://sunlithenergy.com/wp-content/uploads/2025/10/advantages-of-battery-energy-storage-system-bess.png',
    title: 'Paa Vault BESS Energy Storage',
    caption: 'Sub-10ms Automated Backup & High-Scale Microgrids',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop',
    title: 'Utility-Scale Solar Parks',
    caption: '500+ MW Grid Connected Power Plants Across India',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop',
    title: 'Commercial & Industrial Rooftops',
    caption: '75% Energy Cost Reduction for Manufacturing Plants',
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

      {/* Carousel Controls Bar & Interactive Slider Dock */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-line/80">
        {/* Active Banner Caption & Progress Bar */}
        <div className="flex flex-col gap-2.5 w-full md:w-auto">
          <div className="flex items-center gap-4">
            <span className="font-mono text-emerald-500 dark:text-emerald-400 font-bold text-base md:text-lg">
              0{currentSlide + 1} / 0{BANNERS.length}
            </span>
            <span className="hidden sm:inline text-text-primary/40 font-bold">|</span>
            <span className="text-text-primary font-bold text-sm md:text-base tracking-wide">
              {BANNERS[currentSlide].title}:{' '}
              <span className="text-text-primary/80 font-medium">{BANNERS[currentSlide].caption}</span>
            </span>
          </div>

          {/* Glowing Green Animated Slide Progress Bar */}
          <div className="w-full md:w-80 h-1.5 bg-line/80 rounded-full overflow-hidden p-0.5 border border-emerald-500/20">
            <div
              key={currentSlide}
              className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full transition-all duration-[5000ms] ease-linear shadow-[0_0_12px_rgba(16,185,129,0.6)]"
              style={{ width: isPlaying ? '100%' : '0%' }}
            />
          </div>
        </div>

        {/* Emerald Thumbnail Cards Slider Control */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="hidden lg:flex items-center gap-2.5">
            {BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to banner ${banner.title}`}
                className={`relative px-3.5 py-2 rounded-xl border text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  idx === currentSlide
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] scale-105'
                    : 'border-line bg-bg-secondary/70 text-text-primary hover:border-emerald-500/50 hover:bg-bg-primary'
                }`}
              >
                <span className="font-mono text-[10px] text-emerald-500">0{idx + 1}</span>
                <span className="truncate max-w-[110px]">{banner.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Green Arrow Navigation & Play/Pause */}
          <div className="flex items-center gap-2 border-l border-line pl-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="p-2.5 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevSlide}
              aria-label="Previous Banner"
              className="p-2.5 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Banner"
              className="p-2.5 rounded-full border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-bg-primary backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
