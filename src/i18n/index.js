// Bilingual site: English at /, French at /fr/. English data in src/data is the source of truth;
// src/i18n/fr.js overlays French text on top of it (anything missing falls back to English).
import * as profileData from '../data/profile.js';
import * as cvData from '../data/cv.js';
import * as researchData from '../data/research.js';
import * as projectsData from '../data/projects.js';
import * as teachingData from '../data/teaching.js';
import * as personalData from '../data/personal.js';
import fr from './fr.js';
import { ui } from './ui.js';

export const langs = ['en', 'fr'];
// For pages under src/pages/[...lang]/: lang undefined → English at the root, 'fr' → /fr/.
export const langPaths = () => [{ params: { lang: undefined } }, { params: { lang: 'fr' } }]; // fresh objects per page: Astro mutates them
export const getLang = (Astro) => (Astro.params.lang === 'fr' ? 'fr' : 'en');

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
// Deep-merge `over` onto `base`. An object overlay on an array matches items by slug/id; an array overlay matches by index.
export function merge(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && isObj(over)) return base.map((it) => merge(it, over[it?.slug ?? it?.id]));
  if (Array.isArray(base) && Array.isArray(over)) return base.map((it, i) => merge(it, over[i]));
  if (isObj(base) && isObj(over)) {
    const out = { ...base };
    for (const k of Object.keys(over)) out[k] = merge(base[k], over[k]);
    return out;
  }
  return over;
}

const en = { ...profileData, ...cvData, ...researchData, ...projectsData, ...teachingData, ...personalData };
const frData = merge(en, fr);
frData.bySlug = Object.fromEntries(frData.projects.map((p) => [p.slug, p]));
export const content = (lang) => (lang === 'fr' ? frData : en);

// Translator for UI strings: t('nav.home'). Falls back to English, then to the key itself.
export const useT = (lang) => (key) => ui[lang]?.[key] ?? ui.en[key] ?? key;

// Pages that exist in both languages. Only these links get the /fr prefix; assets, PDFs and the CV never do.
const localized = /^\/(research|rocketry|teaching|projects|blog|piano|world)?\/?(#.*)?$/;
export function lp(href, lang) {
  if (lang !== 'fr' || !href?.startsWith('/') || href.startsWith('/fr/')) return href;
  return localized.test(href) ? `/fr${href}` : href;
}

// Same page in the other language, for the EN/FR switch and hreflang.
export function alternates(pathname) {
  const base = pathname.replace(/^\/fr(\/|$)/, '/');
  return { en: base, fr: base === '/' ? '/fr/' : `/fr${base}` };
}
