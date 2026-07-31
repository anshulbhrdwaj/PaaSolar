'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Sun, Moon, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const trigger = ScrollTrigger.create({
      start: 'top -50px',
      onUpdate: (self) => {
        setScrolled(self.scroll() > 50);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'hi' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-line py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-auto flex items-center">
            {/* Light mode logo */}
            <Image
              src="/Paa.png"
              alt="Paa Solar Logo"
              width={150}
              height={42}
              className="h-9 w-auto object-contain block dark:hidden group-hover:scale-105 transition-transform duration-300"
              priority
            />
            {/* Dark mode logo */}
            <Image
              src="/Paa-dark.png"
              alt="Paa Solar Logo"
              width={150}
              height={42}
              className="h-9 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#why-solar" className="hover:text-accent-solar transition-colors duration-200">
            {t('nav.whySolar')}
          </a>
          <a href="#how-it-works" className="hover:text-accent-solar transition-colors duration-200">
            {t('nav.howItWorks')}
          </a>
          <a href="#solutions" className="hover:text-accent-solar transition-colors duration-200">
            {t('nav.solutions')}
          </a>
          <a href="#projects" className="hover:text-accent-solar transition-colors duration-200">
            {t('nav.projects')}
          </a>
          <a href="#telemetry" className="hover:text-accent-solar transition-colors duration-200">
            {t('nav.impact')}
          </a>
          <a href="#testimonials" className="hover:text-accent-solar transition-colors duration-200">
            {t('nav.testimonials')}
          </a>
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector */}
          <button
            onClick={toggleLanguage}
            data-cursor="pointer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-line hover:border-accent-solar/40 bg-bg-secondary/50 text-xs font-semibold text-text-primary transition-all duration-300"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-accent-solar" />
            <span className="uppercase tracking-wider">{locale === 'en' ? 'HI' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              data-cursor="pointer"
              aria-label={t('themeToggle')}
              className="p-2 rounded-full border border-line hover:border-accent-solar/40 bg-bg-secondary/50 text-text-primary hover:text-accent-solar transition-all duration-300 relative overflow-hidden"
            >
              <div className="transition-transform duration-500 rotate-0 dark:rotate-180">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-accent-gold" />
                ) : (
                  <Moon className="w-4 h-4 text-accent-sky" />
                )}
              </div>
            </button>
          )}

          {/* Primary CTA */}
          <a
            href="#get-a-quote"
            data-cursor="explore"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">{t('getQuote')}</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 bg-accent-sky translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-line bg-bg-secondary/50"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-accent-gold" />
              ) : (
                <Moon className="w-4 h-4 text-accent-sky" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full border border-line bg-bg-secondary/50 text-text-primary"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-bg-primary/95 backdrop-blur-lg border-b border-line p-6 flex flex-col gap-5 shadow-2xl animate-fade-in">
          <a
            href="#why-solar"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-text-primary hover:text-accent-solar"
          >
            {t('nav.whySolar')}
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-text-primary hover:text-accent-solar"
          >
            {t('nav.howItWorks')}
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-text-primary hover:text-accent-solar"
          >
            {t('nav.solutions')}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-text-primary hover:text-accent-solar"
          >
            {t('nav.projects')}
          </a>
          <a
            href="#telemetry"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-text-primary hover:text-accent-solar"
          >
            {t('nav.impact')}
          </a>

          <div className="flex items-center justify-between pt-4 border-t border-line">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-semibold text-accent-solar"
            >
              <Globe className="w-4 h-4" />
              <span>Switch to {locale === 'en' ? 'हिंदी (HI)' : 'English (EN)'}</span>
            </button>
            <a
              href="#get-a-quote"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider"
            >
              {t('getQuote')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
