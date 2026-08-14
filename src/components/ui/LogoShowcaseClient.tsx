'use client';

import React, { useState } from 'react';
import { PaaSolarLogo, PaaSolarEmblemSVG, PaaSolarSVG } from '@/components/ui/PaaSolarLogo';
import { Download, Copy, Check, Sparkles, Sliders, Sun, Shield, Grid, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function LogoShowcaseClient() {
  const [size, setSize] = useState<'fullscreen' | 'hero' | 'lg' | 'md' | 'sm'>('fullscreen');
  const [layout, setLayout] = useState<'col' | 'row'>('col');
  const [align, setAlign] = useState<'center' | 'left'>('center');
  const [showTagline, setShowTagline] = useState(true);
  const [showImage, setShowImage] = useState(true);
  const [customTagline, setCustomTagline] = useState('');
  const [copied, setCopied] = useState(false);

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('File not found');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, '_blank');
    }
  };

  const copySvgMarkup = async () => {
    try {
      const res = await fetch('/paa_solar_logo.svg');
      const svgText = await res.text();
      await navigator.clipboard.writeText(svgText);
    } catch {
      const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 280"><text font-family="sans-serif" font-weight="900" font-size="96" fill="#10B981">PAA SOLAR</text></svg>`;
      await navigator.clipboard.writeText(fallbackSvg);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadComponentAsPng = (filename = 'paa_solar_logo.png') => {
    const target = document.getElementById('logo-render-target');
    if (!target) return;

    const svgElement = target.querySelector('svg');
    let svgString = '';

    if (svgElement) {
      const clone = svgElement.cloneNode(true) as SVGElement;
      clone.setAttribute('width', '2400');
      clone.setAttribute('height', '610');
      if (!clone.getAttribute('xmlns')) {
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      }
      svgString = new XMLSerializer().serializeToString(clone);
    } else {
      const taglineStr = customTagline || 'BLESSING FROM THIS GENERATION TO NEXT GENERATION';
      svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 280" width="2400" height="610">
        <defs>
          <linearGradient id="pngEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#047857"/>
            <stop offset="50%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#34D399"/>
          </linearGradient>
          <linearGradient id="pngOEnergyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563EB"/>
            <stop offset="48%" stop-color="#0284C7"/>
            <stop offset="52%" stop-color="#F97316"/>
            <stop offset="100%" stop-color="#FF6B00"/>
          </linearGradient>
          <pattern id="pngSolarGrid" width="12" height="24" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 24" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.35"/>
          </pattern>
        </defs>
        <g transform="translate(0, 140)">
          <text font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="96" fill="url(#pngEmeraldGrad)" letter-spacing="-3">PAA S</text>
          <text font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="96" fill="url(#pngSolarGrid)" letter-spacing="-3" opacity="0.6">PAA S</text>
          <text x="315" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="96" fill="url(#pngOEnergyGrad)" letter-spacing="-3">O</text>
          <text x="385" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="96" fill="url(#pngEmeraldGrad)" letter-spacing="-3">LAR</text>
          <text x="385" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="96" fill="url(#pngSolarGrid)" letter-spacing="-3" opacity="0.6">LAR</text>
        </g>
        ${showTagline ? `<g transform="translate(5, 185)"><text font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="16" fill="#F59E0B" letter-spacing="3.5">${taglineStr}</text></g>` : ''}
      </svg>`;
    }

    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2400;
      canvas.height = 610;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = pngUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(pngUrl);
          }
        }, 'image/png');
      }
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden select-none bg-black text-white">
      {/* Top Header Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 hover:text-white backdrop-blur-md transition-all shadow-lg group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Vector SVG Showcase</span>
          </span>
        </div>
      </header>

      {/* Center Main Stage: Full Screen Logo Display */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-2 sm:p-6 my-auto w-full">
        <div id="logo-render-target" className="flex flex-col items-center justify-center w-full max-w-[95vw]">
          <PaaSolarLogo
            size={size}
            layout={layout}
            align={layout === 'row' ? 'left' : align}
            showTagline={showTagline}
            showImage={showImage}
            customTagline={customTagline || undefined}
          />
        </div>
      </main>

      {/* Bottom Floating Control Dock */}
      <footer className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-8 pt-4">
        <div className="p-4 sm:p-6 rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          
          {/* Control Group 1: Configuration Toggles */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {/* Size Selector */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              <span className="text-[10px] uppercase font-bold text-white/50 px-2">Size</span>
              {(['fullscreen', 'hero', 'lg', 'md', 'sm'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-2.5 py-1 rounded-lg font-mono font-bold uppercase transition-all ${
                    size === s ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              <span className="text-[10px] uppercase font-bold text-white/50 px-2">Layout</span>
              <button
                onClick={() => setLayout('col')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  layout === 'col' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-white/70 hover:text-white'
                }`}
              >
                Stacked
              </button>
              <button
                onClick={() => {
                  setLayout('row');
                  setAlign('left');
                }}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  layout === 'row' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-white/70 hover:text-white'
                }`}
              >
                Row
              </button>
            </div>

            {/* Toggles: Tagline & Image */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTagline(!showTagline)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  showTagline ? 'border-amber-500/50 bg-amber-500/10 text-amber-300' : 'border-white/10 bg-white/5 text-white/50'
                }`}
              >
                Tagline: {showTagline ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={() => setShowImage(!showImage)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  showImage ? 'border-sky-500/50 bg-sky-500/10 text-sky-300' : 'border-white/10 bg-white/5 text-white/50'
                }`}
              >
                Emblem: {showImage ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Action Group 2: Download Assets */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => downloadComponentAsPng('paa_solar_logo.png')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PNG</span>
            </button>

            <button
              type="button"
              onClick={() => handleDownload('/paa_solar_logo.svg', 'paa_solar_logo.svg')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Full SVG</span>
            </button>

            <button
              type="button"
              onClick={() => handleDownload('/logo_transparent.svg', 'logo_transparent.svg')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/90 hover:text-white transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Emblem SVG</span>
            </button>

            <button
              onClick={copySvgMarkup}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/90 hover:text-white transition-all shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-sky-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
}
