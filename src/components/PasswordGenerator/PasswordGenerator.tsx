import AlertBox from "@/components/AlertBox/AlertBox.jsx";
import Checkbox from "@/components/PasswordGenerator/Checkbox/Checkbox.jsx";
import LengthInput from "@/components/PasswordGenerator/LengthInput/LengthInput.jsx";
import { CHAR_OPTIONS, createPassword, type CharOption } from "@/components/PasswordGenerator/state.js";
import Trl from "@/components/Translatable/Trl.jsx";
import TypedEventEmitter from "@/utils/TypedEventEmitter.js";
import cssClasses from "./PasswordGenerator.module.scss";

export default function PasswordGenerator(): HTMLElement {
  const eventEmitter = new TypedEventEmitter<{
    lengthChange: [number];
    charOptionToggled: [CharOption];
    updateRequest: [];
    updated: [];
    copyRequest: [];
  }>();
  const options: Record<CharOption, boolean> = {
    lowercase: true,
    uppercase: true,
    digits: true,
    specialChars: false
  };
  let len = 25;
  let password = createPassword(options, len) as string;

  eventEmitter.on("charOptionToggled", (charOption) => {
    options[charOption] = !options[charOption];
    eventEmitter.emit("updateRequest");
  });
  eventEmitter.on("lengthChange", (value) => {
    len = value;
    eventEmitter.emit("updateRequest");
  });
  eventEmitter.on("updateRequest", () => {
    const newPassword = createPassword(options, len);

    if (newPassword) {
      password = newPassword;
      eventEmitter.emit("updated");
    }
  });
  eventEmitter.on("copyRequest", async () => {
    await copyPasswordToClipboard(password);
  });

  return (
    <div className={cssClasses.PasswordGenerator}>
      <section className={cssClasses.Top}>
        <output $init={(element) => eventEmitter.on("updated", () => element.innerText = password)}>
          {password}
        </output>
      </section>
      <section className={cssClasses.Bottom}>
        <article className={cssClasses.LengthInputs}>
          <LengthInput
            type="number"
            initialLength={len}
            onLengthChange={(listener) => eventEmitter.on("lengthChange", listener)}
            emitLengthChange={(len) => eventEmitter.emit("lengthChange", len)}
          />
          <LengthInput
            type="range"
            initialLength={len}
            onLengthChange={(listener) => eventEmitter.on("lengthChange", listener)}
            emitLengthChange={(len) => eventEmitter.emit("lengthChange", len)}
          />
        </article>
        <article className={cssClasses.Checkboxes}>
          {CHAR_OPTIONS.map((charOption) => (
            <Checkbox
              charOption={charOption}
              checked={options[charOption]}
              emitToggle={() => eventEmitter.emit("charOptionToggled", charOption)}
            />
          ))}
        </article>
        <article className={cssClasses.Controls}>
          <button className="btn btn-primary" onclick={() => eventEmitter.emit("updateRequest")}>
            <Trl fr="Nouveau" en="New password" />
          </button>
          <button className="btn btn-primary" onclick={() => eventEmitter.emit("copyRequest")}>
            <Trl fr="Copier" en="Copy password" />
          </button>
        </article>
      </section>
    </div>
  );
}

async function copyPasswordToClipboard(password: string) {
  try {
    await navigator.clipboard.writeText(password);
    AlertBox.create({
      message: (
        <Trl fr="Mot de passe copié !" en="Password was copied!" />
      )
    });
  } catch (error) {
    AlertBox.create({
      message: (
        <Trl
          fr="Votre navigateur n'autorise pas à interagir avec le presse-papier."
          en="Interacting with the clipboard is disallowed on this browser."
        />
      ),
      type: "danger"
    });
  }
}