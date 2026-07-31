'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SunArcAnimation } from '../ui/SunArcAnimation';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-bg-secondary border-t border-line pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-line/60">
          {/* Brand & Sun Arc Bookend Motif */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 relative">
                <SunArcAnimation progress={100} animated={true} />
              </div>
              <div className="relative h-10 w-auto flex items-center">
                <Image
                  src="/Paa.png"
                  alt="Paa Solar Logo"
                  width={150}
                  height={42}
                  className="h-10 w-auto object-contain block dark:hidden"
                />
                <Image
                  src="/Paa-dark.png"
                  alt="Paa Solar Logo"
                  width={150}
                  height={42}
                  className="h-10 w-auto object-contain hidden dark:block"
                />
              </div>
            </div>

            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              {t('brandTagline')}
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>HEADQUARTERS: MUMBAI • BENGALURU • GURUGRAM</span>
            </div>
          </div>

          {/* Navigation Sitemap Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold mb-4">
                {t('sitemap')}
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-text-secondary">
                <li><a href="#why-solar" className="hover:text-accent-solar transition-colors">Why Solar</a></li>
                <li><a href="#how-it-works" className="hover:text-accent-solar transition-colors">How It Works</a></li>
                <li><a href="#solutions" className="hover:text-accent-solar transition-colors">Ecosystem Solutions</a></li>
                <li><a href="#projects" className="hover:text-accent-solar transition-colors">Featured Projects</a></li>
                <li><a href="#telemetry" className="hover:text-accent-solar transition-colors">Live Telemetry</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold mb-4">
                {t('solutions')}
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-text-secondary">
                <li><a href="#solutions" className="hover:text-accent-solar transition-colors">Residential Tiles</a></li>
                <li><a href="#solutions" className="hover:text-accent-solar transition-colors">Commercial Microgrids</a></li>
                <li><a href="#solutions" className="hover:text-accent-solar transition-colors">Industrial Power</a></li>
                <li><a href="#solutions" className="hover:text-accent-solar transition-colors">Paa Vault Storage</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold mb-4">
                {t('legal')}
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-text-secondary">
                <li><a href="#" className="hover:text-accent-solar transition-colors">{t('privacy')}</a></li>
                <li><a href="#" className="hover:text-accent-solar transition-colors">{t('terms')}</a></li>
                <li><a href="#" className="hover:text-accent-solar transition-colors">{t('cookies')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent-solar transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent-solar transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-accent-solar transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
