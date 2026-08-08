'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Building2,
  Calendar,
  Sparkles,
  Download,
  Eye,
  Trash2,
  RefreshCw,
  TrendingUp,
  UserCheck,
  AlertCircle,
  X,
  FileSpreadsheet,
  Zap,
  Lock,
  LogOut,
  KeyRound,
} from 'lucide-react';

interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  category: string;
  capacity: string;
  message: string;
  date: string;
  status: 'New' | 'In Progress' | 'Quoted' | 'Closed';
  notes?: string;
}

const INITIAL_MOCK_QUERIES: Inquiry[] = [
  {
    id: 'PQ-8801',
    fullName: 'Rajesh Sharma',
    email: 'rajesh.sharma@rajasthan-textiles.com',
    phone: '+91 98290 12345',
    country: 'India 🇮🇳',
    city: 'Jaipur',
    category: 'C&I Commercial Rooftop',
    capacity: '1.2 MW',
    message: 'We operate a textile manufacturing unit on Kalwar Road, Jaipur. Interested in installing a 1.2 MW rooftop solar system with Net Metering under JVVNL.',
    date: '2026-08-08 18:45',
    status: 'New',
  },
  {
    id: 'PQ-8802',
    fullName: 'Amitabh Patel',
    email: 'apatel@suratpolymers.in',
    phone: '+91 98250 98765',
    country: 'India 🇮🇳',
    city: 'Surat',
    category: 'PM-KUSUM (A&C)',
    capacity: '2.5 MW Ground Plant',
    message: 'Required EPC execution for PM-KUSUM Component A grid-connected feeder solar plant near DGVCL substation.',
    date: '2026-08-08 16:30',
    status: 'In Progress',
    notes: 'Feeder distance survey pending. DISCOM approval in progress.',
  },
  {
    id: 'PQ-8803',
    fullName: 'Sheikh Al-Maktoum Logistics',
    email: 'procurement@dubai-logistics.ae',
    phone: '+971 50 123 4567',
    country: 'United Arab Emirates 🇦🇪',
    city: 'Dubai',
    category: 'PM Kusum With BESS Battery',
    capacity: '500 kW / 2 MWh BESS',
    message: 'Inquiring about Paa Solar BESS battery microgrid for our logistics warehouse in JAFZA Free Zone, Dubai.',
    date: '2026-08-07 14:15',
    status: 'Quoted',
    notes: 'Quotation sent for 500kW TOPCon + 2MWh LFP Vault Storage.',
  },
  {
    id: 'PQ-8804',
    fullName: 'Vikramaditya Singh',
    email: 'vikram@singh-farms.org',
    phone: '+91 94140 33445',
    country: 'India 🇮🇳',
    city: 'Jodhpur',
    category: 'Franchise & Distribution for PM SGY',
    capacity: 'Distributor Inquiry',
    message: 'We wish to apply for regional distributorship for PM Surya Ghar Yojana solar kits across Western Rajasthan.',
    date: '2026-08-07 11:20',
    status: 'Closed',
    notes: 'Distributor agreement signed for Jodhpur & Pali districts.',
  },
  {
    id: 'PQ-8805',
    fullName: 'Dr. Meenakshi Sundaram',
    email: 'meenakshi@chennai-agro.com',
    phone: '+91 98400 55667',
    country: 'India 🇮🇳',
    city: 'Chennai',
    category: 'PM-SSY Floating Solar Project',
    capacity: '3 MW Floating Array',
    message: 'Feasibility study needed for 3 MW water-surface floating solar project over industrial reservoir.',
    date: '2026-08-06 09:50',
    status: 'New',
  },
];

export default function AdminQueriesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [queries, setQueries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedQuery, setSelectedQuery] = useState<Inquiry | null>(null);
  const [editingNotes, setEditingNotes] = useState('');

  // Check auth session
  useEffect(() => {
    const authStatus = sessionStorage.getItem('paa_solar_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId.trim() === 'admin' && loginPassword.trim() === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('paa_solar_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid Admin ID or Password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('paa_solar_admin_auth');
  };

  // Load queries from localStorage or load mock queries
  useEffect(() => {
    const saved = localStorage.getItem('paa_solar_admin_queries');
    if (saved) {
      try {
        setQueries(JSON.parse(saved));
      } catch (e) {
        setQueries(INITIAL_MOCK_QUERIES);
      }
    } else {
      setQueries(INITIAL_MOCK_QUERIES);
      localStorage.setItem('paa_solar_admin_queries', JSON.stringify(INITIAL_MOCK_QUERIES));
    }
  }, []);

  const saveQueries = (updated: Inquiry[]) => {
    setQueries(updated);
    localStorage.setItem('paa_solar_admin_queries', JSON.stringify(updated));
  };

  const handleStatusChange = (id: string, status: 'New' | 'In Progress' | 'Quoted' | 'Closed') => {
    const updated = queries.map((q) => (q.id === id ? { ...q, status } : q));
    saveQueries(updated);
    if (selectedQuery && selectedQuery.id === id) {
      setSelectedQuery({ ...selectedQuery, status });
    }
  };

  const handleSaveNotes = (id: string) => {
    const updated = queries.map((q) => (q.id === id ? { ...q, notes: editingNotes } : q));
    saveQueries(updated);
    if (selectedQuery && selectedQuery.id === id) {
      setSelectedQuery({ ...selectedQuery, notes: editingNotes });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this query?')) {
      const updated = queries.filter((q) => q.id !== id);
      saveQueries(updated);
      if (selectedQuery && selectedQuery.id === id) {
        setSelectedQuery(null);
      }
    }
  };

  const exportCSV = () => {
    const headers = ['ID,Date,Full Name,Email,Phone,Country,City,Category,Capacity,Status,Message'];
    const rows = queries.map(
      (q) =>
        `"${q.id}","${q.date}","${q.fullName}","${q.email}","${q.phone}","${q.country}","${q.city}","${q.category}","${q.capacity}","${q.status}","${q.message.replace(/"/g, '""')}"`
    );
    const blob = new Blob([[headers, ...rows].join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Paa_Solar_Queries_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  // Filtering
  const filteredQueries = queries.filter((q) => {
    const matchesSearch =
      q.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || q.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // KPI calculations
  const totalCount = queries.length;
  const newCount = queries.filter((q) => q.status === 'New').length;
  const inProgressCount = queries.filter((q) => q.status === 'In Progress').length;
  const closedCount = queries.filter((q) => q.status === 'Closed' || q.status === 'Quoted').length;

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-emerald-500 selection:text-white">
        <Navbar />

        <section className="pt-32 pb-24 flex items-center justify-center px-6">
          <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-bg-secondary/70 border border-line shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

            <div className="flex flex-col items-center text-center mb-8">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 mb-3 shadow-inner">
                <Lock className="w-8 h-8 animate-pulse" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                Admin Control Portal
              </h1>
              <p className="text-text-primary/70 text-xs font-medium mt-1">
                Enter your credentials to access Paa Solar queries & lead management desk.
              </p>
            </div>

            {loginError && (
              <div className="p-3 mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                  Admin ID *
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3.5 top-3.5 text-text-primary/60" />
                  <input
                    type="text"
                    required
                    placeholder="Enter admin ID"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary text-sm font-semibold outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-text-primary/60" />
                  <input
                    type="password"
                    required
                    placeholder="Enter password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg-primary border border-line focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-text-primary text-sm font-semibold outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
              >
                <span>Authenticate Admin</span>
                <Lock className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Admin Panel Header */}
      <section className="pt-32 pb-12 bg-bg-secondary/40 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>EPC QUERY CONTROL DESK</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary">
                Customer & Project Queries
              </h1>
              <p className="text-text-primary/70 text-sm font-medium mt-1">
                Real-time lead management, quotation pipeline, and EPC site inquiry logs.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={exportCSV}
                className="px-4 py-2.5 rounded-xl bg-bg-primary border border-line hover:border-emerald-500 text-xs font-bold text-text-primary hover:text-emerald-500 transition-all flex items-center gap-2 shadow-sm"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                <span>Export CSV Report</span>
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                title="Sign Out of Admin Portal"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Metric KPI Overview Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-bg-primary border border-line shadow-sm">
              <p className="text-xs font-mono font-bold uppercase text-text-primary/60">Total Inquiries</p>
              <p className="font-serif text-3xl font-bold text-text-primary mt-1">{totalCount}</p>
            </div>

            <div className="p-4 rounded-2xl bg-bg-primary border border-emerald-500/40 shadow-sm">
              <p className="text-xs font-mono font-bold uppercase text-emerald-500">New / Unread</p>
              <p className="font-serif text-3xl font-bold text-emerald-500 mt-1">{newCount}</p>
            </div>

            <div className="p-4 rounded-2xl bg-bg-primary border border-amber-500/40 shadow-sm">
              <p className="text-xs font-mono font-bold uppercase text-amber-500">In Evaluation</p>
              <p className="font-serif text-3xl font-bold text-amber-500 mt-1">{inProgressCount}</p>
            </div>

            <div className="p-4 rounded-2xl bg-bg-primary border border-sky-500/40 shadow-sm">
              <p className="text-xs font-mono font-bold uppercase text-sky-500">Quoted / Converted</p>
              <p className="font-serif text-3xl font-bold text-sky-500 mt-1">{closedCount}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Admin Controls & Table Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters Bar */}
          <div className="p-4 rounded-2xl bg-bg-secondary border border-line mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-text-primary/60" />
              <input
                type="text"
                placeholder="Search name, phone, city, or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg-primary border border-line text-xs font-medium text-text-primary outline-none focus:border-emerald-500"
              />
            </div>

            {/* Selectors */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-bg-primary border border-line text-xs font-semibold text-text-primary outline-none focus:border-emerald-500"
              >
                <option value="All">All Categories</option>
                <option value="C&I Commercial Rooftop">C&I Commercial Rooftop</option>
                <option value="PM-KUSUM (A&C)">PM-KUSUM (A&C)</option>
                <option value="PM Kusum With BESS Battery">PM Kusum With BESS Battery</option>
                <option value="PM-SSY Floating Solar Project">PM-SSY Floating Solar Project</option>
                <option value="Utility IPP Solar Park">Utility IPP Solar Park</option>
                <option value="Franchise & Distribution for PM SGY">Franchise & Distribution for PM SGY</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 rounded-xl bg-bg-primary border border-line text-xs font-semibold text-text-primary outline-none focus:border-emerald-500"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Quoted">Quoted</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Queries Data Table */}
          <div className="rounded-3xl border border-line bg-bg-secondary/60 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-text-primary border-collapse">
                <thead>
                  <tr className="bg-bg-primary border-b border-line font-mono uppercase tracking-wider text-[11px] text-text-primary/70">
                    <th className="p-4 pl-6">ID / Date</th>
                    <th className="p-4">Customer Name</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Capacity</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 pr-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {filteredQueries.length > 0 ? (
                    filteredQueries.map((q) => (
                      <tr key={q.id} className="hover:bg-bg-primary/80 transition-colors group">
                        <td className="p-4 pl-6 font-mono">
                          <span className="font-bold text-emerald-500 block">{q.id}</span>
                          <span className="text-[10px] text-text-primary/60">{q.date}</span>
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-sm text-text-primary">{q.fullName}</p>
                          <p className="text-[11px] text-text-primary/70 font-mono">{q.phone}</p>
                        </td>
                        <td className="p-4 font-semibold">
                          <span>{q.city}, {q.country}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full bg-bg-primary border border-line text-[11px] font-bold">
                            {q.category}
                          </span>
                        </td>
                        <td className="p-4 font-mono font-bold text-emerald-500">
                          {q.capacity || 'N/A'}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                              q.status === 'New'
                                ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                                : q.status === 'In Progress'
                                ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                : q.status === 'Quoted'
                                ? 'bg-sky-500/10 text-sky-500 border-sky-500/30'
                                : 'bg-line/40 text-text-primary/70 border-line'
                            }`}
                          >
                            {q.status}
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right space-x-2">
                          <button
                            onClick={() => {
                              setSelectedQuery(q);
                              setEditingNotes(q.notes || '');
                            }}
                            className="p-2 rounded-xl bg-bg-primary border border-line hover:border-emerald-500 text-emerald-500 transition-all shadow-sm"
                            title="View Full Inquiry Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleDelete(q.id)}
                            className="p-2 rounded-xl bg-bg-primary border border-line hover:border-rose-500 text-rose-500 transition-all shadow-sm"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-12 text-center text-text-primary/70 font-medium">
                        No inquiries match the selected criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Detail Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-bg-primary border border-line rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto animate-fade-in">
            <button
              onClick={() => setSelectedQuery(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-line hover:bg-bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-text-primary" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-bold text-emerald-500 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                {selectedQuery.id}
              </span>
              <span className="text-xs font-mono text-text-primary/70">{selectedQuery.date}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">
              {selectedQuery.fullName}
            </h3>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-bg-secondary border border-line text-xs mb-6">
              <div>
                <p className="text-text-primary/60 font-mono uppercase">Phone</p>
                <p className="font-bold text-text-primary mt-0.5">{selectedQuery.phone}</p>
              </div>
              <div>
                <p className="text-text-primary/60 font-mono uppercase">Email</p>
                <p className="font-bold text-text-primary mt-0.5">{selectedQuery.email}</p>
              </div>
              <div>
                <p className="text-text-primary/60 font-mono uppercase">Location</p>
                <p className="font-bold text-text-primary mt-0.5">{selectedQuery.city}, {selectedQuery.country}</p>
              </div>
              <div>
                <p className="text-text-primary/60 font-mono uppercase">Category & Capacity</p>
                <p className="font-bold text-emerald-500 mt-0.5">{selectedQuery.category} ({selectedQuery.capacity || 'N/A'})</p>
              </div>
            </div>

            {/* Message Box */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                Project Message / Site Details
              </h4>
              <p className="p-4 rounded-2xl bg-bg-secondary border border-line text-sm font-medium leading-relaxed text-text-primary">
                {selectedQuery.message}
              </p>
            </div>

            {/* Status Update Selector */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                Update Status Pipeline
              </h4>
              <div className="flex flex-wrap gap-2">
                {(['New', 'In Progress', 'Quoted', 'Closed'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(selectedQuery.id, status)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedQuery.status === status
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-bg-secondary border border-line text-text-primary hover:border-emerald-500'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Internal Notes */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary mb-2">
                Internal Engineering Notes
              </h4>
              <textarea
                rows={3}
                placeholder="Add notes about DISCOM approval, quotation value, or survey dates..."
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-bg-secondary border border-line text-xs text-text-primary outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSaveNotes(selectedQuery.id)}
                className="mt-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-xs hover:bg-emerald-500 hover:text-white transition-all"
              >
                Save Internal Notes
              </button>
            </div>

            {/* Direct Contact Action Bar */}
            <div className="pt-4 border-t border-line flex items-center justify-between gap-3">
              <a
                href={`mailto:${selectedQuery.email}`}
                className="flex-1 py-3 rounded-xl bg-bg-secondary border border-line text-center text-xs font-bold text-text-primary hover:border-emerald-500 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Email Customer</span>
              </a>
              <a
                href={`https://wa.me/?text=Hello%20${encodeURIComponent(selectedQuery.fullName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-center text-xs font-bold text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Customer</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
