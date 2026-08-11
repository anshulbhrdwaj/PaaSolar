'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { Footer } from '@/components/sections/Footer';

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />
      <ProductsGrid />
      <Footer />
    </main>
  );
}
