import TranslatableElement from "@/components/Translatable/TranslatableElement.js";

export default function Trl(props: {
  en: string;
  fr: string;
}): TranslatableElement {
  return new TranslatableElement(props);
}