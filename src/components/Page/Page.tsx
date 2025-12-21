import type { ComponentChild } from "reactfree-jsx";
import cssClasses from "./Page.module.scss";

export default function Page({ center, title, inPageTitle, children }: {
  center?: boolean;
  title: string;
  inPageTitle?: string | Node;
  children?: ComponentChild;
}) {
  document.title = `${title} | Melvin Doucet's website`;
  inPageTitle ??= title;

  return (
    <div
      className={{
        [cssClasses.Page]: true,
        [cssClasses.Center]: !!center
      }}
    >
      <h1>{inPageTitle ?? title}</h1>
      {children}
    </div>
  );
}