'use client';

import React, { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import {
  Calculator,
  Sun,
  Zap,
  IndianRupee,
  TrendingUp,
  Building2,
  Home,
  Factory,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  User,
  Mail,
  Phone,
  ShieldCheck,
  Info,
  Layers,
  Award,
  Upload,
  FileText,
  Paperclip,
  X,
} from 'lucide-react';
import { EmiCalculator } from '@/components/sections/EmiCalculator';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  district?: string;
  avgBill?: string;
  connectionKw?: string;
  roofSpace?: string;
  billFile?: string;
}

export function SolarCalculator() {
  const t = useTranslations('Calc');
  const [activeTab, setActiveTab] = useState<'sizing' | 'emi'>('sizing');

  // Input States
  const [avgBill, setAvgBill] = useState<number>(15000);
  const [fixRent, setFixRent] = useState<number>(1200);
  const [connectionKw, setConnectionKw] = useState<number>(15);
  const [roofSpace, setRoofSpace] = useState<number>(1500);
  const [roofType, setRoofType] = useState<'rooftop' | 'ground' | 'tin-shed'>('rooftop');
  
  // User Contact & File Attachment
  const [city, setCity] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [billFile, setBillFile] = useState<File | null>(null);
  
  // Validation & Form Submission State
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Calculation Engine Logic
  const calc = useMemo(() => {
    // 1. Tariff & Energy Consumption
    const avgTariffPerUnit = 8.5; // Average tariff rate ₹8.5 per kWh in India
    const netEnergyCost = Math.max(0, avgBill - fixRent);
    const monthlyUnits = netEnergyCost / avgTariffPerUnit;
    
    // 2. Solar Generation Capability (India Average: 1kW solar yields ~120-135 units/month)
    const rawRecommendedKw = monthlyUnits / 125;
    const finalSystemKw = Math.round(rawRecommendedKw * 10) / 10;
    
    // 3. Roof Space Requirement (1 kW requires ~90-100 sq. ft. solar module area)
    const requiredAreaSqFt = Math.round(finalSystemKw * 95);
    const monthlyGenerationUnits = Math.round(finalSystemKw * 125);
    
    // 4. Energy Bill Savings & Carbon Offset Calculation
    const monthlySavings = Math.round(monthlyGenerationUnits * avgTariffPerUnit);
    const annualSavings = monthlySavings * 12;
    const lifetimeSavings25Yrs = annualSavings * 25;

    // 5. Turnkey Project Cost Calculation
    let grossProjectCost = Math.round(finalSystemKw * 52000); // ₹52k/kW benchmark EPC cost
    if (finalSystemKw <= 3) grossProjectCost = Math.round(finalSystemKw * 58000);
    
    const pmSgySubsidy = 0;
    const netInvestmentCost = grossProjectCost;
    const paybackYears = annualSavings > 0 ? Math.round((grossProjectCost / annualSavings) * 10) / 10 : 3.8;
    const annualCo2OffsetTons = Math.round(finalSystemKw * 1.35 * 10) / 10;
    const equivalentTreesPlanted = Math.round(annualCo2OffsetTons * 45);

    // Feasibility Warnings
    const spaceShortage = roofSpace > 0 && roofSpace < requiredAreaSqFt;
    const loadExceeded = connectionKw > 0 && finalSystemKw > connectionKw;

    return {
      monthlyUnits: Math.round(monthlyUnits),
      rawRecommendedKw,
      finalSystemKw,
      requiredAreaSqFt,
      monthlyGenerationUnits,
      monthlySavings,
      annualSavings,
      lifetimeSavings25Yrs,
      grossProjectCost,
      pmSgySubsidy,
      netInvestmentCost,
      paybackYears,
      annualCo2OffsetTons,
      equivalentTreesPlanted,
      spaceShortage,
      loadExceeded,
    };
  }, [avgBill, fixRent, connectionKw, roofSpace, roofType]);

  // Form Validation Engine
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (min 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
    if (!phone.trim() || cleanPhone.length < 10 || !/^[0-9]+$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!city.trim()) {
      newErrors.city = 'Please enter your city';
    }

    if (!district.trim()) {
      newErrors.district = 'Please enter your district or state';
    }

    if (!avgBill || avgBill <= 0) {
      newErrors.avgBill = 'Monthly bill must be greater than ₹0';
    }

    if (!connectionKw || connectionKw <= 0) {
      newErrors.connectionKw = 'Connection load must be greater than 0 kW';
    }

    if (!roofSpace || roofSpace <= 0) {
      newErrors.roofSpace = 'Roof space must be greater than 0 sq. ft.';
    }

    if (billFile && billFile.size > 10 * 1024 * 1024) {
      newErrors.billFile = 'File size exceeds 10MB limit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('fullName', name.trim());
      formData.append('email', email.trim());
      formData.append('phone', phone.trim());
      formData.append('city', city.trim());
      formData.append('district', district.trim());
      formData.append('avgBill', avgBill.toString());
      formData.append('fixRent', fixRent.toString());
      formData.append('connectionKw', connectionKw.toString());
      formData.append('roofSpace', roofSpace.toString());
      formData.append('roofType', roofType);
      formData.append('recommendedKw', calc.finalSystemKw.toString());
      formData.append('monthlySavings', calc.monthlySavings.toString());
      formData.append('annualSavings', calc.annualSavings.toString());
      formData.append('grossCost', calc.grossProjectCost.toString());
      formData.append('subsidy', calc.pmSgySubsidy.toString());
      formData.append('netInvestment', calc.netInvestmentCost.toString());
      formData.append('paybackYears', calc.paybackYears.toString());

      if (billFile) {
        formData.append('billFile', billFile);
      }

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        console.error('Failed to submit inquiry to server');
      }
    } catch (err) {
      console.error('Error submitting inquiry:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-bg-secondary/40 border-y border-line relative overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-solar/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 leading-relaxed font-medium">
            {t('subtitle')}
          </p>
        </div>

        {/* Tab Switcher Bar */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-bg-primary border border-line shadow-lg">
            <button
              onClick={() => setActiveTab('sizing')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'sizing'
                  ? 'bg-accent-solar text-white shadow-md scale-105'
                  : 'text-text-primary hover:bg-bg-secondary'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>{t('tabSizing')}</span>
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'emi'
                  ? 'bg-emerald-500 text-white shadow-md scale-105'
                  : 'text-text-primary hover:bg-bg-secondary'
              }`}
            >
              <IndianRupee className="w-4 h-4" />
              <span>{t('tabEmi')}</span>
            </button>
          </div>
        </div>

        {activeTab === 'emi' ? (
          <EmiCalculator initialSystemCost={calc.netInvestmentCost} />
        ) : (
          /* Main 2-Column Grid for System Sizing */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Input Form Parameters (7 cols) */}
          <div className="lg:col-span-7 bg-bg-primary rounded-3xl p-6 sm:p-10 border border-line shadow-2xl space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-line">
              <h3 className="font-serif text-2xl font-bold text-text-primary flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-accent-solar" />
                <span>{t('inputTitle')}</span>
              </h3>
              <span className="text-xs font-mono font-semibold text-accent-solar px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/20">
                {t('liveSync')}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Average Electricity Bill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-accent-solar" />
                    <span>{t('avgBillLabel')}</span>
                  </label>
                  <span className="font-mono text-base font-bold text-accent-solar">
                    ₹{avgBill.toLocaleString('en-IN')} / mo
                  </span>
                </div>
                <input
                  type="number"
                  min="500"
                  max="1000000"
                  step="500"
                  value={avgBill}
                  onChange={(e) => setAvgBill(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-base font-bold transition-all"
                  placeholder="e.g. 15000"
                />
                {/* Preset quick buttons */}
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {[3000, 8000, 15000, 35000, 75000, 150000].map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => setAvgBill(amt)}
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-lg border transition-all ${
                        avgBill === amt
                          ? 'bg-accent-solar text-white border-accent-solar shadow-md'
                          : 'bg-bg-secondary text-text-secondary border-line hover:border-accent-solar/40'
                      }`}
                    >
                      ₹{(amt / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>
              </div>

              {/* 2-Column Sub Inputs: Fix Rent & Connection Load */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field 2: Fix Rent / Fixed Charge */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                    {t('fixRentLabel')}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100000"
                    step="100"
                    value={fixRent}
                    onChange={(e) => setFixRent(Number(e.target.value))}
                    className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-base font-bold"
                    placeholder="e.g. 1200"
                  />
                </div>

                {/* Field 3: Connection in kW */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                    {t('connectionKwLabel')}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5000"
                    step="1"
                    value={connectionKw}
                    onChange={(e) => setConnectionKw(Number(e.target.value))}
                    className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-base font-bold"
                    placeholder="e.g. 15"
                  />
                </div>
              </div>

              {/* Field 4: Roof Space */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                  {t('roofSpaceLabel')}
                </label>
                <input
                  type="number"
                  min="100"
                  max="500000"
                  step="100"
                  value={roofSpace}
                  onChange={(e) => setRoofSpace(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-base font-bold"
                  placeholder="e.g. 1500"
                />
              </div>

              {/* Field 5: Installation Roof Type */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                  {t('roofTypeLabel')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'rooftop', label: t('rooftopRcc'), icon: <Home className="w-4 h-4 shrink-0" /> },
                      { id: 'tin-shed', label: t('tinShed'), icon: <Factory className="w-4 h-4 shrink-0" /> },
                      { id: 'ground', label: t('groundPlant'), icon: <Building2 className="w-4 h-4 shrink-0" /> },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setRoofType(item.id as any)}
                        className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 text-xs font-bold transition-all text-center leading-snug min-h-[52px] ${
                          roofType === item.id
                            ? 'bg-accent-solar text-white border-accent-solar shadow-md scale-[1.02]'
                            : 'bg-bg-secondary border-line text-text-primary hover:border-accent-solar/40 hover:bg-bg-secondary/80'
                        }`}
                      >
                        {item.icon}
                        <span className="text-[11px] sm:text-xs font-semibold">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

              {/* USER CONTACT DETAILS SECTION */}
              <div className="pt-6 border-t border-line space-y-4">
                <h4 className="font-serif text-lg font-bold text-text-primary flex items-center gap-2">
                  <User className="w-4 h-4 text-accent-solar" />
                  <span>{t('contactTitle')}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">{t('cityLabel')}</label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-text-primary text-sm font-semibold focus:outline-none transition-all ${
                        errors.city
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-line focus:border-accent-solar'
                      }`}
                    />
                    {errors.city && <p className="text-xs font-medium text-rose-500 mt-1">{errors.city}</p>}
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">{t('districtLabel')}</label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur District"
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        if (errors.district) setErrors((prev) => ({ ...prev, district: undefined }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-text-primary text-sm font-semibold focus:outline-none transition-all ${
                        errors.district
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-line focus:border-accent-solar'
                      }`}
                    />
                    {errors.district && <p className="text-xs font-medium text-rose-500 mt-1">{errors.district}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">{t('nameLabel')}</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-text-primary text-sm font-semibold focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-line focus:border-accent-solar'
                      }`}
                    />
                    {errors.name && <p className="text-xs font-medium text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email ID */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">{t('emailLabel')}</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-text-primary text-sm font-semibold focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-line focus:border-accent-solar'
                      }`}
                    />
                    {errors.email && <p className="text-xs font-medium text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">{t('phoneLabel')}</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-text-primary text-sm font-semibold focus:outline-none transition-all ${
                        errors.phone
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30'
                          : 'border-line focus:border-accent-solar'
                      }`}
                    />
                    {errors.phone && <p className="text-xs font-medium text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* File Attachment: Electricity Bill Upload */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-text-primary font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5 text-accent-solar" />
                      {t('billAttachLabel')}
                    </span>
                    <span className="text-[10px] text-text-secondary font-normal font-mono">{t('billNotice')}</span>
                  </label>

                  {!billFile ? (
                    <label className="border-2 border-dashed border-line hover:border-accent-solar/60 bg-bg-secondary/60 hover:bg-bg-secondary rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all text-center group">
                      <div className="p-2.5 rounded-full bg-accent-solar/10 text-accent-solar group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold text-text-primary">Click or drag bill copy here</p>
                        <p className="text-[11px] text-text-secondary font-medium">Upload your latest DISCOM bill for exact tariff & net metering analysis</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setBillFile(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-accent-solar/10 border border-accent-solar/30 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 text-accent-solar font-semibold truncate">
                        <Paperclip className="w-4 h-4 shrink-0" />
                        <span className="truncate">{billFile.name}</span>
                        <span className="text-[10px] font-mono text-text-secondary">({(billFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBillFile(null)}
                        className="p-1.5 rounded-lg border border-line bg-bg-primary hover:bg-rose-500 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-accent-solar text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t('submittingBtn')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('submitBtn')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Calculation Output Dashboard (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {!submitted ? (
              /* BEFORE SUBMISSION PREVIEW PLACEHOLDER CARD */
              <div className="p-8 sm:p-10 rounded-3xl bg-bg-primary border border-line shadow-2xl space-y-6 text-center flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-accent-solar/10 rounded-full blur-2xl pointer-events-none" />

                <div className="p-4 rounded-full bg-accent-solar/15 text-accent-solar shadow-inner border border-accent-solar/30">
                  <Calculator className="w-10 h-10 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-accent-solar uppercase tracking-wider px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/20">
                    {t('liveSync')}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                    {t('resultsTitle')}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                    {t('resultsSubtitle')}
                  </p>
                </div>

                {/* Realtime Live Teaser Badges */}
                <div className="w-full pt-4 border-t border-line/60 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3.5 rounded-2xl bg-bg-secondary border border-line">
                    <span className="text-[10px] font-mono text-text-secondary uppercase font-bold block">{t('recommendedKw')}</span>
                    <span className="font-serif text-lg font-bold text-text-primary">~{calc.finalSystemKw} kW Solar</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-bg-secondary border border-line">
                    <span className="text-[10px] font-mono text-text-secondary uppercase font-bold block">{t('monthlySavings')}</span>
                    <span className="font-serif text-lg font-bold text-emerald-500">~₹{calc.monthlySavings.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ) : (
              /* AFTER SUBMISSION DETAILED RESULTS DASHBOARD */
              <div className="space-y-6 animate-fade-in">
                {/* Submission Success Confirmation Badge */}
                <div className="p-5 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500 text-emerald-500 space-y-1 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-serif text-lg font-bold text-text-primary">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>{t('resultsTitle')}</span>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-text-secondary hover:text-accent-solar underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-xs text-text-primary/90 font-medium">
                    {t('resultsSubtitle')}
                  </p>
                </div>

                {/* Primary Recommended Capacity Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-2 border-accent-solar/60 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 text-accent-solar/10 pointer-events-none">
                    <Sun className="w-32 h-32" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-solar/15 border border-accent-solar/30 text-accent-solar text-xs font-mono font-bold uppercase">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{t('recommendedKw')}</span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-5xl sm:text-6xl font-bold text-text-primary">
                        {calc.finalSystemKw}
                      </span>
                      <span className="font-serif text-2xl font-bold text-accent-solar">kW Solar</span>
                    </div>

                    <p className="text-text-secondary text-sm font-medium">
                      Generates ~<strong className="text-text-primary">{calc.monthlyGenerationUnits.toLocaleString('en-IN')} units</strong>/month
                    </p>

                    {/* Feasibility Badges */}
                    <div className="pt-4 border-t border-line/60 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-text-primary">
                        <span className="text-text-secondary">Space:</span>
                        <span className="font-mono text-accent-solar font-bold">{calc.requiredAreaSqFt} Sq. Ft.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Savings & Investment Grid */}
                <div className="p-6 sm:p-8 rounded-3xl bg-bg-primary border border-line shadow-xl space-y-6">
                  <h4 className="font-serif text-xl font-bold text-text-primary flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <span>{t('resultsTitle')}</span>
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Monthly Savings */}
                    <div className="p-4 rounded-2xl bg-bg-secondary border border-line">
                      <span className="text-[10px] font-mono font-bold text-text-secondary uppercase">{t('monthlySavings')}</span>
                      <p className="font-serif text-2xl font-bold text-emerald-500 mt-1">
                        ₹{calc.monthlySavings.toLocaleString('en-IN')}
                      </p>
                    </div>

                    {/* Annual Savings */}
                    <div className="p-4 rounded-2xl bg-bg-secondary border border-line">
                      <span className="text-[10px] font-mono font-bold text-text-secondary uppercase">Annual Savings</span>
                      <p className="font-serif text-2xl font-bold text-accent-solar mt-1">
                        ₹{calc.annualSavings.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>

                  {/* Turnkey Investment Cost & 25-Yr Return Summary */}
                  <div className="p-4 rounded-2xl bg-bg-secondary/70 border border-line space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-text-secondary">25-Yr Lifetime Return:</span>
                      <span className="font-mono text-emerald-500 font-bold">₹{calc.lifetimeSavings25Yrs.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="pt-2 border-t border-line/60 flex items-center justify-between text-sm font-bold">
                      <span className="text-text-primary">Turnkey EPC Cost:</span>
                      <span className="font-mono text-accent-solar text-base">₹{calc.grossProjectCost.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Payback & CO2 Impact */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-accent-gold/10 border border-accent-gold/30">
                      <span className="text-[10px] font-mono font-bold text-accent-gold uppercase">{t('paybackYears')}</span>
                      <p className="font-serif text-2xl font-bold text-text-primary mt-1">
                        ~{calc.paybackYears} {t('years')}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                      <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase">{t('co2Offset')}</span>
                      <p className="font-serif text-2xl font-bold text-emerald-500 mt-1 truncate">
                        {calc.annualCo2OffsetTons} {t('tons')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
        )}
      </div>
    </section>
  );
}
