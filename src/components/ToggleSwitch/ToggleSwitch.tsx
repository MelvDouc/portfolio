import { type Obs } from "reactfree-jsx";
import classes from "./ToggleSwitch.module.scss";

export default function ToggleSwitch({ id, checked, disabled, oninput }: {
  id?: string;
  checked?: boolean;
  disabled?: Obs<boolean>;
  oninput?: (e: Event) => void;
}) {
  return (
    <label className={classes.switch}>
      <input
        type="checkbox"
        $init={(input) => {
          if (typeof id === "string")
            input.id = id;
          input.checked = !!checked;
          if (oninput)
            input.oninput = oninput;
          if (disabled !== undefined) {
            if (typeof disabled === "object") {
              input.disabled = disabled.value;
              disabled.subscribe((value) => input.disabled = value);
              return;
            }
            input.disabled = disabled as boolean;
          }
        }}
      />
      <span className={classes.slider}></span>
    </label>
  );
}