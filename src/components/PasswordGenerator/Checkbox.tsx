import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import type { Obs } from "reactfree-jsx";

export default function Checkbox({ key, selectedOptionsObs }: {
  key: string;
  selectedOptionsObs: Obs<Set<string>>;
}) {
  const id = `checkbox-${key}`;
  const selectedOptions = selectedOptionsObs.value;
  const disabledObs = selectedOptionsObs.map((set) => {
    return set.size === 1 && set.has(key);
  });
  const handleInput = () => {
    selectedOptions.has(key)
      ? selectedOptions.delete(key)
      : selectedOptions.add(key);
    selectedOptionsObs.notify();
  };

  return (
    <div>
      <label htmlFor={id}>
        <Trl {...labelTranslations[key as keyof typeof labelTranslations]} />
      </label>
      <ToggleSwitch
        id={id}
        checked={selectedOptions.has(key)}
        disabled={disabledObs}
        oninput={handleInput}
      />
    </div>
  );
}

const labelTranslations = {
  "lowercase": {
    fr: "minuscules",
    en: "lowercase"
  },
  "uppercase": {
    fr: "majuscules",
    en: "uppercase"
  },
  "digits": {
    fr: "chiffres",
    en: "digits"
  },
  "special-chars": {
    fr: "symboles",
    en: "special characters"
  }
};