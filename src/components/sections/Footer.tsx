'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SunArcAnimation } from '../ui/SunArcAnimation';
import { PaaSolarLogo } from '../ui/PaaSolarLogo';
import { MessageCircle, Download } from 'lucide-react';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-bg-secondary border-t border-line pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-line/60">
          {/* Brand & Sun Arc Bookend Motif */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              {/* <div className="w-10 h-10 relative">
                <SunArcAnimation progress={100} animated={true} />
              </div> */}
              <Link href="/" className="hover:scale-105 transition-transform duration-300">
                <PaaSolarLogo size="lg" showImage={true} layout="col" />
              </Link>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-text-primary">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>HEADQUARTERS: JAIPUR</span>
            </div>

            {/* Social Media & WhatsApp Quick Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/?text=Hello%20Paa%20Solar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="p-2.5 rounded-full border border-line bg-bg-primary hover:border-emerald-500 text-[#25D366] hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] stroke-none" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full border border-line bg-bg-primary hover:border-[#1877F2] text-[#1877F2] hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-line bg-bg-primary hover:border-accent-sky text-accent-sky hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="p-2.5 rounded-full border border-line bg-bg-primary hover:border-text-primary text-text-primary hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full border border-line bg-bg-primary hover:border-rose-500 text-rose-500 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-full border border-line bg-bg-primary hover:border-red-500 text-red-500 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Sitemap Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="font-mono text-xs md:text-sm uppercase tracking-wider text-text-primary font-bold mb-4">
                {t('sitemap')}
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-text-primary">
                <li><Link href="/why-solar" className="hover:text-accent-solar transition-colors">Why Solar</Link></li>
                <li><Link href="/about-us" className="hover:text-accent-solar transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-accent-solar transition-colors">Projects</Link></li>
                <li><Link href="/telemetry" className="hover:text-accent-solar transition-colors">Live Telemetry</Link></li>
                <li><Link href="/get-a-quote" className="hover:text-accent-solar transition-colors">Get a Quote</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs md:text-sm uppercase tracking-wider text-text-primary font-bold mb-4">
                Products
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-text-primary">
                <li><Link href="/products/solar-panels" className="hover:text-accent-solar transition-colors">Solar Panels (TOPCon & DCR)</Link></li>
                <li><Link href="/products/inverters" className="hover:text-accent-solar transition-colors">Inverters (On-Grid, Off-Grid, Hybrid)</Link></li>
                <li><Link href="/products/battery" className="hover:text-accent-solar transition-colors">Lithium Battery</Link></li>
                <li><Link href="/products/bess" className="hover:text-accent-solar transition-colors">BESS (ESS 3532, Li UPS 1250)</Link></li>
                <li><Link href="/products/franchise-sgy" className="hover:text-accent-solar transition-colors">Complete Kit & PM SGY Franchise</Link></li>
                <li><Link href="/products" className="hover:text-accent-solar transition-colors">All Products Catalogue</Link></li>
                <li>
                  <a
                    href="/Paa_Solar_Product_Catalogue_2026.pdf"
                    download="Paa_Solar_Product_Catalogue_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-solar hover:underline font-bold text-xs pt-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Catalogue (PDF)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs md:text-sm uppercase tracking-wider text-text-primary font-bold mb-4">
                Sectors & Ops
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-text-primary">
                <li><Link href="/export" className="hover:text-accent-solar transition-colors">Exports & Overseas</Link></li>
                <li><Link href="/projects/ci" className="hover:text-accent-solar transition-colors">C&I Solar</Link></li>
                <li><Link href="/projects/pm-kusum" className="hover:text-accent-solar transition-colors">PM KUSUM (A&C)</Link></li>
                <li><Link href="/projects/pm-kusum-bess" className="hover:text-accent-solar transition-colors">PM KUSUM with BESS</Link></li>
                <li><Link href="/projects/pm-ssy" className="hover:text-accent-solar transition-colors">PM-SSY Scheme</Link></li>
                <li><Link href="/projects/ipp" className="hover:text-accent-solar transition-colors">IPP Megawatt</Link></li>
                <li><Link href="/working-methodology" className="hover:text-accent-solar transition-colors">Methodology</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs md:text-sm uppercase tracking-wider text-text-primary font-bold mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-text-primary">
                <li><Link href="/about-us" className="hover:text-accent-solar transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-accent-solar transition-colors">Contact Us</Link></li>
                <li><Link href="/admin" className="hover:text-accent-solar transition-colors">Admin Panel</Link></li>
                <li><Link href="/vendor-registration" className="hover:text-accent-solar transition-colors">Vendor Register</Link></li>
                <li><Link href="/careers" className="hover:text-accent-solar transition-colors">Careers</Link></li>
                <li><a href="#" className="hover:text-accent-solar transition-colors">{t('privacy')}</a></li>
                <li><a href="#" className="hover:text-accent-solar transition-colors">{t('terms')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm font-semibold text-text-primary">
          <p>{t('copyright')}</p>
          <a
            href="https://auralytics-f6zh-git-main-anshulbhrdwajs-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors flex items-center gap-1.5"
          >
            <span>Designed with</span>
            <span className="text-red-500">❤️</span>
            <span>by</span>
            <span className="font-bold text-emerald-500 hover:underline underline-offset-4">Auralytics</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
