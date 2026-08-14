'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Megaphone,
  Wrench,
  Headphones,
  Monitor,
  PackageCheck,
  Award,
  Globe2,
  CheckCircle2,
} from 'lucide-react';

export function ExportPartnerBenefits() {
  const [activeNode, setActiveNode] = useState(0);

  const benefits = [
    {
      id: 'exclusive-distro',
      title: 'Exclusive Distribution Rights',
      shortTitle: 'Exclusive Distro',
      badge: 'Territorial Protection',
      tagline: 'Regional Exclusivity',
      desc: 'Exclusive territorial distribution rights for your country/region, ensuring zero internal brand competition and protected margins.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/40',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      id: 'small-investment',
      title: 'Low Capital Investment',
      shortTitle: 'Low Investment',
      badge: 'Flexible MOQs',
      tagline: 'Minimal Barrier',
      desc: 'Low initial capital commitment with flexible order MOQs engineered to help entrepreneurs scale rapidly without locked inventory.',
      icon: <TrendingUp className="w-5 h-5 text-accent-sky" />,
      color: 'from-sky-500/20 via-sky-500/10 to-transparent',
      borderColor: 'border-sky-500/40',
      textColor: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
    },
    {
      id: 'operate-as-paa',
      title: 'Operate as PAA SOLAR',
      shortTitle: 'Operate as Paa',
      badge: 'Brand Identity',
      tagline: 'Global Goodwill',
      desc: 'Full operational backing to run your distribution ecosystem as an official PAA SOLAR global partner, leveraging our global brand trust.',
      icon: <Award className="w-5 h-5 text-accent-solar" />,
      color: 'from-amber-500/20 via-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
    {
      id: 'marketing-support',
      title: 'Marketing Support (2% Credit)',
      shortTitle: '2% Marketing',
      badge: '2% Co-Op Fund',
      tagline: 'ATL & BTL Coverage',
      desc: '2% of total annual purchase value credited back directly for local marketing, tradeshows, billboards, and digital ad campaigns.',
      icon: <Megaphone className="w-5 h-5 text-indigo-400" />,
      color: 'from-indigo-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-indigo-500/40',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
    },
    {
      id: 'service-support',
      title: 'Service Support (2% Fund)',
      shortTitle: '2% Service',
      badge: '2% RMA Allocation',
      tagline: 'Spare Parts & Care',
      desc: 'Dedicated 2% service fund allocated on every purchase for local spare parts stock, fast-track RMA replacements, and technical care.',
      icon: <Wrench className="w-5 h-5 text-rose-400" />,
      color: 'from-rose-500/20 via-rose-500/10 to-transparent',
      borderColor: 'border-rose-500/40',
      textColor: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
    },
    {
      id: 'lead-support',
      title: 'Global Lead Routing',
      shortTitle: 'Lead Routing',
      badge: 'Direct Buyer Leads',
      tagline: 'High-Intent Pipeline',
      desc: 'Direct dispatch of incoming international buyer inquiries, EPC RFQs, and commercial solar leads for your territory from PAA SOLAR head office.',
      icon: <Headphones className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-500/40',
      textColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
    {
      id: 'it-support',
      title: 'Full IT & Telemetry Support',
      shortTitle: 'IT & Software',
      badge: 'Cloud CRM & IoT',
      tagline: 'Digital Infrastructure',
      desc: 'Free access to PAA SOLAR cloud telemetry monitoring apps, technical CAD design tools, digital sales kits, and CRM management portal.',
      icon: <Monitor className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 via-purple-500/10 to-transparent',
      borderColor: 'border-purple-500/40',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      id: 'indian-sourcing',
      title: 'Indian Product / Brand Sourcing',
      shortTitle: 'Indian Sourcing',
      badge: 'Complete Sourcing',
      tagline: 'Custom Procurement',
      desc: 'Complete procurement & export facilitation for any specific Indian solar, electrical, or industrial product/brand requirement outside our standard catalog.',
      icon: <PackageCheck className="w-5 h-5 text-teal-400" />,
      color: 'from-teal-500/20 via-teal-500/10 to-transparent',
      borderColor: 'border-teal-500/40',
      textColor: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
    },
  ];

  const current = benefits[activeNode];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-sky/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-solar/10 border border-accent-solar/30 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>PARTNER ADVANTAGE & BENEFITS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Why Partner With PAA SOLAR?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-medium">
            Join our global export network as an authorized distributor or channel partner with unmatched 360-degree commercial, technical, and operational backing.
          </p>
        </div>

        {/* Circular Orbital Layout (Desktop / Large Tablet Viewport) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-[620px] my-8">
          {/* Outer Ambient Orbit Ring */}
          <div className="absolute inset-0 m-auto w-[520px] h-[520px] rounded-full border border-line/80 bg-bg-secondary/20 shadow-2xl backdrop-blur-3xl animate-spin-slow pointer-events-none" />
          
          {/* Secondary Concentric Glow Circle */}
          <div className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border border-dashed border-accent-sky/30 pointer-events-none" />

          {/* Glowing Center Core */}
          <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-bg-primary border-2 border-accent-solar/40 shadow-2xl p-6 flex flex-col items-center justify-center text-center z-20 transition-all duration-500">
            <div className="p-3.5 rounded-2xl bg-accent-solar/10 border border-accent-solar/30 text-accent-solar mb-2 shadow-inner">
              <Globe2 className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-solar">GLOBAL NETWORK</span>
            <h3 className="font-serif text-lg font-bold text-text-primary mt-0.5">
              Paa Partner Perks
            </h3>
            <p className="text-[11px] text-text-secondary mt-1 font-medium leading-tight">
              Click nodes to explore partner benefits
            </p>
          </div>

          {/* 8 Orbiting Benefit Nodes */}
          {benefits.map((node, index) => {
            const angle = (index * 360) / benefits.length;
            const radius = 230; // Radius in px
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            const isActive = activeNode === index;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(index)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  top: 'calc(50% - 32px)',
                  left: 'calc(50% - 32px)',
                }}
                className={`absolute w-16 h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 z-30 group hover:scale-110 ${
                  isActive
                    ? `${node.bgColor} border-2 ${node.borderColor} shadow-xl scale-125 z-40`
                    : 'bg-bg-primary/90 border border-line hover:border-accent-solar/50 shadow-md'
                }`}
              >
                <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                  {node.icon}
                </div>

                {/* Micro Label Pill below node */}
                <div
                  className={`absolute -bottom-7 whitespace-nowrap text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                    isActive
                      ? `${node.bgColor} ${node.borderColor} ${node.textColor} shadow-md`
                      : 'bg-bg-primary text-text-secondary border-line group-hover:border-accent-solar/40'
                  }`}
                >
                  {node.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Benefit Active Spotlight Card (Desktop) */}
        <div className="hidden lg:block max-w-3xl mx-auto">
          <div className={`p-8 rounded-3xl bg-gradient-to-br ${current.color} bg-bg-secondary/90 border-2 ${current.borderColor} shadow-2xl transition-all duration-500`}>
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${current.bgColor} border ${current.borderColor} ${current.textColor}`}>
                    {current.badge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-text-secondary">
                    Benefit 0{activeNode + 1} of 08
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary">
                  {current.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed font-medium">
                  {current.desc}
                </p>
              </div>

              <div className={`p-4 rounded-2xl ${current.bgColor} border ${current.borderColor} shrink-0`}>
                {React.cloneElement(current.icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10' })}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Grid for Mobile & Tablet Viewports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.id}
              className={`p-6 rounded-3xl bg-bg-secondary/80 border ${benefit.borderColor} shadow-lg space-y-4 hover:-translate-y-1 transition-all`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl ${benefit.bgColor} ${benefit.textColor}`}>
                  {benefit.icon}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${benefit.bgColor} ${benefit.textColor} border ${benefit.borderColor}`}>
                  {benefit.badge}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-text-primary">
                {benefit.title}
              </h3>

              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                {benefit.desc}
              </p>

              <div className="pt-3 border-t border-line/60 flex items-center gap-2 text-xs font-mono font-semibold text-accent-solar">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Paa Partner Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
