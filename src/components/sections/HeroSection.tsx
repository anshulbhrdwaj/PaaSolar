'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowDown, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const t = useTranslations('Hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title lines animation
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

      // Fade in subelements
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

      // Parallax panel scroll effect
      if (panelRef.current) {
        gsap.to(panelRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-bg-primary"
    >
      {/* Background Sunrise Radial Glow Fingerprint */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none rounded-full blur-3xl opacity-60 dark:opacity-40 transition-transform duration-700 ease-out"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, var(--accent-solar) 0%, var(--accent-gold) 35%, transparent 70%)',
          transform: `translate3d(calc(-50% + ${mousePos.x * 40}px), ${mousePos.y * 40}px, 0)`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Headline Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Badge */}
          <div className="hero-fade inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>

          {/* Large Kinetic Title */}
          <h1
            ref={titleRef}
            className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-text-primary leading-[1.05]"
          >
            <span className="block hero-line">{t('headlineMain')}</span>
          </h1>

          {/* Subheading / Description */}
          <p className="hero-fade text-lg md:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="hero-fade flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#get-a-quote"
              data-cursor="explore"
              className="px-8 py-4 rounded-full bg-accent-solar text-white text-sm font-bold tracking-wider uppercase shadow-xl hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t('primaryCta')}
            </a>
            <a
              href="#telemetry"
              className="px-8 py-4 rounded-full border border-line hover:border-accent-solar/40 bg-bg-secondary/40 text-text-primary text-sm font-bold tracking-wider uppercase transition-all duration-300"
            >
              {t('secondaryCta')}
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="hero-fade flex items-center gap-6 pt-6 text-xs text-text-secondary border-t border-line/60 w-full max-w-lg">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-solar" />
              <span>25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-gold" />
              <span>Sub-10ms Battery Switch</span>
            </div>
          </div>
        </div>

        {/* Right 3D Interactive Solar Panel Graphic Column */}
        <div
          ref={panelRef}
          className="lg:col-span-5 relative flex justify-center items-center"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Glassmorphic Panel Wrapper */}
          <div className="relative w-full max-w-md aspect-square rounded-3xl p-8 bg-gradient-to-br from-bg-secondary/80 to-bg-primary/90 border border-line shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden group">
            {/* Ambient Corner Flare */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-accent-solar/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />

            {/* Top Bar Status */}
            <div className="flex items-center justify-between text-xs font-mono tracking-widest text-text-secondary z-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                GRID SYNCHRONIZED
              </span>
              <span className="text-accent-solar font-bold">99.8% EFFICIENCY</span>
            </div>

            {/* Center Solar Cell Array Art */}
            <div className="my-auto py-6 grid grid-cols-3 gap-3 z-10">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-gradient-to-br from-accent-sky/20 via-accent-solar/10 to-bg-primary border border-line/80 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-accent-solar/50 transition-colors duration-500"
                >
                  <div className="w-full h-full rounded-lg border border-accent-solar/20 bg-accent-solar/5 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Panel Specs */}
            <div className="flex items-center justify-between z-10 pt-4 border-t border-line/60">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-text-secondary">
                  Peak Output
                </p>
                <p className="text-2xl font-serif font-bold text-text-primary">14.8 kW</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-mono tracking-wider text-text-secondary">
                  Carbon Reduction
                </p>
                <p className="text-lg font-serif font-semibold text-accent-solar">12.4 Tons/Yr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center justify-between pt-8 text-xs font-medium text-text-secondary border-t border-line/40">
        <span className="tracking-widest uppercase text-[11px]">{t('scrollCue')}</span>
        <div className="flex items-center gap-2 animate-bounce">
          <ArrowDown className="w-4 h-4 text-accent-solar" />
        </div>
      </div>
    </section>
  );
}
