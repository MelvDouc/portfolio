import { getLanguage, onLanguageChange } from "@/services/translations.service.js";

export default class TranslatableElement extends HTMLElement {
  private readonly _translations: Record<string, string>;

  constructor(translations: Record<string, string>) {
    super();
    this._translations = translations;
    this.innerText = this._translations[getLanguage()];
  }

  connectedCallback(): void {
    const unsubscribe = onLanguageChange((lang) => {
      console.log(lang);
      if (lang in this._translations)
        this.innerText = this._translations[lang];
    });
    this.addEventListener("trl-disconnect", unsubscribe);
  }

  disconnectedCallback(): void {
    this.dispatchEvent(new CustomEvent("trl-disconnect"));
  }
}

customElements.define("app-translatable", TranslatableElement);