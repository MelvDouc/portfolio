import AlertBox from "@/components/AlertBox/AlertBox.jsx";
import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";
import Checkbox from "./Checkbox.jsx";
import LengthInput from "./LengthInput.jsx";
import PasswordState from "./PasswordState.js";
import cssClasses from "./PasswordGenerator.module.scss";


export default function PasswordGenerator(): HTMLElement {
  const passwordState = new PasswordState();
  const notify = () => passwordState.length.notify();
  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(passwordState.password.value);
      AlertBox.create({ message: "Password was copied!" });
    } catch (error) {
      AlertBox.create({
        message: "Interacting with the clipboard is disallowed on this browser.",
        type: "danger"
      });
    }
  };

  return (
    <SmallComponentWrapper>
      <div className={cssClasses.passwordGenerator} $init={notify}>
        <section>
          <output>{passwordState.password}</output>
        </section>
        <section>
          <div className={cssClasses.form}>
            <article className={cssClasses.inputs}>
              <LengthInput type="number" passwordState={passwordState} />
              <LengthInput type="range" passwordState={passwordState} />
            </article>
            <article className={cssClasses.checkboxes}>
              {Object.keys(PasswordState.randomCharFunctions).map((key) => (
                <Checkbox key={key} selectedOptionsObs={passwordState.selectedOptions} />
              ))}
            </article>
            <article className={cssClasses.buttons}>
              <button className="btn btn-primary" onclick={notify}>New Password</button>
              <button className="btn btn-primary" onclick={copyPassword}>Copy Password</button>
            </article>
          </div>
        </section>
      </div>
    </SmallComponentWrapper>
  );
}
