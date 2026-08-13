import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Sparkles } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Contact PAA SOLAR | Global Headquarters & EPC Inquiries',
    description:
      'Contact PAA SOLAR (EKCHAKRA GROUP) for C&I rooftop solar EPC, PM-KUSUM feeder solarization, battery energy storage, and international solar export inquiries.',
    path: '/contact',
    locale,
  });
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-solar selection:text-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-secondary/40 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08)_0,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm sm:text-base font-bold uppercase tracking-wider shadow-md mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>GLOBAL HEADQUARTERS & EPC INQUIRIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary mt-2">
            Contact Paa Solar
          </h1>

          <p className="text-text-primary/80 text-lg sm:text-xl font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
            Get in touch with our turnkey solar engineering experts for Commercial & Industrial (C&I), PM-KUSUM, PM-SSY, and Utility-Scale Solar Infrastructure.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
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
