'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />
      <ProductsGrid />
      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
