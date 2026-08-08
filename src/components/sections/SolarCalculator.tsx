'use client';

import React, { useState, useMemo } from 'react';
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
} from 'lucide-react';
import { EmiCalculator } from '@/components/sections/EmiCalculator';

export function SolarCalculator() {
  const [activeTab, setActiveTab] = useState<'sizing' | 'emi'>('sizing');

  // Input States
  const [avgBill, setAvgBill] = useState<number>(15000);
  const [fixRent, setFixRent] = useState<number>(1200);
  const [connectionKw, setConnectionKw] = useState<number>(15);
  const [roofSpace, setRoofSpace] = useState<number>(1500);
  const [roofType, setRoofType] = useState<'rooftop' | 'ground' | 'tin-shed'>('rooftop');
  
  // User Contact Details
  const [city, setCity] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Calculation Engine Logic
  const calc = useMemo(() => {
    // 1. Tariff & Energy Consumption
    const avgTariffPerUnit = 8.5; // Average tariff rate ₹8.5 per kWh in India
    const netEnergyCost = Math.max(0, avgBill - fixRent);
    const monthlyUnits = netEnergyCost / avgTariffPerUnit; // kWh per month
    const dailyUnits = monthlyUnits / 30; // kWh per day

    // 2. Solar System Capacity Required (1 kW generates ~4.0 kWh/day in India)
    const rawRecommendedKw = Math.max(1, Math.ceil((dailyUnits / 4.0) * 10) / 10);
    
    // 3. Space Constraint (1 kW solar requires ~90 sq. ft.)
    const requiredAreaSqFt = Math.ceil(rawRecommendedKw * 90);
    const maxKwBySpace = roofSpace > 0 ? Math.floor((roofSpace / 90) * 10) / 10 : rawRecommendedKw;
    
    // Optimal System Size considering space limit
    const finalSystemKw = Math.max(1, Math.min(rawRecommendedKw, maxKwBySpace > 0 ? maxKwBySpace : rawRecommendedKw));

    // 4. Roof Type Efficiency Multiplier
    const roofMultiplier = roofType === 'ground' ? 1.05 : roofType === 'tin-shed' ? 1.02 : 1.0;
    
    // 5. Expected Monthly & Daily Generation
    const dailyGenerationUnits = Math.round(finalSystemKw * 4.0 * roofMultiplier * 10) / 10;
    const monthlyGenerationUnits = Math.round(dailyGenerationUnits * 30);

    // 6. Savings Calculations
    const monthlySavings = Math.round(Math.min(avgBill, monthlyGenerationUnits * avgTariffPerUnit + fixRent * 0.5));
    const annualSavings = monthlySavings * 12;
    // 25-Year Cumulative Savings accounting for 4% annual grid electricity price escalation
    const lifetimeSavings25Yrs = Math.round(annualSavings * 25 * 1.35);

    // 7. Project Cost & Govt PM SGY Subsidy
    let pricePerKw = 52000;
    if (finalSystemKw > 10) pricePerKw = 48000;
    if (finalSystemKw > 50) pricePerKw = 42000;
    if (finalSystemKw > 100) pricePerKw = 38000;

    const grossProjectCost = Math.round(finalSystemKw * pricePerKw);

    // PM SGY Subsidy: Up to 3 kW = ₹78,000 max subsidy
    let pmSgySubsidy = 0;
    if (finalSystemKw <= 3) {
      pmSgySubsidy = Math.round(finalSystemKw * 26000);
    } else if (finalSystemKw <= 10) {
      pmSgySubsidy = 78000;
    } else {
      pmSgySubsidy = 78000; // Capped for PM SGY rooftop portion
    }

    const netInvestmentCost = Math.max(0, grossProjectCost - pmSgySubsidy);
    const paybackYears = annualSavings > 0 ? Math.round((netInvestmentCost / annualSavings) * 10) / 10 : 3.5;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span>SOLAR ROI & SIZING CALCULATOR</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            Calculate Your Solar Savings & Capacity
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 leading-relaxed font-medium">
            Enter your electricity bill, connection load, and space parameters to get instant turnkey engineering sizing, PM SGY subsidy estimates, and 25-year ROI.
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
              <span>1. System Sizing & Savings Calculator</span>
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
              <span>2. Solar Loan EMI & Financing</span>
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
                <span>System Sizing Inputs</span>
              </h3>
              <span className="text-xs font-mono font-semibold text-accent-solar px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/20">
                Live Formula Sync
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Average Electricity Bill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-accent-solar" />
                    <span>Average Monthly Electricity Bill (₹)</span>
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
                    Fixed Rent / Monthly Fixed Charges (₹)
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
                  <p className="text-[11px] text-text-secondary mt-1 font-medium">
                    Fixed meter charge specified on discom bill
                  </p>
                </div>

                {/* Field 3: Connection in kW */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                    Connection Load (kW)
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
                  <p className="text-[11px] text-text-secondary mt-1 font-medium">
                    Sanctioned load on your electricity connection
                  </p>
                </div>
              </div>

              {/* 2-Column Sub Inputs: Roof Space & Roof Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field 4: Roof Space */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                    Available Roof / Land Space (Sq. Ft.)
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
                  <p className="text-[11px] text-text-secondary mt-1 font-medium">
                    ~90 sq. ft. required per 1 kW solar
                  </p>
                </div>

                {/* Field 5: Roof Type */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                    Installation Roof Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'rooftop', label: 'Rooftop', icon: <Home className="w-3.5 h-3.5" /> },
                      { id: 'tin-shed', label: 'Tin Shed', icon: <Factory className="w-3.5 h-3.5" /> },
                      { id: 'ground', label: 'Ground', icon: <Building2 className="w-3.5 h-3.5" /> },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setRoofType(item.id as any)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-bold transition-all ${
                          roofType === item.id
                            ? 'bg-accent-solar text-white border-accent-solar shadow-md'
                            : 'bg-bg-secondary border-line text-text-primary hover:border-accent-solar/40'
                        }`}
                      >
                        {item.icon}
                        <span className="truncate">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* USER CONTACT DETAILS SECTION */}
              <div className="pt-6 border-t border-line space-y-4">
                <h4 className="font-serif text-lg font-bold text-text-primary flex items-center gap-2">
                  <User className="w-4 h-4 text-accent-solar" />
                  <span>Your Location & Contact Info</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">City</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm font-semibold"
                    />
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">District</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur District"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm font-semibold"
                    />
                  </div>

                  {/* Email ID */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">Email ID</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm font-semibold"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase mb-1 font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary text-sm font-semibold"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-accent-solar text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Detailed Engineering & Subsidy Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Live Calculation Output Dashboard (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Recommended Capacity Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-2 border-accent-solar/60 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-accent-solar/10 pointer-events-none">
                <Sun className="w-32 h-32" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-solar/15 border border-accent-solar/30 text-accent-solar text-xs font-mono font-bold uppercase">
                  <Zap className="w-3.5 h-3.5" />
                  <span>RECOMMENDED SOLAR PLANT CAPACITY</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-text-primary">
                    {calc.finalSystemKw}
                  </span>
                  <span className="font-serif text-2xl font-bold text-accent-solar">kW Solar</span>
                </div>

                <p className="text-text-secondary text-sm font-medium">
                  Generates ~<strong className="text-text-primary">{calc.monthlyGenerationUnits.toLocaleString('en-IN')} units</strong>/month using 22.8%+ N-Type TOPCon bifacial modules.
                </p>

                {/* Feasibility Badges */}
                <div className="pt-4 border-t border-line/60 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-text-primary">
                    <span className="text-text-secondary">Space Required:</span>
                    <span className="font-mono text-accent-solar font-bold">{calc.requiredAreaSqFt} Sq. Ft.</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-text-primary">
                    <span className="text-text-secondary font-semibold">Connection Load Match:</span>
                    <span className={`font-mono font-bold ${calc.loadExceeded ? 'text-amber-500' : 'text-emerald-500'}`}>
                      {connectionKw} kW Connection {calc.loadExceeded ? '(Load Expansion Advised)' : '(Sufficient Load)'}
                    </span>
                  </div>
                  {calc.spaceShortage && (
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-medium flex items-center gap-2">
                      <Info className="w-4 h-4 shrink-0" />
                      <span>Capacity adjusted to match {roofSpace} sq. ft. available space.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Financial Savings & Investment Grid */}
            <div className="p-6 sm:p-8 rounded-3xl bg-bg-primary border border-line shadow-xl space-y-6">
              <h4 className="font-serif text-xl font-bold text-text-primary flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <span>Financial Returns & Govt Subsidy</span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {/* Monthly Savings */}
                <div className="p-4 rounded-2xl bg-bg-secondary border border-line">
                  <span className="text-[10px] font-mono font-bold text-text-secondary uppercase">Est. Monthly Savings</span>
                  <p className="font-serif text-2xl font-bold text-emerald-500 mt-1">
                    ₹{calc.monthlySavings.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[11px] text-text-secondary font-medium">Up to 90% bill reduction</span>
                </div>

                {/* Annual Savings */}
                <div className="p-4 rounded-2xl bg-bg-secondary border border-line">
                  <span className="text-[10px] font-mono font-bold text-text-secondary uppercase">Annual Bill Savings</span>
                  <p className="font-serif text-2xl font-bold text-accent-solar mt-1">
                    ₹{calc.annualSavings.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[11px] text-text-secondary font-medium">Every 12 months</span>
                </div>
              </div>

              {/* Cost & PM SGY Subsidy Summary */}
              <div className="p-4 rounded-2xl bg-bg-secondary/70 border border-line space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-secondary">Turnkey Turnkey Project Cost:</span>
                  <span className="font-mono text-text-primary font-bold">₹{calc.grossProjectCost.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Govt PM SGY Subsidy:
                  </span>
                  <span className="font-mono text-emerald-500 font-bold">- ₹{calc.pmSgySubsidy.toLocaleString('en-IN')}</span>
                </div>

                <div className="pt-2 border-t border-line/60 flex items-center justify-between text-sm font-bold">
                  <span className="text-text-primary">Net Out-of-Pocket Cost:</span>
                  <span className="font-mono text-accent-solar text-base">₹{calc.netInvestmentCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Payback & 25-Yr Returns */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-accent-gold/10 border border-accent-gold/30">
                  <span className="text-[10px] font-mono font-bold text-accent-gold uppercase">Payback Period</span>
                  <p className="font-serif text-2xl font-bold text-text-primary mt-1">
                    ~{calc.paybackYears} Years
                  </p>
                  <span className="text-[10px] text-text-secondary font-semibold">Full ROI recovery</span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase">25-Yr Lifetime Savings</span>
                  <p className="font-serif text-2xl font-bold text-emerald-500 mt-1 truncate">
                    ₹{(calc.lifetimeSavings25Yrs / 100000).toFixed(1)} Lakhs
                  </p>
                  <span className="text-[10px] text-text-secondary font-semibold">With grid inflation</span>
                </div>
              </div>

              {/* CO2 Impact Banner */}
              <div className="p-4 rounded-2xl bg-bg-secondary border border-line flex items-center justify-between gap-4 text-xs font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-text-primary font-bold block">Clean Energy Impact</span>
                    <span className="text-text-secondary">{calc.annualCo2OffsetTons} Tons CO2 / Year</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  ≈ {calc.equivalentTreesPlanted} Trees
                </span>
              </div>
            </div>

            {/* Submission Confirmation Popup */}
            {submitted && (
              <div className="p-6 rounded-3xl bg-emerald-500/15 border-2 border-emerald-500 text-emerald-500 space-y-2 animate-fade-in shadow-xl">
                <div className="flex items-center gap-2 font-serif text-xl font-bold text-text-primary">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span>Proposal Request Received!</span>
                </div>
                <p className="text-xs font-medium text-text-primary/90 leading-relaxed">
                  Thank you, <strong>{name || 'Valued Customer'}</strong>! Our solar engineering team is reviewing your details for <strong>{city || 'your location'}</strong> ({calc.finalSystemKw} kW proposal) and will contact you at <strong>{phone || email || 'your contact'}</strong> with exact discom net-metering blueprints.
                </p>
              </div>
            )}
          </div>

        </div>
        )}
      </div>
    </section>
  );
}
