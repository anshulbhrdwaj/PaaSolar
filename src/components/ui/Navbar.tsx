'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { PaaSolarLogo } from '@/components/ui/PaaSolarLogo';
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
  Cpu,
  Download,
  Layers,
  Building2,
  Sprout,
  Factory,
  Check,
  ClipboardList,
  Workflow,
  Globe2,
  Briefcase,
  Phone,
  Store,
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
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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
  const isCompanyActive = pathname === '/vendor-registration' || pathname === '/working-methodology' || pathname === '/export' || pathname === '/careers' || pathname === '/contact';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-bg-primary/95 dark:bg-bg-primary/95 backdrop-blur-md border-b border-line shadow-sm ${
        scrolled || mobileOpen ? 'py-2.5 sm:py-3' : 'py-3 lg:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group hover:scale-105 transition-transform duration-300">
          <PaaSolarLogo size="md" showTagline={false} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-bold text-text-primary whitespace-nowrap">
          <Link
            href="/about-us"
            className={`whitespace-nowrap hover:text-accent-solar transition-colors duration-200 font-bold ${
              pathname === '/about-us' ? 'text-accent-solar' : 'text-text-primary'
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
              className={`flex items-center gap-1.5 whitespace-nowrap hover:text-accent-solar transition-colors duration-200 py-2 font-bold ${
                isProductActive ? 'text-accent-solar' : 'text-text-primary'
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
                      <p className="text-[10px] text-text-secondary font-medium">TOPCon & DCR Bifacial Modules</p>
                    </div>
                  </Link>

                  {/* Sub-Items: TOPCon and DCR Panels */}
                  <div className="pl-9 space-y-1 my-0.5">
                    <Link
                      href="/products/solar-panels#topcon"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-accent-solar py-1 px-2.5 rounded-lg hover:bg-accent-solar/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-solar shrink-0" />
                      <span>{t('productsDropdown.topconPanels')}</span>
                    </Link>
                    <Link
                      href="/products/solar-panels#dcr"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-emerald-500 py-1 px-2.5 rounded-lg hover:bg-emerald-500/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{t('productsDropdown.dcrPanels')}</span>
                    </Link>
                  </div>

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
                      <p className="text-[10px] text-text-secondary font-medium">On-Grid, Off-Grid & Hybrid</p>
                    </div>
                  </Link>

                  {/* Sub-Items: On-Grid, Off-Grid, and Hybrid Inverters */}
                  <div className="pl-9 space-y-1 my-0.5">
                    <Link
                      href="/products/inverters#ongrid"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-accent-sky py-1 px-2.5 rounded-lg hover:bg-accent-sky/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky shrink-0" />
                      <span>{t('productsDropdown.onGridInverters')}</span>
                    </Link>
                    <Link
                      href="/products/inverters#offgrid"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-accent-gold py-1 px-2.5 rounded-lg hover:bg-accent-gold/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      <span>{t('productsDropdown.offGridInverters')}</span>
                    </Link>
                    <Link
                      href="/products/inverters#hybrid"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-emerald-500 py-1 px-2.5 rounded-lg hover:bg-emerald-500/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{t('productsDropdown.hybridInverters')}</span>
                    </Link>
                  </div>

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
                      <p className="text-[10px] text-text-secondary font-medium">Smart Lithium Battery Storage</p>
                    </div>
                  </Link>

                  {/* Sub-Items: Lithium Battery */}
                  <div className="pl-9 space-y-1 my-0.5">
                    <Link
                      href="/products/battery#lithium-ion"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-accent-gold py-1 px-2.5 rounded-lg hover:bg-accent-gold/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      <span>{t('productsDropdown.lithiumIonBattery')}</span>
                    </Link>
                  </div>

                  <Link
                    href="/products/bess"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('productsDropdown.bess')}
                      </p>
                      <p className="text-[10px] text-text-secondary font-medium">ESS 3532 & Li UPS 1250</p>
                    </div>
                  </Link>

                  {/* Sub-Items: ESS 3532 & Li UPS 1250 */}
                  <div className="pl-9 space-y-1 my-0.5">
                    <Link
                      href="/products/bess#ess3532"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-emerald-500 py-1 px-2.5 rounded-lg hover:bg-emerald-500/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{t('productsDropdown.ess3532')}</span>
                    </Link>
                    <Link
                      href="/products/bess#liups1250"
                      className="block text-[11px] font-semibold text-text-secondary hover:text-accent-gold py-1 px-2.5 rounded-lg hover:bg-accent-gold/10 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      <span>{t('productsDropdown.liUps1250')}</span>
                    </Link>
                  </div>

                  <Link
                    href="/products/franchise-sgy"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        Solar Kit & PM SGY Franchise
                      </p>
                      <p className="text-[10px] text-text-secondary font-medium">1kW to 10kW Kits & District Dealer Offer</p>
                    </div>
                  </Link>

                  <div className="border-t border-line/60 pt-1.5 mt-1.5 flex flex-col gap-1">
                    <Link
                      href="/products"
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-accent-solar hover:bg-accent-solar/10 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t('productsDropdown.allProducts')}</span>
                    </Link>

                    <a
                      href="/Paa_Solar_Product_Catalogue_2026.pdf"
                      download="Paa_Solar_Product_Catalogue_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-2.5 py-2 rounded-lg text-xs font-bold text-white bg-accent-solar hover:bg-accent-solar/90 shadow-md transition-all mt-0.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Catalogue (PDF)</span>
                    </a>
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
              className={`flex items-center gap-1.5 whitespace-nowrap hover:text-accent-solar transition-colors duration-200 py-2 font-bold ${
                isProjectActive ? 'text-accent-solar' : 'text-text-primary'
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
                      <p className="text-[10px] text-text-secondary">Decentralized Ground & Feeder Plants</p>
                    </div>
                  </Link>

                  <Link
                    href="/projects/pm-kusum-bess"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-500 group-hover:scale-110 transition-transform">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('projectsDropdown.pmKusumBess')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Solar Energy Storage & Microgrids</p>
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
            href="/calculator"
            className={`whitespace-nowrap hover:text-accent-solar transition-colors duration-200 font-bold ${
              pathname === '/calculator' ? 'text-accent-solar' : 'text-text-primary'
            }`}
          >
            Get Full Quotation
          </Link>

          <Link
            href="/export"
            className={`whitespace-nowrap hover:text-accent-solar transition-colors duration-200 font-bold ${
              pathname === '/export' ? 'text-accent-solar' : 'text-text-primary'
            }`}
          >
            {t('nav.export')}
          </Link>

          {/* Interactive Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 whitespace-nowrap hover:text-accent-solar transition-colors duration-200 py-2 font-bold ${
                isCompanyActive ? 'text-accent-solar' : 'text-text-primary'
              }`}
            >
              <span>{t('nav.company')}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  companyDropdownOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {/* Dropdown Card Menu */}
            {companyDropdownOpen && (
              <div className="absolute top-full -left-4 w-72 pt-2 animate-fade-in z-50">
                <div className="p-3 rounded-2xl bg-bg-primary/95 backdrop-blur-xl border border-line shadow-2xl flex flex-col gap-1.5">
                  <Link
                    href="/vendor-registration"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-solar/10 text-accent-solar group-hover:scale-110 transition-transform">
                      <ClipboardList className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('companyDropdown.vendorRegistration')}
                      </p>
                      <p className="text-[10px] text-text-secondary">{t('companyDropdown.vendorRegistrationSub')}</p>
                    </div>
                  </Link>

                  <Link
                    href="/working-methodology"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-sky/10 text-accent-sky group-hover:scale-110 transition-transform">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('companyDropdown.methodology')}
                      </p>
                      <p className="text-[10px] text-text-secondary">{t('companyDropdown.methodologySub')}</p>
                    </div>
                  </Link>


                  <Link
                    href="/careers"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold group-hover:scale-110 transition-transform">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('companyDropdown.careers')}
                      </p>
                      <p className="text-[10px] text-text-secondary">{t('companyDropdown.careersSub')}</p>
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-secondary/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary group-hover:text-accent-solar">
                        {t('nav.contact')}
                      </p>
                      <p className="text-[10px] text-text-secondary">Get in touch with EPC experts</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
          {/* Multi-Language Selector Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              data-cursor="pointer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line hover:border-accent-solar bg-bg-secondary text-xs font-bold text-text-primary transition-all duration-300 shadow-sm"
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
              className="p-2 rounded-full border border-line hover:border-accent-solar bg-bg-secondary text-text-primary hover:text-accent-solar transition-all duration-300 relative overflow-hidden shadow-sm"
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
            className="relative group overflow-hidden px-4 xl:px-5 py-2 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 shrink-0"
          >
            <span className="relative z-10">{t('getQuote')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
        <div className="lg:hidden fixed inset-x-0 top-full bg-bg-primary/98 backdrop-blur-2xl border-b border-line p-6 flex flex-col gap-4 shadow-2xl animate-mobile-drawer max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain pb-32 z-50">
          <Link
            href="/about-us"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '40ms' }}
            className={`text-xl font-bold animate-mobile-item transition-colors ${
              pathname === '/about-us'
                ? 'text-accent-solar'
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
              className="flex items-center justify-between text-xl font-bold text-text-primary hover:text-accent-solar w-full transition-colors"
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

                <div className="pl-6 flex flex-col gap-2 border-l border-line/60 text-xs">
                  <Link
                    href="/products/solar-panels#topcon"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent-solar transition-colors"
                  >
                    <span>• {t('productsDropdown.topconPanels')}</span>
                  </Link>
                  <Link
                    href="/products/solar-panels#dcr"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    <span>• {t('productsDropdown.dcrPanels')}</span>
                  </Link>
                </div>
                <Link
                  href="/products/inverters"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Zap className="w-4 h-4 text-accent-sky" />
                  <span>{t('productsDropdown.inverters')}</span>
                </Link>

                <div className="pl-6 flex flex-col gap-2 border-l border-line/60 text-xs">
                  <Link
                    href="/products/inverters#ongrid"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent-sky transition-colors"
                  >
                    <span>• {t('productsDropdown.onGridInverters')}</span>
                  </Link>
                  <Link
                    href="/products/inverters#offgrid"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent-gold transition-colors"
                  >
                    <span>• {t('productsDropdown.offGridInverters')}</span>
                  </Link>
                  <Link
                    href="/products/inverters#hybrid"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    <span>• {t('productsDropdown.hybridInverters')}</span>
                  </Link>
                </div>
                <Link
                  href="/products/battery"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <BatteryCharging className="w-4 h-4 text-accent-gold" />
                  <span>{t('productsDropdown.battery')}</span>
                </Link>

                <div className="pl-6 flex flex-col gap-2 border-l border-line/60 text-xs">
                  <Link
                    href="/products/battery#lithium-ion"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent-gold transition-colors"
                  >
                    <span>• {t('productsDropdown.lithiumIonBattery')}</span>
                  </Link>
                </div>

                <Link
                  href="/products/bess"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span>{t('productsDropdown.bess')}</span>
                </Link>

                <div className="pl-6 flex flex-col gap-2 border-l border-line/60 text-xs">
                  <Link
                    href="/products/bess#ess3532"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    <span>• {t('productsDropdown.ess3532')}</span>
                  </Link>
                  <Link
                    href="/products/bess#liups1250"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-accent-gold transition-colors"
                  >
                    <span>• {t('productsDropdown.liUps1250')}</span>
                  </Link>
                </div>

                <Link
                  href="/products/franchise-sgy"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-emerald-500 transition-colors font-semibold"
                >
                  <Store className="w-4 h-4 text-emerald-500" />
                  <span>Complete Solar Kit & PM SGY Franchise</span>
                </Link>
                <Link
                  href="/products"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-accent-solar font-semibold pt-1 transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  <span>{t('productsDropdown.allProducts')}</span>
                </Link>

                <a
                  href="/Paa_Solar_Product_Catalogue_2026.pdf"
                  download="Paa_Solar_Product_Catalogue_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-white bg-accent-solar hover:bg-accent-solar/90 font-bold px-3 py-2 rounded-xl text-xs shadow-sm transition-all mt-1 w-fit"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogue (PDF)</span>
                </a>
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
            href="/calculator"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '150ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            Get Full Quotation
          </Link>

          <Link
            href="/export"
            onClick={() => setMobileOpen(false)}
            style={{ animationDelay: '160ms' }}
            className="text-lg font-medium text-text-primary hover:text-accent-solar animate-mobile-item transition-colors"
          >
            {t('nav.export')}
          </Link>
          {/* Mobile Accordion Company */}
          <div
            style={{ animationDelay: '200ms' }}
            className="flex flex-col gap-2 pb-1 animate-mobile-item"
          >
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="flex items-center justify-between text-lg font-medium text-text-primary hover:text-accent-solar w-full transition-colors"
            >
              <span>{t('nav.company')}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  mobileCompanyOpen ? 'rotate-180 text-accent-solar' : ''
                }`}
              />
            </button>

            {mobileCompanyOpen && (
              <div className="flex flex-col gap-3 pl-4 pt-2 text-sm text-text-secondary animate-accordion overflow-hidden">
                <Link
                  href="/vendor-registration"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <ClipboardList className="w-4 h-4 text-accent-solar" />
                  <span>{t('companyDropdown.vendorRegistration')}</span>
                </Link>
                <Link
                  href="/working-methodology"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Workflow className="w-4 h-4 text-accent-sky" />
                  <span>{t('companyDropdown.methodology')}</span>
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-accent-solar transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-accent-gold" />
                  <span>{t('companyDropdown.careers')}</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Language Selector */}
          <div
            style={{ animationDelay: '240ms' }}
            className="pt-4 border-t border-line space-y-2.5 animate-mobile-item"
          >
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-text-secondary font-semibold">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent-solar" />
                <span>Select Language</span>
              </div>
              <span className="text-[10px] text-accent-solar font-bold bg-accent-solar/10 px-2 py-0.5 rounded-full">
                {currentLang.native} {currentLang.flag}
              </span>
            </div>

            {/* Scrollable Language Chips */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-6 px-6 scroll-smooth">
              {LANGUAGES.map((lang) => {
                const active = lang.code === locale;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                      active
                        ? 'border-accent-solar bg-accent-solar text-white font-bold shadow-md shadow-accent-solar/20 scale-[1.02]'
                        : 'border-line bg-bg-secondary/60 text-text-primary hover:border-accent-solar/50 hover:bg-bg-secondary'
                    }`}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.native}</span>
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
