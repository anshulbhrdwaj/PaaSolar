'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  SunMedium,
  Zap,
  BatteryCharging,
  Layers,
  Building2,
  Sprout,
  Factory,
  Check,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
];

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = mounted ? (resolvedTheme || theme) === 'dark' : false;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  useEffect(() => {
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

  const changeLanguage = (nextLocale: string) => {
    setLangDropdownOpen(false);
    setMobileOpen(false);
    router.replace(pathname, { locale: nextLocale });
  };

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  const toggleTheme = () => {
    const current = resolvedTheme || theme;
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  const isProductActive = pathname.startsWith('/products');
  const isProjectActive = pathname.startsWith('/projects');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-line py-4 shadow-sm'
          : 'bg-bg-primary/80 backdrop-blur-md border-b border-line py-4 shadow-sm lg:bg-transparent lg:border-b-0 lg:py-6 lg:shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-14 md:h-16 w-auto flex items-center">
            {/* Light mode logo */}
            <Image
              src="/Paa.png"
              alt="Paa Solar Logo"
              width={260}
              height={72}
              className={`h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 ${
                mounted ? (isDark ? 'hidden' : 'block') : 'block dark:hidden'
              }`}
              priority
            />
            {/* Dark mode logo */}
            <Image
              src="/Paa-dark.png"
              alt="Paa Solar Logo"
              width={260}
              height={72}
              className={`h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 ${
                mounted ? (isDark ? 'block' : 'hidden') : 'hidden dark:block'
              }`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link
            href="/why-solar"
            className={`hover:text-accent-solar transition-colors duration-200 ${
              pathname === '/why-solar' ? 'text-accent-solar font-semibold' : ''
            }`}
          >
            {t('nav.whySolar')}
          </Link>
          <Link
            href="/about-us"
            className={`hover:text-accent-solar transition-colors duration-200 ${
              pathname === '/about-us' ? 'text-accent-solar font-semibold' : ''
            }`}
          >
            {t('nav.aboutUs')}
          </Link>

          {/* Interactive Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 hover:text-accent-solar transition-colors duration-200 py-2 ${
                isProductActive ? 'text-accent-solar font-semibold' : ''
              }`}
            >
              <span>{t('nav.products')}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  dropdownOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {/* Dropdown Card Menu */}
            {dropdownOpen && (
              <div className="absolute top-full -left-4 w-72 pt-2 animate-fade-in z-50">
                <div className="p-3 rounded-2xl bg-bg-primary/95 backdrop-blur-xl border border-line shadow-2xl flex flex-col gap-1.5">
                  <Link
                    href="/products/solar-panels"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-solar/10 text-accent-solar group-hover:scale-110 transition-transform">
                      <SunMedium className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('productsDropdown.solarPanels')}
                      </p>
                      <p className="text-[10px] text-text-secondary">TOPCon Mono Panels</p>
                    </div>
                  </Link>

                  <Link
                    href="/products/inverters"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-sky/10 text-accent-sky group-hover:scale-110 transition-transform">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('productsDropdown.inverters')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Smart Hybrid Inverters</p>
                    </div>
                  </Link>

                  <Link
                    href="/products/battery"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold group-hover:scale-110 transition-transform">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('productsDropdown.battery')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Paa Vault LFP Storage</p>
                    </div>
                  </Link>

                  <div className="border-t border-line/60 pt-1 mt-1">
                    <Link
                      href="/products"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold text-accent-solar hover:bg-accent-solar/10 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t('productsDropdown.allProducts')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 hover:text-accent-solar transition-colors duration-200 py-2 ${
                isProjectActive ? 'text-accent-solar font-semibold' : ''
              }`}
            >
              <span>{t('nav.projects')}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  projectsDropdownOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {/* Dropdown Card Menu */}
            {projectsDropdownOpen && (
              <div className="absolute top-full -left-4 w-72 pt-2 animate-fade-in z-50">
                <div className="p-3 rounded-2xl bg-bg-primary/95 backdrop-blur-xl border border-line shadow-2xl flex flex-col gap-1.5">
                  <Link
                    href="/projects/ci"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-sky/10 text-accent-sky group-hover:scale-110 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('projectsDropdown.ci')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Commercial & Industrial Rooftop</p>
                    </div>
                  </Link>

                  <Link
                    href="/projects/pm-kusum"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('projectsDropdown.pmKusum')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Agricultural Solarization</p>
                    </div>
                  </Link>

                  <Link
                    href="/projects/ipp"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold group-hover:scale-110 transition-transform">
                      <Factory className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('projectsDropdown.ipp')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Utility Megawatt Solar Parks</p>
                    </div>
                  </Link>

                  <div className="border-t border-line/60 pt-1 mt-1">
                    <Link
                      href="/projects"
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold text-accent-solar hover:bg-accent-solar/10 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t('projectsDropdown.allProjects')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/b2b"
            className={`hover:text-accent-solar transition-colors duration-200 ${
              pathname === '/b2b' ? 'text-accent-solar font-semibold' : ''
            }`}
          >
            {t('nav.b2b')}
          </Link>
          <Link
            href="/working-methodology"
            className={`hover:text-accent-solar transition-colors duration-200 ${
              pathname === '/working-methodology' ? 'text-accent-solar font-semibold' : ''
            }`}
          >
            Methodology
          </Link>
          <Link
            href="/export"
            className={`hover:text-accent-solar transition-colors duration-200 ${
              pathname === '/export' ? 'text-accent-solar font-semibold' : ''
            }`}
          >
            Export
          </Link>
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Multi-Language Selector Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              data-cursor="pointer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-line hover:border-accent-solar/40 bg-bg-secondary/50 text-xs font-semibold text-text-primary transition-all duration-300"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-accent-solar" />
              <span className="uppercase tracking-wider font-bold">{currentLang.code}</span>
              <span className="text-[10px] text-text-secondary">({currentLang.native})</span>
              <ChevronDown
                className={`w-3 h-3 text-text-secondary transition-transform duration-300 ${
                  langDropdownOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-56 z-50 animate-fade-in">
                <div className="rounded-2xl p-2 bg-bg-primary/95 backdrop-blur-xl border border-line shadow-2xl space-y-1 max-h-80 overflow-y-auto">
                  <div className="px-3 py-1.5 border-b border-line/60">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary font-bold">
                      Select Language
                    </span>
                  </div>
                  {LANGUAGES.map((lang) => {
                    const active = lang.code === locale;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                          active
                            ? 'bg-accent-solar/15 text-accent-solar font-bold'
                            : 'text-text-primary hover:bg-bg-secondary'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span>{lang.flag}</span>
                          <span className="font-semibold">{lang.native}</span>
                          <span className="text-[10px] text-text-secondary uppercase">({lang.code})</span>
                        </div>
                        {active && <Check className="w-4 h-4 text-accent-solar" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              data-cursor="pointer"
              aria-label={t('themeToggle')}
              className="p-2 rounded-full border border-line hover:border-accent-solar/40 bg-bg-secondary/50 text-text-primary hover:text-accent-solar transition-all duration-300 relative overflow-hidden"
            >
              <div className="transition-transform duration-500 rotate-0 dark:rotate-180">
                {isDark ? (
                  <Sun className="w-4 h-4 text-accent-gold" />
                ) : (
                  <Moon className="w-4 h-4 text-accent-sky" />
                )}
              </div>
            </button>
          )}

          {/* Primary CTA */}
          <Link
            href="/get-a-quote"
            data-cursor="explore"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">{t('getQuote')}</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 bg-accent-sky translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-line bg-bg-secondary/50"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-accent-gold" />
              ) : (
                <Moon className="w-4 h-4 text-accent-sky" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Menu"
            className="p-2 rounded-full border border-line bg-bg-secondary/50 text-text-primary transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="transition-transform duration-300 transform">
              {mobileOpen ? <X className="w-5 h-5 rotate-90 scale-110" /> : <Menu className="w-5 h-5 rotate-0" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-bg-primary/98 backdrop-blur-2xl border-b border-line p-6 flex flex-col gap-4 shadow-2xl animate-mobile-drawer max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain pb-16">
          <Link
            href="/why-solar"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '40ms' }}
            className={`text-lg font-medium animate-mobile-item transition-colors ${
              pathname === '/why-solar'
                ? 'text-accent-solar font-semibold'
                : 'text-text-primary hover:text-accent-solar'
            }`}
          >
            {t('nav.whySolar')}
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '60ms' }}
            className={`text-lg font-medium animate-mobile-item transition-colors ${
              pathname === '/about-us'
                ? 'text-accent-solar font-semibold'
                : 'text-text-primary hover:text-accent-solar'
            }`}
          >
            {t('nav.aboutUs')}
          </Link>

          {/* Mobile Accordion Products */}
          <div
            style={{ animationDelay: '80ms' }}
            className="flex flex-col gap-2 border-y border-line/60 py-3 animate-mobile-item"
          >
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between text-lg font-medium text-text-primary hover:text-accent-solar w-full transition-colors"
            >
              <span>{t('nav.products')}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  mobileProductsOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="flex flex-col gap-3 pl-4 pt-2 text-sm text-text-secondary animate-accordion overflow-hidden">
                <Link
                  href="/products/solar-panels"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <SunMedium className="w-4 h-4 text-accent-solar" />
                  <span>{t('productsDropdown.solarPanels')}</span>
                </Link>
                <Link
                  href="/products/inverters"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Zap className="w-4 h-4 text-accent-sky" />
                  <span>{t('productsDropdown.inverters')}</span>
                </Link>
                <Link
                  href="/products/battery"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <BatteryCharging className="w-4 h-4 text-accent-gold" />
                  <span>{t('productsDropdown.battery')}</span>
                </Link>
                <Link
                  href="/products"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-accent-solar font-semibold pt-1 transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  <span>{t('productsDropdown.allProducts')}</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Accordion Projects */}
          <div
            style={{ animationDelay: '120ms' }}
            className="flex flex-col gap-2 border-b border-line/60 pb-3 animate-mobile-item"
          >
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="flex items-center justify-between text-lg font-medium text-text-primary hover:text-accent-solar w-full transition-colors"
            >
              <span>{t('nav.projects')}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  mobileProjectsOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {mobileProjectsOpen && (
              <div className="flex flex-col gap-3 pl-4 pt-2 text-sm text-text-secondary animate-accordion overflow-hidden">
                <Link
                  href="/projects/ci"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Building2 className="w-4 h-4 text-accent-sky" />
                  <span>{t('projectsDropdown.ci')}</span>
                </Link>
                <Link
                  href="/projects/pm-kusum"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Sprout className="w-4 h-4 text-emerald-500" />
                  <span>{t('projectsDropdown.pmKusum')}</span>
                </Link>
                <Link
                  href="/projects/ipp"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Factory className="w-4 h-4 text-accent-gold" />
                  <span>{t('projectsDropdown.ipp')}</span>
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-accent-solar font-semibold pt-1 transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  <span>{t('projectsDropdown.allProjects')}</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/b2b"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '160ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            {t('nav.b2b')}
          </Link>
          <Link
            href="/working-methodology"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '200ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            Methodology
          </Link>
          <Link
            href="/export"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '240ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            Export
          </Link>
          <Link
            href="/vendor-registration"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '280ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            Vendor Registration
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '320ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            Careers
          </Link>

          {/* Mobile Language Selector Grid */}
          <div
            style={{ animationDelay: '360ms' }}
            className="pt-4 border-t border-line space-y-3 animate-mobile-item"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-text-secondary font-bold block">
              Select Language ({currentLang.native})
            </span>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => {
                const active = lang.code === locale;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium transition-all ${
                      active
                        ? 'border-accent-solar bg-accent-solar/15 text-accent-solar font-bold'
                        : 'border-line bg-bg-secondary/40 text-text-primary hover:border-accent-solar/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.native}</span>
                    </div>
                    {active && <Check className="w-3.5 h-3.5 text-accent-solar" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{ animationDelay: '400ms' }}
            className="pt-2 animate-mobile-item"
          >
            <Link
              href="/get-a-quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider block text-center shadow-lg hover:bg-accent-solar/90 active:scale-[0.99] transition-all"
            >
              {t('getQuote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
