import type PasswordState from "@/components/PasswordGenerator/PasswordState.js";

export default function LengthInput({ type, passwordState }: {
  type: "number" | "range";
  passwordState: PasswordState;
}) {
  return (
    <div>
      <input
        type={type}
        min={String(passwordState.MIN_LENGTH)}
        max={String(passwordState.MAX_LENGTH)}
        oninput={(e) => {
          const length = (e.target as HTMLInputElement).valueAsNumber;
          if (passwordState.isValidLength(length))
            passwordState.length.value = length;
        }}
        value={passwordState.length}
      />
    </div>
  );
}