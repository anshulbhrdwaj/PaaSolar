'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Zap, ArrowUpRight, X, ChevronDown, ChevronUp } from 'lucide-react';

import projectsData from '@/data/projects.json';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  offset: string;
  desc: string;
  bgGradient: string;
  image?: string;
}

export function CaseStudies() {
  const t = useTranslations('CaseStudies');
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = projectsData;

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

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
            {['all', 'ci', 'pmKusum', 'pmSsy', 'utility'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setShowAll(false);
                }}
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
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="view"
              className="group cursor-pointer rounded-3xl p-8 bg-bg-primary border border-line hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-[4/3] shadow-xl"
            >
              {/* Map Embed Background Container */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-500">
                <iframe
                  title={`Map of ${project.location}`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&t=m&z=10&output=embed&iwloc=near`}
                  className="w-full h-full border-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/30 to-transparent group-hover:from-bg-primary/75 group-hover:via-bg-primary/10 transition-colors duration-500" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-bg-primary/90 border border-emerald-500/40 text-emerald-400 font-bold backdrop-blur-md shadow-sm">
                  {t(`filters.${project.category}`) || project.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-bg-primary/90 border border-line flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 backdrop-blur-md shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Prominent Map Location Pill */}
              <div className="relative z-10 my-auto flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-bg-primary/90 border border-emerald-500/40 backdrop-blur-md shadow-lg w-fit group-hover:border-emerald-500 transition-colors">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-serif text-sm sm:text-base font-bold text-text-primary">
                  {project.location}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-lg md:text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between gap-4 text-xs font-bold pt-3 border-t border-line/60">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <Zap className="w-4 h-4" />
                    <span>{project.capacity}</span>
                  </div>
                  <span className="text-text-secondary font-mono">{project.offset}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProjects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-bg-primary border-2 border-emerald-500/40 text-text-primary font-bold text-xs uppercase tracking-wider shadow-lg hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300 group"
            >
              <span>
                {showAll
                  ? 'Show Fewer Projects'
                  : `Show More Projects (${filteredProjects.length - 4} More Portfolio Projects)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl p-8 bg-bg-primary border border-line shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 p-2 rounded-full border border-line bg-bg-secondary hover:bg-accent-solar hover:text-white transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Interactive Live Map View in Modal */}
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative border border-emerald-500/40 shadow-xl group">
              <iframe
                title={`Live Map ${selectedProject.location}`}
                width="100%"
                height="100%"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedProject.location)}&t=m&z=12&output=embed`}
                className="w-full h-full border-0"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-bg-primary/90 border border-line text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-md backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedProject.location}</span>
              </div>
            </div>

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
