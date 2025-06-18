import cssClasses from "./ResumeDate.module.scss";

export default function ResumeDate({ value }: {
  value: string | number;
}): HTMLElement {
  return (
    <span className={cssClasses.ResumeDate}>{value}</span>
  );
}