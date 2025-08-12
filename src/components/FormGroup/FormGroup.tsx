import cssClasses from "./FormGroup.module.scss";

export default function FormGroup({ type, id, title, name, handleInput, required, labelText }: {
  type: "text" | "email" | "password" | "textarea";
  id: string;
  labelText: string;
  name?: string;
  title?: string;
  handleInput?: (e: Event) => void;
  required?: boolean;
}) {
  return (
    <div className={cssClasses.formGroup}>
      <label htmlFor={id}>{labelText}</label>
      <Control
        type={type}
        id={id}
        name={name ?? id}
        title={title}
        required={required}
        handleInput={handleInput}
      />
    </div>
  );
}

function Control({ type, id, name, required, title, handleInput }: {
  type: FormGroupType;
  id: string;
  name: string;
  title?: string;
  required?: boolean;
  handleInput?: (e: Event) => void;
}) {
  if (type === "textarea")
    return (
      <textarea
        rows={10}
        id={id}
        name={name}
        required={required}
        on:input={handleInput ? handleInput : null}
        title={title ?? ""}
      ></textarea>
    );

  return (
    <input
      type={type}
      id={id}
      name={name}
      title={title ?? ""}
      on:input={handleInput ? handleInput : null}
      required={required}
    />
  );
}

type FormGroupType = "text" | "email" | "password" | "textarea";