import { languageObs } from "@/core/translations.js";

export default class TranslatableElement extends HTMLElement {
  private readonly _translations: Record<string, string>;

  constructor(translations: Record<string, string>) {
    super();
    this._translations = translations;
  }

  connectedCallback(): void {
    const unsubscribe = languageObs.subscribe((lang) => {
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