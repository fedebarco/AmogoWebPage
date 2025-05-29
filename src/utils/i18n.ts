import type { Language } from '../i18n/translations';

export function getCurrentLanguage(pathname: string): Language {
  return pathname.startsWith('/en') ? 'en' : 'es';
} 