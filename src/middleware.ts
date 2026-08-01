import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|hi|mr|gu|ta|te|kn|bn|es|de)/:path*']
};
