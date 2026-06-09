"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

type Locale = "fr" | "ar" | "en";
type Translations = Record<string, string>;

const dictionaries: Record<Locale, Translations> = {
  fr: fr as Translations,
  ar: ar as Translations,
  en: en as Translations,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  // Load locale from localStorage in client
  useEffect(() => {
    const savedLocale = localStorage.getItem("sarahglams_locale") as Locale;
    if (savedLocale === "fr" || savedLocale === "ar" || savedLocale === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("sarahglams_locale", newLocale);
    }
  };

  const dir = locale === "ar" ? "rtl" : "ltr";

  // Update HTML attributes dynamically when locale changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.dir = dir;
      document.documentElement.lang = locale;
    }
  }, [locale, dir]);

  const t = (key: string, variables?: Record<string, string | number>): string => {
    const dictionary = dictionaries[locale];
    let translation = dictionary[key] || dictionaries["fr"][key] || key;

    if (variables) {
      Object.entries(variables).forEach(([varKey, varVal]) => {
        translation = translation.replace(new RegExp(`{${varKey}}`, "g"), String(varVal));
      });
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
