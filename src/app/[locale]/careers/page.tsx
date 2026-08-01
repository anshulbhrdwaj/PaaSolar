'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Briefcase, CheckCircle2, Award, ArrowUpRight, Send } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function CareersPage() {
  const t = useTranslations('CorporatePages.careers');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    { id: 'job1', title: t('job1'), department: 'Engineering', location: 'Mumbai / Remote' },
    { id: 'job2', title: t('job2'), department: 'Project Operations', location: 'Bengaluru' },
    { id: 'job3', title: t('job3'), department: 'Regulatory & DISCOM', location: 'Gurugram' },
    { id: 'job4', title: t('job4'), department: 'R&D Storage Tech', location: 'Mumbai' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-solar/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('tag')}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="p-8 rounded-3xl bg-bg-secondary/60 border border-line space-y-4 mb-16">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">{t('cultureTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium text-text-secondary">
            <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-solar flex-shrink-0" />
              <span>{t('benefit1')}</span>
            </div>
            <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-solar flex-shrink-0" />
              <span>{t('benefit2')}</span>
            </div>
            <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-solar flex-shrink-0" />
              <span>{t('benefit3')}</span>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="space-y-6">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-6">{t('openingsTitle')}</h3>
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((j) => (
              <div
                key={j.id}
                className="p-6 rounded-2xl bg-bg-secondary/70 border border-line hover:border-accent-solar/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent-solar font-bold block mb-1">
                    {j.department} • {j.location}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-text-primary">{j.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedJob(j.title)}
                  className="px-6 py-2.5 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-solar/90 transition-colors"
                >
                  {t('applyNow')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Application Dialog */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="relative w-full max-w-xl rounded-3xl p-8 bg-bg-primary border border-line shadow-2xl">
            {applied ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-text-primary">Application Submitted!</h4>
                <p className="text-xs text-text-secondary">Our talent acquisition team will review your application and reach out.</p>
                <button
                  onClick={() => { setSelectedJob(null); setApplied(false); }}
                  className="py-2.5 px-6 rounded-full bg-accent-solar text-white text-xs font-bold uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
                <span className="text-xs font-mono text-accent-solar uppercase">Applying for Position</span>
                <h3 className="font-serif text-2xl font-bold text-text-primary">{selectedJob}</h3>

                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary mb-1">Full Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary mb-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary mb-1">Portfolio / LinkedIn URL</label>
                  <input type="url" required className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line text-sm" placeholder="https://linkedin.com/in/..." />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="w-1/2 py-3 rounded-full border border-line text-xs font-bold uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-3 rounded-full bg-accent-solar text-white text-xs font-bold uppercase"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
