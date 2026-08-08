'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/?text=Hello%20Paa%20Solar%2C%20I%20would%20like%20to%20inquire%20about%20Commercial%2FUtility%20solar%20projects.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Paa Solar Expert on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-bg-primary/95 backdrop-blur-md border border-line shadow-xl text-xs font-semibold text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with Solar Engineer
      </span>

      {/* Pulsing Outer Ring */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />

        {/* WhatsApp Icon Button */}
        <div className="relative w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        </div>
      </div>
    </a>
  );
}
