import { obs } from "reactfree-jsx";
import type { Language } from "@/types.js";

const LOCAL_STORAGE_KEY = "app_lang";
const languageObs = obs<Language>((localStorage.getItem(LOCAL_STORAGE_KEY) as Language | null) ?? "fr");

languageObs.subscribe((lang) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, lang);
});

export function onLanguageChange(subscription: (lang: Language) => unknown): VoidFunction {
  return languageObs.subscribe(subscription);
}

export function getLanguage(): Language {
  return languageObs.value;
}

export function setLanguage(lang: Language): void {
  languageObs.value = lang;
}