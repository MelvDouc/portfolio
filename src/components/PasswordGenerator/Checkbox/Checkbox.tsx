import type { CharOption } from "@/components/PasswordGenerator/state.js";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch.jsx";
import cssClasses from "./Checkbox.module.scss";
import Trl from "@/components/Translatable/Trl.jsx";

export default function Checkbox({ charOption, checked, emitToggle }: {
  charOption: CharOption;
  checked: boolean;
  emitToggle: VoidFunction;
}): HTMLElement {
  const id = `checkbox-${charOption}`;

  return (
    <div className={cssClasses.Checkbox}>
      <label htmlFor={id}>
        <Trl en={charOption} fr={frTranslations[charOption]} />
      </label>
      <ToggleSwitch
        id={id}
        checked={checked}
        oninput={emitToggle}
      />
    </div>
  );
}

const frTranslations = {
  lowercase: "minuscules",
  uppercase: "majuscules",
  digits: "chiffres",
  specialChars: "char. spéciaux"
};