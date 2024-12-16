import type { CharOption } from "@/components/PasswordGenerator/state.js";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch.jsx";
import cssClasses from "./Checkbox.module.scss";

export default function Checkbox({ charOption, checked, emitToggle: toggle }: {
  charOption: CharOption;
  checked: boolean;
  emitToggle: VoidFunction;
}): HTMLElement {
  const id = `checkbox-${charOption}`;

  return (
    <div className={cssClasses.Checkbox}>
      <label htmlFor={id}>{charOption}</label>
      <ToggleSwitch
        id={id}
        checked={checked}
        oninput={toggle}
      />
    </div>
  );
}