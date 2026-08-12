'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export function VendorForm() {
  const t = useTranslations('CorporatePages.vendor');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    category: 'supplier',
    email: '',
    phone: '',
    gst: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl p-8 bg-bg-secondary/70 border border-line shadow-2xl backdrop-blur-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-text-primary">Registration Received!</h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto">{t('successMsg')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-text-primary border-b border-line pb-4 mb-6">
            {t('formTitle')}
          </h3>

          <div>
            <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
              {t('companyName')}
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500"
              placeholder="e.g. Acme Solar Components Pvt Ltd"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                {t('category')}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500"
              >
                <option value="supplier">{t('categorySupplier')}</option>
                <option value="epc">{t('categoryEPC')}</option>
                <option value="civil">{t('categoryCivil')}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                {t('experience')}
              </label>
              <input
                type="text"
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500"
                placeholder="e.g. 5+ Years"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500"
                placeholder="procurement@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
                {t('phone')}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-text-secondary mb-2">
              {t('gst')}
            </label>
            <input
              type="text"
              required
              value={formData.gst}
              onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500"
              placeholder="27AAAAA0000A1Z5"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-lg"
          >
            {t('submit')}
          </button>
        </form>
      )}
    </div>
  );
}
