import cssClasses from "./FlagCounter.module.scss";

export default function FlagCounter({ initialCount, onCountChange }: {
  initialCount: number;
  onCountChange: (listener: (count: number) => void) => void;
}) {
  const $init = (element: HTMLElement) => {
    onCountChange((count) => {
      element.innerText = String(count);
    });
  };

  return (
    <div className={cssClasses.FlagCounter} >
      <span className={cssClasses.FlagCounterFlag}></span>
      <span $init={$init}>{initialCount}</span>
    </div>
  );
}