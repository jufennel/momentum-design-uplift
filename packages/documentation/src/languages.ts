import { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES } from './config';

export { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES };

export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : 'en';
  return langCode as typeof KNOWN_LANGUAGE_CODES[number];
}

export function stripBasePath(pathname: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') {
    return pathname;
  }

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (pathname === normalizedBase || pathname === `${normalizedBase}/`) {
    return '/';
  }
  if (pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length);
  }

  return pathname;
}
