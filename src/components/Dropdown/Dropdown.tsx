import cssClasses from "./Dropdown.module.scss";

export default function Dropdown({ head, body }: {
  head: Node;
  body: Node;
}) {
  return (
    <details
      className={cssClasses.Dropdown}
      $init={(element) => {
        document.addEventListener("click", ({ target }) => {
          if (target !== element)
            element.open = false;
        });
      }}
    >
      <summary>{head}</summary>
      <div className={cssClasses.DropdownContent}>{body}</div>
    </details>
  );
}