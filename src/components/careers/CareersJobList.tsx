'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2, GraduationCap, Briefcase, MapPin, Building2 } from 'lucide-react';

export function CareersJobList() {
  const t = useTranslations('CorporatePages.careers');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 'job1',
      title: t('job1Title'),
      department: t('job1Dept'),
      location: t('job1Loc'),
      qualification: t('job1Qual'),
      experience: t('job1Exp'),
    },
    {
      id: 'job2',
      title: t('job2Title'),
      department: t('job2Dept'),
      location: t('job2Loc'),
      qualification: t('job2Qual'),
      experience: t('job2Exp'),
    },
    {
      id: 'job3',
      title: t('job3Title'),
      department: t('job3Dept'),
      location: t('job3Loc'),
      qualification: t('job3Qual'),
      experience: t('job3Exp'),
    },
    {
      id: 'job4',
      title: t('job4Title'),
      department: t('job4Dept'),
      location: t('job4Loc'),
      qualification: t('job4Qual'),
      experience: t('job4Exp'),
    },
  ];

  return (
    <>
      <div className="space-y-6">
        <h3 className="font-serif text-3xl font-bold text-text-primary mb-6">{t('openingsTitle')}</h3>
        <div className="grid grid-cols-1 gap-5">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="p-6 md:p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-accent-solar/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md hover:shadow-xl"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-solar/10 text-accent-solar border border-accent-solar/20 text-xs font-mono font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    {j.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-primary text-text-secondary border border-line text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent-solar" />
                    {j.location}
                  </span>
                </div>

                <h4 className="font-serif text-2xl font-bold text-text-primary">{j.title}</h4>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-bg-primary border border-line/80 text-xs text-text-primary font-medium">
                    <GraduationCap className="w-4 h-4 text-accent-solar shrink-0" />
                    <span>
                      <strong className="text-text-secondary font-semibold">{t('qualificationLabel')}:</strong> {j.qualification}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      <strong>{t('experienceLabel')}:</strong> {j.experience}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(j.title)}
                className="w-full md:w-auto px-7 py-3 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-solar/90 hover:scale-105 transition-all shadow-md shrink-0"
              >
                {t('applyNow')}
              </button>
            </div>
          ))}
        </div>
      </div>

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
    </>
  );
}
