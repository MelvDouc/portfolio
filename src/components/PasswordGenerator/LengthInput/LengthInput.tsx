import { MIN_LENGTH, MAX_LENGTH, isValidLength } from "@/components/PasswordGenerator/state.js";
import cssClasses from "./LengthInput.module.scss";

export default function LengthInput({ type, initialLength, onLengthChange, emitLengthChange }: {
  type: "number" | "range";
  initialLength: number;
  onLengthChange: (cb: (len: number) => unknown) => void;
  emitLengthChange: (len: number) => void;
}) {
  const $init = (element: HTMLInputElement) => {
    element.addEventListener("input", () => {
      const len = element.valueAsNumber;

      if (isValidLength(len))
        emitLengthChange(len);
    });

    onLengthChange((len) => {
      if (len !== element.valueAsNumber)
        element.value = len.toString();
    });
  };

  return (
    <input
      className={cssClasses.LengthInput}
      type={type}
      min={MIN_LENGTH.toString()}
      max={MAX_LENGTH.toString()}
      value={initialLength.toString()}
      $init={$init}
    />
  );
}