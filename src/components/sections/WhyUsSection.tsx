'use client';

import React, { useState } from 'react';
import {
  Sun,
  Building2,
  Truck,
  Cpu,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles,
  Landmark,
  Clock,
  Wrench,
  Users,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export function WhyUsSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 'group-company',
      badge: 'Parent Group Backing',
      title: 'Backed by Established Group Company',
      desc: 'PAA Solar operates under a premier group company enterprise, ensuring strong financial stability, corporate governance, and nationwide execution strength.',
      icon: <Building2 className="w-6 h-6 text-sky-400" />,
      accentColor: 'text-sky-400',
      borderColor: 'border-sky-400/40',
      bgGlow: 'from-sky-500/20 via-sky-500/5 to-transparent',
      dotBg: 'bg-sky-400',
      bullets: ['Group Enterprise Backing', 'Nationwide Footprint', 'Financial Stability'],
    },
    {
      id: 'experienced-team',
      badge: '25+ Yrs Expertise',
      title: '25+ Years Veteran Experience',
      desc: 'Helmed by an elite leadership team and solar engineers with over 25 years of hands-on technical experience executing high-yield renewable projects.',
      icon: <Award className="w-6 h-6 text-amber-400" />,
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-400/40',
      bgGlow: 'from-amber-500/20 via-amber-500/5 to-transparent',
      dotBg: 'bg-amber-400',
      bullets: ['25+ Years Experience', 'Veteran Solar Engineers', 'Proven Field Mastery'],
    },
    {
      id: 'tier-1-solutions',
      badge: 'Tier-1 Only',
      title: 'Tier-1 Solutions & Technology Only',
      desc: 'We exclusively deliver solutions engineered with Tier-1 certified equipment, panels, inverters, and hardware designed to meet strict corporate standards.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-400/40',
      bgGlow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      dotBg: 'bg-emerald-400',
      bullets: ['Tier-1 Solar Tech', 'Certified Hardware', 'Zero Quality Compromise'],
    },
    {
      id: 'bank-loan-facility',
      badge: 'Financing Support',
      title: 'Bank Loan Facility Provided',
      desc: 'Comprehensive bank loan facilitation and EMI financing assistance to support seamless project funding and fast-track solar adoption.',
      icon: <Landmark className="w-6 h-6 text-indigo-400" />,
      accentColor: 'text-indigo-400',
      borderColor: 'border-indigo-400/40',
      bgGlow: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
      dotBg: 'bg-indigo-400',
      bullets: ['Bank Loan Assistance', 'Flexible Financing', 'Hassle-Free Processing'],
    },
    {
      id: 'high-scale-design',
      badge: 'High-Scale EPC',
      title: 'High-Scale Design & Precision Engineering',
      desc: 'Advanced 3D structural modeling, high-yield layout engineering, and heavy-duty product selection tailored for utility, commercial, and industrial loads.',
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-400/40',
      bgGlow: 'from-purple-500/20 via-purple-500/5 to-transparent',
      dotBg: 'bg-purple-400',
      bullets: ['High-Scale Architecture', 'Precision Engineering', 'Heavy-Duty Products'],
    },
    {
      id: 'service-commitment',
      badge: '5-Year Service',
      title: '5-Year Long Service Commitment',
      desc: 'Unwavering 5-year post-commissioning service commitment with regular O&M maintenance, active system monitoring, and quick-turnaround support.',
      icon: <Clock className="w-6 h-6 text-rose-400" />,
      accentColor: 'text-rose-400',
      borderColor: 'border-rose-400/40',
      bgGlow: 'from-rose-500/20 via-rose-500/5 to-transparent',
      dotBg: 'bg-rose-400',
      bullets: ['5-Year Service Guarantee', 'Proactive O&M Checks', 'Dedicated Technical Care'],
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-bg-secondary/40 border-y border-line relative overflow-hidden">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-solar/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>WHY PAA SOLAR</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            Why Choose Paa Solar?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 leading-relaxed font-medium">
            India’s trusted turnkey solar EPC & distribution partner delivering high-yield TOPCon technology, 30+ year asset durability, and complete PM SGY kit fulfillment.
          </p>
        </div>

        {/* Circular Visual Representation Container */}
        <div className="relative mb-20">
          
          {/* DESKTOP CIRCULAR RADIAL DIAGRAM (Visible on lg and above) */}
          <div className="hidden lg:block relative w-full h-[780px] max-w-6xl mx-auto">
            {/* SVG Connecting Orbit Lines & Beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 900 700">
              {/* Outer Orbit Circle */}
              <circle
                cx="450"
                cy="350"
                r="310"
                fill="none"
                stroke="currentColor"
                strokeDasharray="8 8"
                className="text-accent-solar/35 animate-[spin_60s_linear_infinite]"
              />
              {/* Middle Orbit Glow Circle */}
              <circle
                cx="450"
                cy="350"
                r="230"
                fill="none"
                stroke="currentColor"
                strokeDasharray="5 5"
                className="text-amber-500/30"
              />
              {/* Inner Pulsing Ring (Enlarged around Central Core) */}
              <circle
                cx="450"
                cy="350"
                r="175"
                fill="none"
                stroke="currentColor"
                className="text-accent-solar/50 animate-ping"
                style={{ animationDuration: '3.5s' }}
              />

              {/* Radial Spokes to 6 Positions */}
              {[
                { x: 190, y: 110 }, // Pos 0: Top Left
                { x: 710, y: 110 }, // Pos 1: Top Right
                { x: 770, y: 350 }, // Pos 2: Mid Right
                { x: 710, y: 590 }, // Pos 3: Bottom Right
                { x: 190, y: 590 }, // Pos 4: Bottom Left
                { x: 130, y: 350 }, // Pos 5: Mid Left
              ].map((pos, idx) => (
                <g key={idx}>
                  <line
                    x1="450"
                    y1="350"
                    x2={pos.x}
                    y2={pos.y}
                    stroke={activeFeature === idx ? 'currentColor' : 'currentColor'}
                    strokeWidth={activeFeature === idx ? '3.5' : '1'}
                    className={activeFeature === idx ? 'text-accent-solar transition-colors duration-300' : 'text-line/60'}
                  />
                  {activeFeature === idx && (
                    <circle
                      cx={(450 + pos.x) / 2}
                      cy={(350 + pos.y) / 2}
                      r="6"
                      className="fill-accent-solar animate-pulse"
                    />
                  )}
                </g>
              ))}
            </svg>

            {/* CENTRAL ENLARGED Glowing Solar Core Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
              <div className="relative group cursor-pointer">
                {/* Orbital Outer Pulsing Glow */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-amber-500/35 via-accent-solar/45 to-yellow-500/35 blur-2xl animate-pulse" />
                
                {/* Outer Rotating Dashed Ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-accent-solar/50 animate-[spin_25s_linear_infinite]" />

                {/* Big Core Sphere (Enlarged w-64 h-64 / 256px) */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-4 border-accent-solar shadow-2xl flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-accent-solar/20 text-accent-solar mb-2 shadow-inner border border-accent-solar/40">
                    <Sun className="w-14 h-14 animate-[spin_20s_linear_infinite]" />
                  </div>
                  <span className="font-serif text-xl font-bold text-text-primary tracking-wide leading-tight">
                    PAA SOLAR
                  </span>
                  <span className="text-xs font-mono font-bold text-accent-solar uppercase tracking-widest mt-1">
                    CORE SYSTEM HUB
                  </span>
                  <span className="text-[10px] text-text-secondary font-semibold mt-1 px-3 py-0.5 rounded-full bg-bg-primary/80 border border-line">
                    24/7 Active Telemetry
                  </span>
                </div>
              </div>
            </div>

            {/* SURROUNDING CIRCULAR FEATURE NODES (6 Positioned Cards) */}
            {[
              // 0: Top Left
              { posClass: 'top-[20px] left-[2%]', idx: 0 },
              // 1: Top Right
              { posClass: 'top-[20px] right-[2%]', idx: 1 },
              // 2: Mid Right
              { posClass: 'top-[290px] -right-[4%]', idx: 2 },
              // 3: Bottom Right
              { posClass: 'bottom-[20px] right-[2%]', idx: 3 },
              // 4: Bottom Left
              { posClass: 'bottom-[20px] left-[2%]', idx: 4 },
              // 5: Mid Left
              { posClass: 'top-[290px] -left-[4%]', idx: 5 },
            ].map(({ posClass, idx }) => {
              const item = features[idx];
              const isActive = activeFeature === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveFeature(idx)}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={`absolute ${posClass} w-[290px] z-20 cursor-pointer transition-all duration-300`}
                >
                  <div
                    className={`rounded-2xl p-5 bg-bg-secondary/90 backdrop-blur-md border ${
                      isActive ? 'border-accent-solar shadow-2xl scale-105 bg-bg-secondary' : 'border-line/80 hover:border-accent-solar/50 shadow-lg'
                    } transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Subtle Active Glow Background */}
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGlow} opacity-100 transition-opacity pointer-events-none`} />
                    )}

                    <div className="relative z-10 flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl bg-bg-primary border border-line shrink-0 ${isActive ? 'scale-110' : ''} transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="space-y-1 min-w-0">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-bg-primary border border-line/60 ${item.accentColor}`}>
                          {item.badge}
                        </span>
                        <h3 className="font-serif text-sm font-bold text-text-primary truncate">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="relative z-10 text-text-secondary text-xs mt-2.5 line-clamp-2 leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    {/* Active Indicator Dots */}
                    <div className="relative z-10 flex items-center justify-between pt-2.5 mt-2.5 border-t border-line/60">
                      <span className="text-[10px] font-mono text-text-secondary">Feature 0{idx + 1}</span>
                      <div className={`w-2 h-2 rounded-full ${isActive ? item.dotBg + ' animate-ping' : 'bg-line'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE & TABLET RESPONSIVE CIRCULAR LAYOUT (Visible on screens < lg) */}
          <div className="block lg:hidden space-y-6">
            {/* Center Orbital Graphic Badge for Mobile */}
            <div className="flex flex-col items-center justify-center mb-8 text-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-accent-solar/30 blur-lg animate-pulse" />
                <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-4 border-accent-solar shadow-2xl flex flex-col items-center justify-center p-4">
                  <Sun className="w-10 h-10 text-accent-solar animate-[spin_15s_linear_infinite] mb-1" />
                  <span className="font-serif text-base font-bold text-text-primary">PAA SOLAR</span>
                  <span className="text-xs font-mono font-semibold text-accent-solar uppercase">CORE SYSTEM</span>
                </div>
              </div>
            </div>

            {/* Mobile Feature Cards Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 bg-bg-secondary/90 border border-line/80 hover:border-accent-solar transition-all shadow-lg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-bg-primary border border-line">
                      {item.icon}
                    </div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-bg-primary border border-line ${item.accentColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-text-primary pt-1">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-line/60 flex flex-wrap gap-2">
                    {item.bullets.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary bg-bg-primary/80 px-2.5 py-1 rounded-lg border border-line/60"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${item.accentColor} shrink-0`} />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVE FEATURE HIGHLIGHT BANNER (Desktop view bottom detail card) */}
          <div className="hidden lg:block mt-6 p-6 rounded-2xl bg-bg-primary border border-accent-solar/40 shadow-xl max-w-4xl mx-auto transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-bg-secondary border border-line shadow-inner">
                  {features[activeFeature].icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-accent-solar uppercase tracking-wider">
                      Selected Feature 0{activeFeature + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-solar animate-ping" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-text-primary mt-0.5">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-text-secondary text-sm font-medium mt-1">
                    {features[activeFeature].desc}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 shrink-0">
                {features[activeFeature].bullets.map((bullet, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-text-primary bg-bg-secondary px-3 py-1.5 rounded-xl border border-line/80"
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${features[activeFeature].accentColor} shrink-0`} />
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-primary border border-line shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-2xl font-bold text-text-primary">
              Ready to Partner with Paa Solar?
            </h4>
            <p className="text-text-secondary text-sm font-medium">
              Get in touch with our solar EPC engineers or district distribution team today.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Talk to Solar Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

