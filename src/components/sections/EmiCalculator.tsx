'use client';

import React, { useState, useMemo } from 'react';
import {
  Landmark,
  IndianRupee,
  Calendar,
  Percent,
  TrendingDown,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

interface EmiCalculatorProps {
  initialSystemCost?: number;
}

export function EmiCalculator({ initialSystemCost = 250000 }: EmiCalculatorProps) {
  // Input states
  const [totalCost, setTotalCost] = useState<number>(initialSystemCost);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20); // 20% down payment default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% per annum default
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years default (60 months)
  const [currentMonthlyBill, setCurrentMonthlyBill] = useState<number>(6500);

  // EMI Calculation Engine
  const calc = useMemo(() => {
    const downPaymentAmount = Math.round((totalCost * downPaymentPct) / 100);
    const loanPrincipal = Math.max(0, totalCost - downPaymentAmount);
    
    const monthlyRate = interestRate / (12 * 100);
    const totalMonths = tenureYears * 12;

    let emi = 0;
    if (loanPrincipal > 0 && monthlyRate > 0) {
      emi = Math.round(
        (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
      );
    } else if (loanPrincipal > 0) {
      emi = Math.round(loanPrincipal / totalMonths);
    }

    const totalPayable = emi * totalMonths;
    const totalInterest = Math.max(0, totalPayable - loanPrincipal);

    // Monthly & Annual Savings vs. Total Investment
    const monthlyBillSavings = Math.round(currentMonthlyBill * 0.9); // ~90% bill offset
    const annualBillSavings = monthlyBillSavings * 12;
    const netMonthlyCashflow = monthlyBillSavings - emi;
    const isCashflowPositive = netMonthlyCashflow >= 0;

    // ROI Calculations
    const annualRoiPct = totalCost > 0 ? Math.round((annualBillSavings / totalCost) * 1000) / 10 : 31.5;
    const lifetimeSavings25Yrs = Math.round(annualBillSavings * 25 * 1.35); // 4% grid tariff escalation
    const lifetimeRoiPct = totalCost > 0 ? Math.round(((lifetimeSavings25Yrs - totalCost) / totalCost) * 100) : 1150;
    const paybackYears = annualBillSavings > 0 ? Math.round((totalCost / annualBillSavings) * 10) / 10 : 3.2;

    return {
      downPaymentAmount,
      loanPrincipal,
      totalMonths,
      emi,
      totalInterest,
      totalPayable,
      monthlyBillSavings,
      annualBillSavings,
      netMonthlyCashflow,
      isCashflowPositive,
      annualRoiPct,
      lifetimeSavings25Yrs,
      lifetimeRoiPct,
      paybackYears,
    };
  }, [totalCost, downPaymentPct, interestRate, tenureYears, currentMonthlyBill]);

  return (
    <div className="bg-bg-primary rounded-3xl p-6 sm:p-10 border border-line shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        <div>
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm sm:text-base font-bold uppercase tracking-wider mb-3 shadow-md">
            <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>SOLAR BANK LOAN & EMI CALCULATOR</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
            Solar Financing & Monthly EMI Estimator
          </h3>
        </div>
        <span className="text-xs font-mono font-semibold text-accent-solar px-3.5 py-1.5 rounded-full bg-accent-solar/10 border border-accent-solar/20 self-start sm:self-auto">
          8.5% Standard Bank Rates
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT FORM INPUTS (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Field 1: Total Solar System Cost */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider flex items-center gap-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-accent-solar" />
                <span>Total Solar System Cost (₹)</span>
              </label>
              <span className="font-mono text-base font-bold text-accent-solar">
                ₹{totalCost.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="number"
              min="50000"
              max="10000000"
              step="10000"
              value={totalCost}
              onChange={(e) => setTotalCost(Number(e.target.value))}
              className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-base font-bold"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {[150000, 250000, 450000, 850000, 1500000].map((cost) => (
                <button
                  type="button"
                  key={cost}
                  onClick={() => setTotalCost(cost)}
                  className={`text-xs font-mono font-semibold px-3 py-1 rounded-lg border transition-all ${
                    totalCost === cost
                      ? 'bg-accent-solar text-white border-accent-solar shadow-md'
                      : 'bg-bg-secondary text-text-secondary border-line hover:border-accent-solar/40'
                  }`}
                >
                  ₹{(cost / 100000).toFixed(1)}L
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column: Down Payment & Interest Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Down Payment % */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider">
                  Down Payment ({downPaymentPct}%)
                </label>
                <span className="font-mono text-xs font-bold text-emerald-500">
                  ₹{calc.downPaymentAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full accent-accent-solar cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-text-secondary mt-1">
                <span>0% (Zero Down)</span>
                <span>20%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate % */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider">
                  Bank Interest Rate (% p.a.)
                </label>
                <span className="font-mono text-xs font-bold text-accent-solar">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="number"
                min="5"
                max="18"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-sm font-bold"
              />
            </div>
          </div>

          {/* 2-Column: Loan Tenure & Current Monthly Bill */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Loan Tenure Years */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                Loan Tenure (Years)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10].map((yr) => (
                  <button
                    type="button"
                    key={yr}
                    onClick={() => setTenureYears(yr)}
                    className={`py-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      tenureYears === yr
                        ? 'bg-accent-solar text-white border-accent-solar shadow-md'
                        : 'bg-bg-secondary border-line text-text-primary hover:border-accent-solar/40'
                    }`}
                  >
                    {yr} Yrs
                  </button>
                ))}
              </div>
            </div>

            {/* Current Monthly Electricity Bill */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-text-primary tracking-wider mb-2">
                Current Monthly Bill (₹)
              </label>
              <input
                type="number"
                min="1000"
                max="200000"
                step="500"
                value={currentMonthlyBill}
                onChange={(e) => setCurrentMonthlyBill(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-line focus:border-accent-solar focus:outline-none text-text-primary font-mono text-sm font-bold"
              />
            </div>
          </div>
        </div>

        {/* RIGHT EMI SUMMARY & COMPARISON CARD (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* EMI Output Main Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary border-2 border-emerald-500/60 shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                ESTIMATED MONTHLY SOLAR EMI
              </span>

              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold text-text-primary">
                  ₹{calc.emi.toLocaleString('en-IN')}
                </span>
                <span className="font-serif text-lg font-bold text-emerald-500">/ month</span>
              </div>

              <p className="text-text-secondary text-xs font-medium">
                For a loan principal of <strong className="text-text-primary">₹{calc.loanPrincipal.toLocaleString('en-IN')}</strong> over {calc.totalMonths} months ({tenureYears} Yrs).
              </p>

              {/* Bill vs EMI Cashflow Comparison Banner */}
              <div className={`p-4 rounded-2xl border ${calc.isCashflowPositive ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-500' : 'bg-amber-500/15 border-amber-500/40 text-amber-500'} space-y-1`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  <TrendingDown className="w-4 h-4" />
                  <span>
                    {calc.isCashflowPositive
                      ? 'Immediate Positive Monthly Cashflow!'
                      : 'Low Monthly Net Outflow'}
                  </span>
                </div>
                <p className="text-xs text-text-primary font-medium leading-relaxed">
                  {calc.isCashflowPositive ? (
                    <>Your monthly bill savings (<strong>₹{calc.monthlyBillSavings.toLocaleString('en-IN')}</strong>) exceed your solar EMI (<strong>₹{calc.emi.toLocaleString('en-IN')}</strong>) by <strong>₹{calc.netMonthlyCashflow.toLocaleString('en-IN')} / month</strong>!</>
                  ) : (
                    <>Solar EMI is ₹{calc.emi.toLocaleString('en-IN')} / mo vs ₹{calc.monthlyBillSavings.toLocaleString('en-IN')} / mo savings.</>
                  )}
                </p>
              </div>

              {/* Loan Breakdown Details */}
              <div className="pt-4 border-t border-line/60 space-y-2 text-xs font-semibold">
                <div className="flex justify-between text-text-secondary">
                  <span>Down Payment ({downPaymentPct}%):</span>
                  <span className="font-mono text-text-primary font-bold">₹{calc.downPaymentAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Total Loan Principal:</span>
                  <span className="font-mono text-text-primary font-bold">₹{calc.loanPrincipal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Total Interest Payable ({tenureYears} Yrs):</span>
                  <span className="font-mono text-accent-solar font-bold">₹{calc.totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-line/60 text-sm font-bold text-text-primary">
                  <span>Total Amount Paid ({tenureYears} Yrs):</span>
                  <span className="font-mono text-emerald-500">₹{calc.totalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SOLAR ROI & FINANCIAL YIELD CARD */}
          <div className="p-6 rounded-3xl bg-bg-primary border border-line shadow-xl space-y-4">
            <h4 className="font-serif text-lg font-bold text-text-primary flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Solar Return on Investment (ROI)
              </span>
              <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                {calc.annualRoiPct}% p.a.
              </span>
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase">Annualized ROI</span>
                <p className="font-serif text-2xl font-bold text-emerald-500 mt-0.5">
                  {calc.annualRoiPct}%
                </p>
                <span className="text-[10px] text-text-secondary font-semibold">Per year returns</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-accent-solar/10 border border-accent-solar/30">
                <span className="text-[10px] font-mono font-bold text-accent-solar uppercase">25-Yr Cumulative ROI</span>
                <p className="font-serif text-2xl font-bold text-accent-solar mt-0.5">
                  +{calc.lifetimeRoiPct}%
                </p>
                <span className="text-[10px] text-text-secondary font-semibold">Total net return</span>
              </div>
            </div>

            {/* Benchmark Yield Comparison */}
            <div className="p-3.5 rounded-2xl bg-bg-secondary border border-line space-y-2 text-xs">
              <span className="text-[10px] font-mono font-bold text-text-secondary uppercase">Annual Return Benchmark Comparison</span>
              <div className="space-y-1.5 font-semibold">
                <div className="flex justify-between items-center text-text-secondary">
                  <span>Bank Fixed Deposit (FD):</span>
                  <span className="font-mono text-text-primary">~6.5% p.a.</span>
                </div>
                <div className="flex justify-between items-center text-text-secondary">
                  <span>Mutual Funds / Equity:</span>
                  <span className="font-mono text-text-primary">~12.0% p.a.</span>
                </div>
                <div className="flex justify-between items-center text-emerald-500 font-bold pt-1 border-t border-line/60">
                  <span>Solar Asset Yield (PAA SOLAR):</span>
                  <span className="font-mono text-emerald-500 text-sm">~{calc.annualRoiPct}% p.a. 🔥</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Bank Facilitation Pill */}
          <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center justify-between gap-3 text-xs font-medium">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-accent-solar shrink-0" />
              <div>
                <span className="text-text-primary font-bold block">100% Bank Loan Facilitation</span>
                <span className="text-text-secondary text-[11px]">Tie-ups with SBI, SIDBI, PNB & leading solar lenders</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl bg-accent-solar text-white text-[11px] font-bold uppercase tracking-wider hover:bg-accent-solar/90 transition-colors shrink-0"
            >
              Apply Loan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
