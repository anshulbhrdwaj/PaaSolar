import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import enMessages from '../../messages/en.json';

function deepMerge(target: any, source: any): any {
  if (!target || typeof target !== 'object') return source;
  const output = { ...target };
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        output[key] = deepMerge(target?.[key], source[key]);
      } else if (output[key] === undefined) {
        output[key] = source[key];
      }
    }
  }
  return output;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  let userMessages = {};
  try {
    userMessages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    userMessages = enMessages;
  }

  return {
    locale,
    messages: locale === 'en' ? enMessages : deepMerge(userMessages, enMessages),
  };
});
