import { obs } from "reactfree-jsx";
import type { Language } from "@/types.js";

const languageObs = obs<Language>("fr");

export function onLanguageChange(subscription: (lang: Language) => unknown): VoidFunction {
  return languageObs.subscribe(subscription);
}

export function getLanguage(): Language {
  return languageObs.value;
}

export function setLanguage(lang: Language): void {
  languageObs.value = lang;
}