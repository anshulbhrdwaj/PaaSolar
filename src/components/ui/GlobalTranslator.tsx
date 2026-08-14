'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Globe2,
  Search,
  X,
  Check,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Flame,
  Languages,
} from 'lucide-react';
import { WORLD_LANGUAGES, WorldLanguage } from '@/data/worldLanguages';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

// RTL language codes
const RTL_CODES = new Set(['ar', 'he', 'fa', 'ur', 'ps', 'yi', 'sd', 'ug', 'ku']);

export function GlobalTranslator() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'popular' | 'indian' | 'global'>('all');
  const [currentLangCode, setCurrentLangCode] = useState('en');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Initialize Google Translate Script
  useEffect(() => {
    // Check existing googtrans cookie
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
    if (match && match[1]) {
      const parts = decodeURIComponent(match[1]).split('/');
      const activeCode = parts[parts.length - 1];
      if (activeCode) {
        setCurrentLangCode(activeCode);
        if (RTL_CODES.has(activeCode)) {
          document.documentElement.dir = 'rtl';
        }
      }
    }

    // Define the global init callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE || 0,
          },
          'google_translate_element'
        );
        setScriptLoaded(true);
      }
    };

    // Load Google Translate script if not already present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      setScriptLoaded(true);
    }

    // Listen for custom open event
    const handleOpenTranslator = () => setIsOpen(true);
    window.addEventListener('open-global-translator', handleOpenTranslator);

    return () => {
      window.removeEventListener('open-global-translator', handleOpenTranslator);
    };
  }, []);

  // Filter languages based on search and category
  const filteredLanguages = useMemo(() => {
    return WORLD_LANGUAGES.filter((lang) => {
      const matchesSearch =
        search === '' ||
        lang.name.toLowerCase().includes(search.toLowerCase()) ||
        lang.native.toLowerCase().includes(search.toLowerCase()) ||
        lang.code.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedCategory === 'popular') {
        return lang.popular === true;
      }
      if (selectedCategory === 'indian') {
        return ['hi', 'mr', 'gu', 'ta', 'te', 'kn', 'bn', 'ml', 'pa', 'ur', 'or', 'as', 'ne', 'sa', 'sd'].includes(
          lang.code
        );
      }
      if (selectedCategory === 'global') {
        return ['ar', 'es', 'de', 'fr', 'zh-CN', 'zh-TW', 'ja', 'ru', 'pt', 'it', 'ko', 'tr', 'fa', 'id', 'ms', 'th', 'vi', 'nl', 'pl', 'uk', 'he', 'el', 'sv'].includes(
          lang.code
        );
      }

      return true;
    });
  }, [search, selectedCategory]);

  const activeLanguageObj = useMemo(() => {
    return WORLD_LANGUAGES.find((l) => l.code === currentLangCode) || WORLD_LANGUAGES[1]; // default English
  }, [currentLangCode]);

  // Apply translation to any language in the world
  const translateTo = (langCode: string) => {
    setCurrentLangCode(langCode);

    // Set RTL direction if applicable
    if (RTL_CODES.has(langCode)) {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    // Set Google Translate Cookie (/auto/langCode or /en/langCode)
    const cookieValue = `/auto/${langCode}`;
    const domain = window.location.hostname;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;

    // Also trigger the Google Translate DOM select box if available
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      // Reload to ensure deep translation across the whole DOM
      window.location.reload();
    }

    setIsOpen(false);
  };

  // Reset back to original English
  const resetToOriginal = () => {
    setCurrentLangCode('en');
    document.documentElement.dir = 'ltr';
    const domain = window.location.hostname;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = 'en';
      selectElem.dispatchEvent(new Event('change'));
    }
    window.location.reload();
  };

  return (
    <>
      {/* Hidden Google Translate Target */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Floating Global Translate Quick Pill (Always Accessible) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-bg-primary/95 dark:bg-bg-secondary/95 backdrop-blur-md border border-line hover:border-accent-solar/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Translate website into any global language"
        >
          <div className="w-6 h-6 rounded-full bg-accent-solar/15 text-accent-solar flex items-center justify-center font-bold text-xs">
            <Globe2 className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
            <span>{activeLanguageObj.flag}</span>
            <span className="max-w-[100px] truncate">{activeLanguageObj.name}</span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-accent-solar font-bold px-1.5 py-0.5 rounded bg-accent-solar/10">
            130+ Langs
          </span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-bg-primary border border-line shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-line bg-bg-secondary/40">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-accent-solar/15 text-accent-solar border border-accent-solar/30">
                    <Languages className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-2">
                      Translate Website
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-accent-solar/15 text-accent-solar border border-accent-solar/30">
                        <Sparkles className="w-3 h-3" /> 130+ World Languages
                      </span>
                    </h3>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Translate all pages, technical specs, calculators, and content into any language instantly.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search 130+ languages (e.g. French, Arabic, Russian, Spanish, 日本語, Deutsch)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-bg-primary border border-line text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent-solar focus:ring-2 focus:ring-accent-solar/20 transition-all shadow-inner"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3.5 top-3.5 text-text-secondary hover:text-text-primary"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { id: 'all', label: 'All (130+)' },
                  { id: 'popular', label: '⭐ Popular' },
                  { id: 'indian', label: '🇮🇳 Indian & Regional' },
                  { id: 'global', label: '🌍 Major Global' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === tab.id
                        ? 'bg-accent-solar text-white shadow-md'
                        : 'bg-bg-secondary/80 text-text-secondary hover:text-text-primary border border-line'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}

                {currentLangCode !== 'en' && (
                  <button
                    onClick={resetToOriginal}
                    className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-white transition-all whitespace-nowrap"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset to Original
                  </button>
                )}
              </div>
            </div>

            {/* Language Grid */}
            <div className="p-6 overflow-y-auto max-h-[55vh] divide-y divide-line/40">
              {filteredLanguages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {filteredLanguages.map((lang) => {
                    const isCurrent = currentLangCode === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => translateTo(lang.code)}
                        className={`p-3 rounded-2xl text-left transition-all flex items-center justify-between border ${
                          isCurrent
                            ? 'bg-accent-solar/15 border-accent-solar text-accent-solar font-bold shadow-sm'
                            : 'bg-bg-secondary/40 hover:bg-bg-secondary border-line/60 hover:border-accent-solar/40 text-text-primary'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-2xl shrink-0">{lang.flag}</span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold truncate flex items-center gap-1.5">
                              <span>{lang.name}</span>
                              {lang.popular && (
                                <Flame className="w-3 h-3 text-amber-500 shrink-0" />
                              )}
                            </div>
                            <div className="text-xs text-text-secondary truncate font-medium opacity-80">
                              {lang.native}
                            </div>
                          </div>
                        </div>

                        {isCurrent ? (
                          <div className="w-5 h-5 rounded-full bg-accent-solar text-white flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-text-secondary/40 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="py-12 text-center text-text-secondary">
                  <Globe2 className="w-8 h-8 mx-auto mb-2 opacity-40 animate-spin" />
                  <p className="text-sm font-medium">No languages match &ldquo;{search}&rdquo;</p>
                  <p className="text-xs opacity-75 mt-1">Try searching by English name or native alphabet.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 bg-bg-secondary/60 border-t border-line flex flex-wrap items-center justify-between gap-3 text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Instant Full-Website Neural Translation • 130+ World Dialects</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Active: <strong>{activeLanguageObj.flag} {activeLanguageObj.name}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
