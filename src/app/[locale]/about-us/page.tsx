import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ShieldCheck, Sparkles, Building2, Users, Target, Lightbulb } from 'lucide-react';

import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'About PAA SOLAR | EKCHAKRA GROUP | Leadership & Clean Energy Vision',
    description:
      'Discover PAA SOLAR (EKCHAKRA GROUP), India’s premier solar EPC developer with a 30-40 year clean energy vision. Meet our executive management team led by MR. Pandey, Dinesh Kumar, Priyanka & Akansha.',
    path: '/about-us',
    locale,
  });
}

export default function AboutUsPage() {


  const teamMembers = [
    {
      name: 'MR. Pandey',
      role: 'CGM – Channel & Project',
      bio: '27+ years of experience in the EPC sector and solar module manufacturing. Deep expertise managing large-scale solar projects from planning to commissioning and lifecycle performance.',
      avatarBg: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      name: 'Dinesh Kumar',
      role: 'General Manager – Sales',
      bio: '10+ years of sales leadership in the power & energy sector (Exide, Luminous, UTL). Expert in channel development, corporate sales, dealer networks, and battery power systems.',
      avatarBg: 'bg-accent-sky/10 text-accent-sky',
    },
    {
      name: 'Priyanka',
      role: 'Manager – Human Resources',
      bio: '15+ years of HR leadership in EPC enterprises. Specialist in talent management, organizational development, workforce planning, and performance-driven workplace culture.',
      avatarBg: 'bg-accent-gold/10 text-accent-gold',
    },
    {
      name: 'Akansha',
      role: 'Marketing Manager',
      bio: '7+ years of experience leading ATL, BTL, and digital marketing campaigns. Drives nationwide brand visibility, product launches, and dealer engagement strategies.',
      avatarBg: 'bg-emerald-500/10 text-emerald-500',
    },
  ];

  const associateCompanies = [
    { name: 'EKCHAKRA International Pvt. Ltd.', sector: 'Export (Solar & FMCG)', desc: 'Global distribution and international trading of clean energy components and FMCG products.' },
    { name: 'B K Metal', sector: 'Galvanized Structures', desc: 'Manufacturing high-durability, anti-corrosive galvanized mounting structures for solar fields.' },
    { name: 'RJ Travel Junction', sector: 'Tour & Travel Services', desc: 'End-to-end corporate and leisure travel logistics and mobility management.' },
    { name: 'Shilp Craft', sector: 'National & Global E-Commerce', desc: 'Curated craft business supplying traditional and modern artisanal products worldwide.' },
    { name: 'Delight Apparel', sector: 'Apparel E-Commerce', desc: 'National and international e-commerce platform for high-quality garments.' },
    { name: 'Pareshaanho', sector: 'Legal & Genuine Advisory', desc: 'Digital advisory platform providing verified legal and genuine problem-solving advice.' },
  ];

  const milestones = [
    { year: '2016', title: 'Part of EKCHAKRA Group', desc: 'Established with a 30-40 year long-term solar execution vision.' },
    { year: '2019', title: 'C&I & Government Schemes', desc: 'Expanded into PM-KUSUM, PM-SSY, and commercial rooftop EPC.' },
    { year: '2022', title: 'Paa Vault & AI Tech Launch', desc: 'Introduced 24%+ TOPCon smart modules and AI-based smart inverters.' },
    { year: '2025', title: '8 Export Destinations', desc: 'Supplying solar panels, inverters & storage kits across 8 countries.' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--accent-solar-soft)_0%,transparent_60%)] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Part of EKCHAKRA GROUP</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-tight">
              Leading India&apos;s Solar Revolution.
            </h1>

            <p className="text-lg md:text-xl text-text-secondary font-normal leading-relaxed">
              PAA SOLAR is a fast-growing solar company delivering sustainable and efficient renewable energy solutions across India and international markets, specializing in C&I, PM-KUSUM, PM-SSY, and utility-scale installations.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-accent-solar/5 via-bg-secondary/40 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl p-8 md:p-12 border border-accent-solar/30 bg-bg-primary shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles className="w-64 h-64 text-accent-solar" />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-solar font-bold">
                <Target className="w-4 h-4" />
                <span>Director&apos;s Message</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
                A Blessing from Today&apos;s Generation to the Next.
              </h2>
            </div>

            <blockquote className="space-y-4 text-base md:text-lg text-text-secondary leading-relaxed italic border-l-4 border-accent-solar pl-6 py-2">
              <p>
                &ldquo;PAA SOLAR is part of EKCHAKRA GROUP. We believe that today&apos;s generation installing solar is basically giving a gift and blessing to the next generation. This generation is giving a lesson to invest in products and projects that yield lifelong benefits—giving a smoke-free world, freedom from electricity bills, saving trees, and much more.&rdquo;
              </p>
              <p>
                &ldquo;PAA SOLAR provides 30 to 40-year long-term solutions, services, and support—not short-term or cheap fixes. Our team first understands your requirements, then designs the best durable aspects for your project before providing agreed solutions.&rdquo;
              </p>
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-line/60">
              <div className="w-12 h-12 rounded-full bg-accent-solar text-white flex items-center justify-center font-serif text-xl font-bold">
                E
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">Director&apos;s Desk</p>
                <p className="text-xs text-text-secondary">Paa Solar • EKCHAKRA GROUP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20 border-b border-line bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl border border-line bg-bg-secondary/50 space-y-4 hover:border-accent-solar/50 transition-all shadow-md">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Our Mission</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                To deliver affordable, high-quality sustainable energy solutions worldwide, fostering better lives and more profit through innovative clean energy technologies. We strive to make renewable power accessible to every household and business.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl border border-line bg-bg-secondary/50 space-y-4 hover:border-accent-solar/50 transition-all shadow-md">
              <div className="p-3 rounded-2xl bg-accent-sky/10 text-accent-sky w-fit">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Our Vision</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                To create accessible clean energy through efficient solar solutions and cost-effective innovations, empowering customers and communities globally toward a carbon-neutral planet for generations to come.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-3xl font-bold text-text-primary">Our Core Values</h3>
              <p className="text-xs text-text-secondary">ENHANCING SOLAR EFFICIENCY FOR EVERY PROJECT</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-line bg-bg-primary space-y-3">
                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                <h4 className="text-lg font-bold text-text-primary">Integrity</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  We uphold honest and transparent dealings in all our interactions with partners, customers, and communities.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-line bg-bg-primary space-y-3">
                <Users className="w-8 h-8 text-accent-sky" />
                <h4 className="text-lg font-bold text-text-primary">Respect for Individuals</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  We foster respect for every individual and prioritize putting the customer first in every decision we make.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-line bg-bg-primary space-y-3">
                <Sparkles className="w-8 h-8 text-accent-gold" />
                <h4 className="text-lg font-bold text-text-primary">Passion for Excellence</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  We continuously strive for improvement, embracing innovation to deliver solutions that exceed expectations.
                </p>
              </div>
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
                <span>Executive Management</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary">
                Meet the Leadership Team
              </h2>
            </div>
            <p className="text-text-secondary text-sm max-w-md">
              Industry professionals with over 25+ years of cumulative expertise across EPC execution, solar module manufacturing, and energy management.
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

      {/* EKCHAKRA GROUP Associate Companies */}
      <section className="py-20 md:py-24 border-b border-line bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-bg-secondary text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">
              <Building2 className="w-3.5 h-3.5 text-accent-solar" />
              <span>Group Lineage</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              EKCHAKRA GROUP Associate Companies
            </h2>
            <p className="text-text-secondary text-xs md:text-sm">
              Synergistic business divisions across international export, manufacturing, logistics, and digital services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associateCompanies.map((company, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-line bg-bg-secondary/40 space-y-3 hover:border-accent-solar/40 transition-all">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-solar font-bold px-2.5 py-1 rounded-full bg-accent-solar/10 w-fit block">
                  {company.sector}
                </span>
                <h4 className="text-lg font-bold text-text-primary">{company.name}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility (CSR) Section from PDF */}
      <section className="py-20 md:py-24 border-b border-line bg-gradient-to-b from-emerald-500/5 via-bg-secondary/40 to-bg-primary">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Corporate Social Responsibility (CSR)</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary">
              Empowering Communities & Preserving Nature
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              At PAA SOLAR, our commitment extends beyond technology. We view every kilowatt of solar energy installed as a direct gift and blessing to the next generation—protecting forests, reducing carbon smoke, and empowering rural farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-line bg-bg-primary space-y-4 shadow-lg hover:border-emerald-500/50 transition-all">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Saving Trees & Smoke-Free Air</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                By replacing thermal power dependency with clean solar electricity, PAA SOLAR installations eliminate megatons of carbon emissions annually, preserving thousands of trees and ensuring cleaner air for future generations.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-line bg-bg-primary space-y-4 shadow-lg hover:border-accent-solar/50 transition-all">
              <div className="p-3 rounded-2xl bg-accent-solar/10 text-accent-solar w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">PM-KUSUM Rural Electrification</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                We actively participate in PM-KUSUM feeder solar schemes and BESS storage that grant 24/7 reliable grid feeder power and energy autonomy.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-line bg-bg-primary space-y-4 shadow-lg hover:border-accent-sky/50 transition-all">
              <div className="p-3 rounded-2xl bg-accent-sky/10 text-accent-sky w-fit">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">30-40 Year Livelihood Support</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                We design energy assets engineered to deliver 30 to 40 years of continuous performance, backing every project with dedicated technical training, local maintenance jobs, and long-term community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 border-b border-line bg-bg-secondary/20">
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
              <div key={idx} className="p-6 rounded-2xl border border-line bg-bg-primary space-y-2">
                <span className="font-mono text-2xl font-bold text-accent-solar block">{m.year}</span>
                <h4 className="text-base font-bold text-text-primary">{m.title}</h4>
                <p className="text-xs text-text-secondary">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get a Quote CTA */}

      <Footer />
    </main>
  );
}
