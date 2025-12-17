import type { ComponentChild } from "reactfree-jsx";
import cssClasses from "./ResumeList.module.scss";

function ResumeList({ col2, children }: {
  col2?: boolean;
  children?: ComponentChild;
}) {
  return (
    <ul
      className={{
        [cssClasses.ResumeList]: true,
        [cssClasses.Col2]: !!col2
      }}
    >{children}</ul>
  );
}

export default ResumeList;