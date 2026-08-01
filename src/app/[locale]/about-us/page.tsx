'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';
import { ShieldCheck, Sparkles, Building2, Users, Target, Lightbulb } from 'lucide-react';

export default function AboutUsPage() {

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & Chief Executive Officer',
      bio: '20+ years leading renewable infrastructure & utility-scale energy projects across Asia and Europe.',
      avatarBg: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      name: 'Priya Patel',
      role: 'Chief Technology Officer',
      bio: 'Former senior power systems engineer with expertise in TOPCon silicon cell architecture and BESS microgrids.',
      avatarBg: 'bg-accent-sky/10 text-accent-sky',
    },
    {
      name: 'Arjun Mehta',
      role: 'VP of Commercial & Utility Projects',
      bio: 'Specialist in EPC execution for C&I rooftops, solar parks, and PM KUSUM agricultural electrification.',
      avatarBg: 'bg-accent-gold/10 text-accent-gold',
    },
    {
      name: 'Dr. Sunita Kulkarni',
      role: 'Chief Sustainability & Quality Officer',
      bio: 'PhD in Photovoltaic Science, overseeing rigorous 25-year reliability compliance and lifecycle auditing.',
      avatarBg: 'bg-emerald-500/10 text-emerald-500',
    },
  ];

  const milestones = [
    { year: '2016', title: 'Founded in India', desc: 'Started with a vision for clean energy autonomy.' },
    { year: '2019', title: '100+ MW Milestone', desc: 'Expanded into commercial rooftop & industrial projects.' },
    { year: '2022', title: 'Paa Vault Launch', desc: 'Introduced sub-10ms automated battery storage microgrids.' },
    { year: '2025', title: '500+ MW Utility Parks', desc: 'Leading PM Surya Ghar & utility solar installations nationwide.' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--accent-solar-soft)_0%,transparent_60%)] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Paa Solar</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-tight">
              Pioneering Sovereign Clean Energy for Generations.
            </h1>

            <p className="text-lg md:text-xl text-text-secondary font-normal leading-relaxed">
              We design, build, and deploy world-class solar technology and energy storage solutions that give homes, businesses, and communities unconditional power autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Team Photo Section */}
      <section className="py-20 md:py-28 bg-bg-secondary/40 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-7 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-line shadow-2xl bg-bg-primary">
                <Image
                  src="/paa-team.png"
                  alt="Paa Solar Leadership Team"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-bg-primary/80 backdrop-blur-xl border border-line/60 shadow-lg">
                  <p className="text-xs font-mono uppercase tracking-widest text-accent-solar font-bold mb-1">
                    Leadership & Operations Team
                  </p>
                  <p className="text-sm font-semibold text-text-primary">
                    Paa Solar Engineers, Energy Strategists, and Executive Leadership at our 500+ MW Utility Park Site.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-2xl bg-accent-solar text-white shadow-xl max-w-xs z-20">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 shrink-0" />
                  <div>
                    <p className="text-2xl font-bold font-mono">150+</p>
                    <p className="text-xs font-medium opacity-90">Engineers & Solar Specialists Across India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-solar font-bold">
                <Target className="w-4 h-4" />
                <span>Our Mission & Legacy</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                Architects of the Solar Revolution.
              </h2>

              <p className="text-text-secondary text-base leading-relaxed">
                Founded with a conviction that energy independence is a fundamental right, Paa Solar has grown into one of India’s most trusted clean energy developers.
              </p>

              <p className="text-text-secondary text-base leading-relaxed">
                From commercial rooftop EPC to utility-scale megawatt solar parks and industrial BESS microgrids, our multidisciplinary team brings technical precision, transparency, and relentless innovation to every megawatt deployed.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl border border-line bg-bg-primary shadow-sm space-y-1">
                  <p className="text-2xl font-bold font-mono text-accent-solar">500+ MW</p>
                  <p className="text-xs text-text-secondary font-medium">Grid Installed Power</p>
                </div>
                <div className="p-4 rounded-2xl border border-line bg-bg-primary shadow-sm space-y-1">
                  <p className="text-2xl font-bold font-mono text-accent-sky">25 Years</p>
                  <p className="text-xs text-text-secondary font-medium">Guaranteed Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 border-b border-line bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary">
              Our Foundational Pillars
            </h2>
            <p className="text-text-secondary text-base">
              The core principles that drive our engineering design, component selection, and customer operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-line bg-bg-secondary/50 space-y-4 hover:border-accent-solar/50 transition-all shadow-md">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Uncompromising Quality</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We strictly utilize Tier-1 TOPCon solar modules, high-efficiency hybrid inverters, and IP67 industrial enclosures tested for extreme climate endurance.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-line bg-bg-secondary/50 space-y-4 hover:border-accent-solar/50 transition-all shadow-md">
              <div className="p-3 rounded-2xl bg-accent-sky/10 text-accent-sky w-fit">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Intelligent Innovation</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Real-time AI telemetry, predictive fault diagnosis, and sub-10ms battery backup switching guarantee zero downtime for critical loads.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-line bg-bg-secondary/50 space-y-4 hover:border-accent-solar/50 transition-all shadow-md">
              <div className="p-3 rounded-2xl bg-accent-gold/10 text-accent-gold w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">End-to-End Ownership</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                From initial roof analysis and DISCOM approval to turnkey installation and 25-year O&M monitoring, we handle every step transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Bios */}
      <section className="py-20 md:py-28 border-b border-line bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-solar font-bold">
                <Users className="w-4 h-4" />
                <span>Executive Team</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary">
                Meet the Leadership
              </h2>
            </div>
            <p className="text-text-secondary text-sm max-w-md">
              Engineers, researchers, and clean energy pioneers dedicated to powering your transition to clean autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-line bg-bg-primary hover:border-accent-solar/50 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${member.avatarBg}`}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                    <p className="text-xs font-semibold text-accent-solar mt-0.5">{member.role}</p>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-line/60">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 border-b border-line bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary">
              Our Journey of Growth
            </h2>
            <p className="text-text-secondary text-sm">
              Key milestones on our mission to decarbonize power infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-line bg-bg-secondary/40 space-y-2">
                <span className="font-mono text-2xl font-bold text-accent-solar block">{m.year}</span>
                <h4 className="text-base font-bold text-text-primary">{m.title}</h4>
                <p className="text-xs text-text-secondary">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get a Quote CTA */}
      <GetAQuoteCTA />

      <Footer />
    </main>
  );
}
