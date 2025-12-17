import type { ComponentChild } from "reactfree-jsx";
import cssClasses from "./Page.module.scss";

export default function Page({ center, title, inPageTitle, children }: {
  center?: boolean;
  title: string;
  inPageTitle?: string | Element;
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
      <PageTitle title={inPageTitle ?? title} />
      {children}
    </div>
  );
}

function PageTitle({ title }: {
  title: string | Element;
}) {
  if (typeof title === "string")
    return (
      <h1>{title}</h1>
    );

  return (<>{title}</>);
}