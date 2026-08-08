'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Zap, ArrowUpRight, X } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  offset: string;
  desc: string;
  bgGradient: string;
}

export function CaseStudies() {
  const t = useTranslations('CaseStudies');
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects = [
    {
      id: 'project-1',
      title: '50 MW Grid Utility Solar Park',
      category: 'utility',
      location: 'Bhadla, Rajasthan',
      capacity: '50 MWp DC',
      offset: '75,000 Tons CO2/yr',
      desc: 'High-voltage grid interconnected utility solar plant supplying clean power to state electricity discom.',
      bgGradient: 'from-amber-500/20 via-rose-500/10 to-bg-secondary',
    },
    {
      id: 'project-2',
      title: t('projects.1.title'),
      category: 'ci',
      location: t('projects.1.location'),
      capacity: t('projects.1.capacity'),
      offset: t('projects.1.offset'),
      desc: t('projects.1.desc'),
      bgGradient: 'from-blue-500/20 via-indigo-500/10 to-bg-secondary',
    },
    {
      id: 'project-3',
      title: t('projects.2.title'),
      category: 'ci',
      location: t('projects.2.location'),
      capacity: t('projects.2.capacity'),
      offset: t('projects.2.offset'),
      desc: t('projects.2.desc'),
      bgGradient: 'from-emerald-500/20 via-teal-500/10 to-bg-secondary',
    },
    {
      id: 'project-4',
      title: 'PM KUSUM Agricultural Solarization',
      category: 'pmKusum',
      location: 'Nashik, Maharashtra',
      capacity: '12 MW Solar Pumps',
      offset: '18,200 Tons CO2/yr',
      desc: 'Dedicated solar feeder project powering agricultural water pump microgrids across rural farming clusters.',
      bgGradient: 'from-accent-solar/20 via-accent-gold/10 to-bg-secondary',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-bg-secondary/40 border-t border-line">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-bold">
              {t('tag')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
              {t('title')}
            </h2>
            <p className="text-text-primary text-base font-semibold max-w-lg mt-3">
              {t('subtitle')}
            </p>
          </div>

          {/* Sector Filters */}
          <div className="flex items-center gap-2 p-2 rounded-full bg-bg-primary border border-line overflow-x-auto shadow-sm">
            {['all', 'ci', 'pmKusum', 'utility'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-emerald-500 text-white shadow-[0_4px_14px_rgba(16,185,129,0.4)] scale-105'
                    : 'text-text-primary hover:bg-bg-secondary'
                }`}
              >
                {t(`filters.${cat}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="view"
              className="group cursor-pointer rounded-3xl p-8 bg-bg-primary border border-line hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-[4/3] shadow-xl"
            >
              {/* Decorative Gradient Pattern */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-bg-secondary border border-line text-emerald-500 font-bold">
                  {t(`filters.${project.category}`) || project.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-bg-secondary border border-line flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>{project.location}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>

                <div className="flex items-center gap-4 text-sm font-bold pt-4 border-t border-line/60">
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <Zap className="w-4 h-4" />
                    <span>{project.capacity}</span>
                  </div>
                  <span className="text-text-primary/90">{project.offset}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl p-8 bg-bg-primary border border-line shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-line bg-bg-secondary hover:bg-accent-solar hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-accent-solar">
              {selectedProject.category} Case Study
            </span>

            <h3 className="font-serif text-3xl font-bold text-text-primary mt-2 mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-text-secondary text-base leading-relaxed mb-6">
              {selectedProject.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-bg-secondary border border-line mb-6">
              <div>
                <p className="text-[10px] font-mono uppercase text-text-secondary">Location</p>
                <p className="text-sm font-semibold text-text-primary">{selectedProject.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-text-secondary">Installed Output</p>
                <p className="text-sm font-semibold text-accent-solar">{selectedProject.capacity}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-text-secondary">Grid Autonomy</p>
                <p className="text-sm font-semibold text-accent-gold">{selectedProject.offset}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-text-secondary">Status</p>
                <p className="text-sm font-semibold text-emerald-500">Fully Synchronized</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-3 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-solar/90 transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
