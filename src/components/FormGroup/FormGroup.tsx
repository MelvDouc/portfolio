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
  const control: HTMLInputElement | HTMLTextAreaElement = (type !== "textarea")
    ? <input type={type} id={id} required={required} />
    : <textarea rows={10} id={id} required={required}></textarea>;
  control.name = name ?? id;
  if (title)
    control.title = title;
  if (handleInput)
    control.oninput = handleInput;

  return (
    <div className={cssClasses.formGroup}>
      <label htmlFor={id}>{labelText}</label>
      {control}
    </div>
  );
}