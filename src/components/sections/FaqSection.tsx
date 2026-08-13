'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function FaqSection() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: 'faq-1',
      question: t('q1'),
      answer: t('a1'),
      category: t('c1'),
    },
    {
      id: 'faq-2',
      question: t('q2'),
      answer: t('a2'),
      category: t('c2'),
    },
    {
      id: 'faq-3',
      question: t('q3'),
      answer: t('a3'),
      category: t('c3'),
    },
    {
      id: 'faq-4',
      question: t('q4'),
      answer: t('a4'),
      category: t('c4'),
    },
    {
      id: 'faq-5',
      question: t('q5'),
      answer: t('a5'),
      category: t('c5'),
    },
    {
      id: 'faq-6',
      question: t('q6'),
      answer: t('a6'),
      category: t('c6'),
    },
    {
      id: 'faq-7',
      question: t('q7'),
      answer: t('a7'),
      category: t('c7'),
    },
  ];

  return (
    <section id="faq" className="py-24 bg-bg-primary border-t border-line relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-solar/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-sm sm:text-base font-bold uppercase tracking-wider mb-4 shadow-md">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 leading-relaxed font-medium">
            {t('subtitle')}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-bg-secondary border-accent-solar/60 shadow-xl'
                    : 'bg-bg-secondary/40 border-line hover:border-accent-solar/40'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="p-2.5 rounded-2xl bg-accent-solar/10 text-accent-solar group-hover:scale-110 transition-transform shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent-solar transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {faq.category && (
                      <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-bg-primary border border-line text-text-secondary">
                        {faq.category}
                      </span>
                    )}
                    <span
                      className={`p-2 rounded-full border border-line bg-bg-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-accent-solar text-white border-accent-solar' : 'text-text-primary'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                {/* Animated Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-line/60 animate-fade-in">
                    <p className="text-text-secondary text-base leading-relaxed font-medium pl-14">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-accent-solar/10 via-bg-secondary to-accent-solar/10 border border-accent-solar/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <h3 className="font-serif text-xl font-bold text-text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-solar" />
              <span>{t('moreQuestions')}</span>
            </h3>
            <p className="text-xs text-text-secondary font-medium">
              {t('moreQuestionsSub')}
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all flex items-center gap-2 shrink-0"
          >
            <span>{t('askEngineer')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
