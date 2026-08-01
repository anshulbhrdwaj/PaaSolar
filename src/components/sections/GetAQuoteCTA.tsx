'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle2, Building, Home, Factory } from 'lucide-react';

export function GetAQuoteCTA() {
  const t = useTranslations('LeadForm');
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    propertyType: 'commercial',
    address: '',
    monthlyBill: 'billMed',
    batteryBackup: 'yes',
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="get-a-quote"
      className="relative py-28 bg-bg-primary overflow-hidden border-t border-line"
    >
      {/* Full-Bleed Radial Sunrise Backdrop Fingerprint */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] pointer-events-none rounded-full blur-3xl opacity-40 dark:opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, var(--accent-solar) 0%, var(--accent-gold) 40%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-base md:text-lg mt-3">
            {t('subtitle')}
          </p>
        </div>

        {/* Lead Form Card */}
        <div className="rounded-3xl p-8 md:p-12 bg-bg-secondary/80 border border-line shadow-2xl backdrop-blur-xl">
          {submitted ? (
            /* Submitted Success View */
            <div className="text-center py-12 flex flex-col items-center gap-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-text-primary">
                {t('step3.submittedTitle')}
              </h3>
              <p className="text-text-secondary text-base max-w-md">
                {t('step3.submittedMessage')}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="mt-4 px-6 py-2.5 rounded-full border border-line text-xs font-semibold uppercase tracking-wider text-text-primary hover:border-accent-solar transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            /* Multi-Step Wizard */
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Stepper Progress Bar Header */}
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent-solar text-white font-mono text-xs font-bold flex items-center justify-center">
                    0{step}
                  </span>
                  <span className="font-serif text-xl font-bold text-text-primary">
                    {step === 1 && t('step1.title')}
                    {step === 2 && t('step2.title')}
                    {step === 3 && t('step3.title')}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        s === step ? 'w-8 bg-accent-solar' : s < step ? 'w-2 bg-accent-gold' : 'w-2 bg-line'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Property Details */}
              {step === 1 && (
                <div className="flex flex-col gap-6 animate-fade-in">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-3">
                      {t('step1.propertyType')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { id: 'commercial', label: 'Commercial Rooftop', icon: <Building className="w-5 h-5" /> },
                        { id: 'industrial', label: 'Manufacturing Plant', icon: <Factory className="w-5 h-5" /> },
                        { id: 'utility', label: 'Utility Megawatt Park', icon: <Home className="w-5 h-5" /> },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, propertyType: item.id })}
                          className={`p-4 rounded-2xl border flex flex-col items-center gap-3 text-xs font-semibold transition-all duration-300 ${
                            formData.propertyType === item.id
                              ? 'bg-accent-solar/10 border-accent-solar text-accent-solar shadow-md'
                              : 'bg-bg-primary border-line text-text-secondary hover:border-accent-solar/40'
                          }`}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
                      {t('step1.address')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bandra West, Mumbai - 400050"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-bg-primary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Energy Consumption */}
              {step === 2 && (
                <div className="flex flex-col gap-6 animate-fade-in">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-3">
                      {t('step2.monthlyBill')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { id: 'billLow', label: t('step2.billLow') },
                        { id: 'billMed', label: t('step2.billMed') },
                        { id: 'billHigh', label: t('step2.billHigh') },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, monthlyBill: item.id })}
                          className={`p-4 rounded-2xl border text-xs font-semibold transition-all duration-300 ${
                            formData.monthlyBill === item.id
                              ? 'bg-accent-solar/10 border-accent-solar text-accent-solar shadow-md'
                              : 'bg-bg-primary border-line text-text-secondary hover:border-accent-solar/40'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-3">
                      {t('step2.backup')}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'yes', label: t('step2.yes') },
                        { id: 'no', label: t('step2.no') },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, batteryBackup: item.id })}
                          className={`p-4 rounded-2xl border text-xs font-semibold transition-all duration-300 ${
                            formData.batteryBackup === item.id
                              ? 'bg-accent-solar/10 border-accent-solar text-accent-solar shadow-md'
                              : 'bg-bg-primary border-line text-text-secondary hover:border-accent-solar/40'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="flex flex-col gap-6 animate-fade-in">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
                      {t('step3.name')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-bg-primary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
                        {t('step3.email')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@estates.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl bg-bg-primary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
                        {t('step3.phone')}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl bg-bg-primary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-line">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-full border border-line text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  data-cursor="explore"
                  className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl hover:bg-accent-solar/90 transition-all"
                >
                  <span>
                    {step === 1 && t('step1.next')}
                    {step === 2 && t('step2.next')}
                    {step === 3 && t('step3.submit')}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
