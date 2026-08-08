'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Compass, Cpu, Wrench, Activity, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HowItWorks() {
  const t = useTranslations('HowItWorks');
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: t('steps.0.step'),
      name: t('steps.0.name'),
      desc: t('steps.0.desc'),
      icon: <Compass className="w-6 h-6 text-accent-solar" />,
    },
    {
      num: t('steps.1.step'),
      name: t('steps.1.name'),
      desc: t('steps.1.desc'),
      icon: <Cpu className="w-6 h-6 text-accent-gold" />,
    },
    {
      num: t('steps.2.step'),
      name: t('steps.2.name'),
      desc: t('steps.2.desc'),
      icon: <Wrench className="w-6 h-6 text-accent-sky" />,
    },
    {
      num: t('steps.3.step'),
      name: t('steps.3.name'),
      desc: t('steps.3.desc'),
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.step-card');
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger && (st.vars.trigger as HTMLElement).classList?.contains('step-card')) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-bg-secondary/40 border-t border-line">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-base max-w-xl mt-3">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* Left Pinned Sticky Morphing Illustration */}
          <div className="lg:col-span-5 lg:sticky top-32 rounded-3xl p-8 bg-bg-primary border border-line shadow-xl flex flex-col justify-between aspect-square overflow-hidden">
            {/* Top Indicator */}
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
              <span>STEP {steps[activeStep].num} / 04</span>
              <span className="text-accent-solar font-semibold uppercase tracking-wider">
                {steps[activeStep].name}
              </span>
            </div>

            {/* Dynamic Interactive Morphing Visual Graphic */}
            <div className="my-auto relative flex items-center justify-center h-48 w-full">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-solar/30 animate-spin-slow" />

              {/* Step Visual Morphing Stages */}
              {activeStep === 0 && (
                <div className="flex flex-col items-center gap-3 animate-fade-in">
                  <div className="w-20 h-20 rounded-2xl bg-accent-solar/10 border border-accent-solar flex items-center justify-center">
                    <Compass className="w-10 h-10 text-accent-solar animate-pulse" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary">LiDAR 3D Roof Telemetry</span>
                </div>
              )}

              {activeStep === 1 && (
                <div className="flex flex-col items-center gap-3 animate-fade-in">
                  <div className="w-20 h-20 rounded-2xl bg-accent-gold/10 border border-accent-gold flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-accent-gold animate-bounce" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary">Topology & Microgrid CAD</span>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col items-center gap-3 animate-fade-in">
                  <div className="w-20 h-20 rounded-2xl bg-accent-sky/10 border border-accent-sky flex items-center justify-center">
                    <Wrench className="w-10 h-10 text-accent-sky" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary">Certified Master Installation</span>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col items-center gap-3 animate-fade-in">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500 flex items-center justify-center">
                    <Activity className="w-10 h-10 text-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary">Real-Time AI Dispatch</span>
                </div>
              )}
            </div>

            {/* Active Step Progress Dots */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-line/60">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeStep ? 'w-8 bg-accent-solar' : 'w-2 bg-line'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Stepper Panels */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card rounded-3xl p-8 transition-all duration-500 border ${
                  activeStep === index
                    ? 'bg-bg-primary border-accent-solar shadow-lg scale-[1.02]'
                    : 'bg-bg-primary border-line hover:border-accent-solar/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-4xl font-bold text-accent-solar">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-bg-secondary border border-line">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  {step.name}
                </h3>

                <p className="text-text-primary text-base md:text-lg font-medium leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-accent-solar">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Quality Assurance Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
