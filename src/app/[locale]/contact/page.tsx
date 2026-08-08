'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  ShieldCheck,
  Sun,
  ArrowRight,
  Globe2,
  ChevronDown,
  Search,
  Loader2,
} from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES_BY_COUNTRY, CountryItem } from '@/data/countriesAndCities';

export default function ContactPage() {
  const [countriesList, setCountriesList] = useState<CountryItem[]>(ALL_COUNTRIES);
  const [apiCitiesMap, setApiCitiesMap] = useState<Record<string, string[]>>(ALL_CITIES_BY_COUNTRY);
  const [loadingCities, setLoadingCities] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'India 🇮🇳',
    city: 'Jaipur',
    category: 'C&I Commercial Rooftop',
    capacity: '',
    message: '',
  });

  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [cityOpen, setCityOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch live countries from REST Countries API on mount
  useEffect(() => {
    async function fetchLiveCountries() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flag,idd');
        if (res.ok) {
          const data = await res.json();
          const parsed: CountryItem[] = data
            .map((item: any) => {
              const root = item.idd?.root || '';
              const suffix = item.idd?.suffixes?.[0] || '';
              return {
                name: item.name?.common || '',
                flag: item.flag || '🌐',
                code: `${root}${suffix}`,
              };
            })
            .filter((c: CountryItem) => c.name)
            .sort((a: CountryItem, b: CountryItem) => a.name.localeCompare(b.name));

          if (parsed.length > 50) {
            setCountriesList(parsed);
          }
        }
      } catch (err) {
        console.warn('REST Countries API offline/throttled, using comprehensive fallback dataset', err);
      }
    }
    fetchLiveCountries();
  }, []);

  // Fetch live cities from CountriesNow API when country changes
  const fetchCitiesForCountry = async (countryName: string) => {
    if (apiCitiesMap[countryName] && apiCitiesMap[countryName].length > 0) {
      return;
    }
    setLoadingCities(true);
    try {
      const res = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country: countryName }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          setApiCitiesMap((prev) => ({ ...prev, [countryName]: data.data }));
          setFormData((prev) => ({ ...prev, city: data.data[0] }));
        }
      }
    } catch (err) {
      console.warn('CountriesNow Cities API error, fallback to local dataset', err);
    } finally {
      setLoadingCities(false);
    }
  };

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target as Node)) {
        setCityOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountryName = formData.country.split(' ')[0];
  const availableCities =
    apiCitiesMap[selectedCountryName] ||
    ALL_CITIES_BY_COUNTRY[selectedCountryName] ||
    ['Capital / Major Hub', 'Other City'];

  const filteredCountries = countriesList.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredCities = availableCities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newQuery = {
      id: `PQ-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city || 'Jaipur',
      category: formData.category,
      capacity: formData.capacity || 'Not Specified',
      message: formData.message || 'Direct contact inquiry submission.',
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'New' as const,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('paa_solar_admin_queries') || '[]');
      localStorage.setItem('paa_solar_admin_queries', JSON.stringify([newQuery, ...existing]));
    } catch (err) {
      console.error('Error saving query to local storage', err);
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-solar selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-secondary/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08)_0,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL HEADQUARTERS & EPC INQUIRIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary mt-2">
            Contact Paa Solar Systems
          </h1>

          <p className="text-text-primary/80 text-lg sm:text-xl font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
            Get in touch with our turnkey solar engineering experts for Commercial & Industrial (C&I), PM-KUSUM, PM-SSY, and Utility-Scale Solar Infrastructure.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Inquiry Form */}
            <div className="lg:col-span-7 bg-bg-secondary/70 rounded-3xl p-8 sm:p-10 border border-line shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-line/60">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                    Send Us a Project Inquiry
                  </h2>
                  <p className="text-text-primary/70 text-sm font-medium mt-1">
                    Fill out the details below and an EPC specialist will contact you within 24 hours.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Sun className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {submitted ? (
                <div className="py-16 text-center animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-text-primary/80 text-base max-w-md mt-2 leading-relaxed">
                    Thank you for reaching out to Paa Solar Systems. Our engineering team is evaluating your details and will call you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        country: 'India 🇮🇳',
                        city: 'Jaipur',
                        category: 'C&I Commercial Rooftop',
                        capacity: '',
                        message: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98290 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Country & City Searchable Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Searchable Country Dropdown */}
                    <div className="relative" ref={countryDropdownRef}>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                        Country *
                      </label>
                      <button
                        type="button"
                        onClick={() => setCountryOpen(!countryOpen)}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 text-left text-text-primary flex items-center justify-between font-medium"
                      >
                        <span className="truncate">{formData.country}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-emerald-500 ${countryOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {countryOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 p-3 rounded-2xl bg-bg-primary border border-line shadow-2xl z-50 animate-fade-in max-h-64 overflow-y-auto">
                          <div className="relative mb-2">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-text-secondary" />
                            <input
                              type="text"
                              placeholder="Search country..."
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 rounded-lg bg-bg-secondary border border-line text-xs text-text-primary outline-none focus:border-emerald-500"
                            />
                          </div>

                          <div className="space-y-1">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c) => (
                                <button
                                  key={c.name}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, country: `${c.name} ${c.flag}`, city: (apiCitiesMap[c.name] || ALL_CITIES_BY_COUNTRY[c.name])?.[0] || '' });
                                    setCountryOpen(false);
                                    setCountrySearch('');
                                    fetchCitiesForCountry(c.name);
                                  }}
                                  className="w-full px-3 py-2 rounded-lg text-left text-xs font-semibold hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors flex items-center justify-between"
                                >
                                  <span>{c.name} {c.flag}</span>
                                  <span className="text-[10px] text-text-secondary font-mono">{c.code}</span>
                                </button>
                              ))
                            ) : (
                              <p className="text-xs text-text-secondary p-2 text-center">No countries match search</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Searchable City Dropdown */}
                    <div className="relative" ref={cityDropdownRef}>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                        City *
                      </label>
                      <button
                        type="button"
                        onClick={() => setCityOpen(!cityOpen)}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 text-left text-text-primary flex items-center justify-between font-medium"
                      >
                        <span className="truncate flex items-center gap-2">
                          {loadingCities ? <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-500" /> : null}
                          <span>{formData.city || 'Select / Type City'}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-emerald-500 ${cityOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {cityOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 p-3 rounded-2xl bg-bg-primary border border-line shadow-2xl z-50 animate-fade-in max-h-64 overflow-y-auto">
                          <div className="relative mb-2">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-text-secondary" />
                            <input
                              type="text"
                              placeholder="Search or type city..."
                              value={citySearch}
                              onChange={(e) => {
                                setCitySearch(e.target.value);
                                setFormData({ ...formData, city: e.target.value });
                              }}
                              className="w-full pl-9 pr-3 py-2 rounded-lg bg-bg-secondary border border-line text-xs text-text-primary outline-none focus:border-emerald-500"
                            />
                          </div>

                          <div className="space-y-1">
                            {filteredCities.length > 0 ? (
                              filteredCities.map((city) => (
                                <button
                                  key={city}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, city });
                                    setCityOpen(false);
                                    setCitySearch('');
                                  }}
                                  className="w-full px-3 py-2 rounded-lg text-left text-xs font-semibold hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                                >
                                  {city}
                                </button>
                              ))
                            ) : (
                              <p className="text-xs text-text-secondary p-2 text-center">Press Enter or keep typing custom city</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                        Project Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary outline-none transition-all"
                      >
                        <option value="C&I Commercial Rooftop">C&I Commercial Rooftop</option>
                        <option value="PM-KUSUM (A&C)">PM-KUSUM (A&C)</option>
                        <option value="PM Kusum With BESS Battery">PM Kusum With BESS Battery</option>
                        <option value="PM-SSY Floating Solar Project">PM-SSY Floating Solar Project</option>
                        <option value="Utility IPP Solar Park">Utility IPP Solar Park</option>
                        <option value="Franchise & Distribution for PM SGY">Franchise & Distribution for Solar Product into PM SGY</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                      Estimated System Capacity (kW / MW)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500 kW Rooftop or 2 MW Ground Plant"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                      Project Details & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your facility, location, electricity DISCOM bill, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-base uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Headquarters & Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Headquarters Card */}
              <div className="bg-bg-secondary/70 rounded-3xl p-8 border border-emerald-500/50 shadow-xl relative overflow-hidden ring-2 ring-emerald-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">
                      GLOBAL HEADQUARTERS
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-text-primary">
                      Jaipur, Rajasthan
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-medium text-text-primary/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      Mangalam City, Kalwar Road, Jaipur, Rajasthan 302012, India
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>+91 98290 XXXXX</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>info@paasolar.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Mon - Fri: 9:00 AM - 5:00 PM IST</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-8 pt-6 border-t border-line/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/?text=Hello%20Paa%20Solar%20Team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <a
                    href="mailto:info@paasolar.com"
                    className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Directly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Visual Section */}
      <section className="pb-24 border-t border-line/60 pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-line overflow-hidden shadow-2xl h-96 relative bg-bg-secondary flex items-center justify-center">
            <iframe
              title="Paa Solar Headquarters Jaipur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113840.42848981447!2d75.71960255!3d26.8851417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40816711535%3A0x341f36471811e64!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) opacity(0.9)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
