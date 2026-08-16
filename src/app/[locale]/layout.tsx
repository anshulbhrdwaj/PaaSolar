import type { Metadata } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import '../globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { GlobalTranslator } from '@/components/ui/GlobalTranslator';
import { JsonLd } from '@/components/seo/JsonLd';

import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    locale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-accent-solar selection:text-white"
      >
        <JsonLd />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScrollProvider>
              <CustomCursor />
              <WhatsAppButton />
              <GlobalTranslator />
              {children}
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
