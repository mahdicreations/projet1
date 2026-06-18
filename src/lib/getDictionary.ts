import fr from "../locales/fr.json";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Translations = Record<string, string>;

const dictionaries: Record<string, Translations> = {
  fr: fr as Translations,
  en: en as Translations,
  ar: ar as Translations,
};

/**
 * Returns the translation dictionary for the given locale.
 * Falls back to French if the locale is not found.
 * Safe to call from Server Components (no browser APIs, no context).
 */
export function getDict(locale = "fr"): Translations {
  return dictionaries[locale] ?? dictionaries["fr"];
}

/**
 * Server-side translation function.
 * Usage: st(dict, "hero.title")
 */
export function st(
  dict: Translations,
  key: string,
  variables?: Record<string, string | number>
): string {
  let translation = dict[key] ?? dictionaries["fr"][key] ?? key;

  if (variables) {
    Object.entries(variables).forEach(([varKey, varVal]) => {
      translation = translation.replace(
        new RegExp(`{${varKey}}`, "g"),
        String(varVal)
      );
    });
  }

  return translation;
}
