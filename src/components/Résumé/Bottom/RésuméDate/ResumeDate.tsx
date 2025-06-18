import type { ComponentChild } from "reactfree-jsx";
import cssClasses from "./ResumeDate.module.scss";

export default function ResumeDate({ value }: {
  value: ComponentChild;
}) {
  return (
    <span className={cssClasses.ResumeDate}>{value}</span>
  );
}