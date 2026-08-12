import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Admin Portal | Paa Solar Internal Control Desk',
    description: 'Internal admin portal for query management and lead processing.',
    path: '/admin',
    locale,
    noIndex: true,
  });
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
