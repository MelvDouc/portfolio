import TranslatableElement from "@/components/Translatable/TranslatableElement.js";

export default function Trl(props: {
  en: string | Node;
  fr: string | Node;
}): TranslatableElement {
  return new TranslatableElement(props);
}