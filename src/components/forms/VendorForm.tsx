'use client';

import React, { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2, Upload, FileText, X, Loader2, Send, Paperclip } from 'lucide-react';

export function VendorForm() {
  const t = useTranslations('CorporatePages.vendor');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    companyName: '',
    category: 'supplier',
    email: '',
    phone: '',
    gst: '',
    experience: '',
    address: '',
    briefAbout: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        alert('File size exceeds 15MB limit.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 15 * 1024 * 1024) {
        alert('File size exceeds 15MB limit.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bodyData = new FormData();
      bodyData.append('formType', 'vendor');
      bodyData.append('fullName', formData.companyName);
      bodyData.append('email', formData.email);
      bodyData.append('phone', formData.phone);
      bodyData.append('city', formData.experience || 'Vendor Partner');
      bodyData.append('district', formData.address || formData.gst || 'GST Registered');
      bodyData.append('category', formData.category);
      bodyData.append('address', formData.address);
      bodyData.append('gst', formData.gst);
      bodyData.append('experience', formData.experience);
      bodyData.append('message', formData.briefAbout);
      bodyData.append(
        'roofType',
        `Vendor Registration [${formData.category}] | GST: ${formData.gst || 'N/A'} | Address: ${formData.address}`
      );

      if (attachedFile) {
        bodyData.append('billFile', attachedFile);
      }

      await fetch('/api/inquiries', {
        method: 'POST',
        body: bodyData,
      }).catch(() => null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="rounded-3xl p-8 sm:p-10 bg-bg-secondary/70 border border-line shadow-2xl backdrop-blur-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-text-primary">Registration Received!</h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">{t('successMsg')}</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setAttachedFile(null);
              setFormData({
                companyName: '',
                category: 'supplier',
                email: '',
                phone: '',
                gst: '',
                experience: '',
                address: '',
                briefAbout: '',
              });
            }}
            className="mt-6 px-6 py-2.5 rounded-full bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors"
          >
            Submit Another Registration
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-text-primary border-b border-line pb-4 mb-6 flex items-center justify-between">
            <span>{t('formTitle')}</span>
            <Paperclip className="w-5 h-5 text-emerald-500 opacity-60" />
          </h3>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
              {t('companyName')} *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              placeholder="e.g. Acme Solar Components Pvt Ltd"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                {t('category')} *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              >
                <option value="supplier">{t('categorySupplier')}</option>
                <option value="epc">{t('categoryEPC')}</option>
                <option value="civil">{t('categoryCivil')}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                {t('experience')} *
              </label>
              <input
                type="text"
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="e.g. 5+ Years"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                {t('email')} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="procurement@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                {t('phone')} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                {t('gst')} <span className="text-text-secondary font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.gst}
                onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="27AAAAA0000A1Z5"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                {t('address')} *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder={t('addressPlaceholder')}
              />
            </div>
          </div>

          {/* Brief About You / Company Overview */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
              {t('briefAbout')}
            </label>
            <textarea
              rows={4}
              value={formData.briefAbout}
              onChange={(e) => setFormData({ ...formData, briefAbout: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line text-sm text-text-primary focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
              placeholder={t('briefPlaceholder')}
            />
          </div>

          {/* File Attachment Option */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
              {t('attachment')}
            </label>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
              className="hidden"
              id="vendor-file-upload"
            />

            {!attachedFile ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-line hover:border-emerald-500/60 rounded-2xl p-6 text-center cursor-pointer bg-bg-primary/50 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-text-primary">
                  {t('uploadText')}
                </p>
                <p className="text-[11px] text-text-secondary mt-1">
                  Supported formats: PDF, DOCX, DOC, JPG, PNG (up to 15 MB)
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-primary border border-emerald-500/40 shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="truncate text-left">
                    <p className="text-xs sm:text-sm font-bold text-text-primary truncate">
                      {attachedFile.name}
                    </p>
                    <p className="text-[10px] font-mono text-text-secondary">
                      {(attachedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors shrink-0 ml-2"
                  title="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Registration...</span>
              </>
            ) : (
              <>
                <span>{t('submit')}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
