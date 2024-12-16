import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch.jsx";
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
      <label htmlFor={id} data-trl={`pwd-label-${key}`}></label>
      <ToggleSwitch
        id={id}
        checked={selectedOptions.has(key)}
        disabled={disabledObs}
        oninput={handleInput}
      />
    </div>
  );
}