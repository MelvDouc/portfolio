import cssClasses from "./Page.module.scss";

export default function Page({ center, title, inPageTitle, children }: {
  center?: boolean;
  title: string;
  inPageTitle?: string | Node;
  children?: any;
}): HTMLElement {
  document.title = `${title} | Melvin Doucet's website`;
  inPageTitle ??= title;

  return (
    <div className={{ [cssClasses.Page]: true, [cssClasses.Center]: !!center }}>
      {typeof inPageTitle === "string"
        ? (<h1>{inPageTitle}</h1>)
        : (inPageTitle)}
      {children}
    </div>
  );
}