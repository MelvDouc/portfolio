import { obs } from "reactfree-jsx";
import translations from "./data.js";
import type { Language } from "@/types.js";

export const languageObs = obs<Language>();

export function updateTranslations(language: Language) {
  document.querySelectorAll("*[data-trl]").forEach((element) => {
    const key = element.getAttribute("data-trl");
    if (key !== null && key in translations)
      element.innerHTML = translations[key][language];
  });
}

export function trl(key: string): Text {
  const textNode = document.createTextNode("");
  languageObs.subscribe((language) => textNode.textContent = translations[key][language]);
  return textNode;
}