export default function Page({ title, center, children }: {
  title: string;
  center?: boolean;
  children?: any;
}): HTMLElement {
  document.title = `${title} | Melvin Doucet's website`;

  return (
    <div className={{ page: true, "page-center": !!center }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}