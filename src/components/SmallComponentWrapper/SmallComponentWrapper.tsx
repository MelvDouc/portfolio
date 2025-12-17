import cssClasses from "./SmallComponentWrapper.module.scss";

export default function SmallComponentWrapper({ children }: { children?: any; }) {
  return (
    <div className={cssClasses.smallComponentWrapper}>
      {children}
    </div>
  );
}
