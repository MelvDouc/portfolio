import { Arrows, type Arrow } from "@/components/SnakeGame/Direction.js";
import cssClasses from "./ControlArrows.module.scss";

export default function ControlArrows(): HTMLElement {
  return (
    <div className={cssClasses.ControlArrows}>
      <section className={cssClasses.Row}>
        <ControlArrow arrow={Arrows.Up}>⬆️</ControlArrow>
      </section>
      <section className={cssClasses.Row}>
        <ControlArrow arrow={Arrows.Left}>⬅️</ControlArrow>
        <ControlArrow arrow={Arrows.Right}>➡️</ControlArrow>
      </section>
      <section className={cssClasses.Row}>
        <ControlArrow arrow={Arrows.Down}>⬇️</ControlArrow>
      </section>
    </div>
  );
}

function ControlArrow({ arrow }: {
  arrow: Arrow;
}): HTMLElement {
  const event = new KeyboardEvent("keydown", { key: arrow });
  const handleClick = () => {
    document.dispatchEvent(event);
  };

  return (
    <button
      className={cssClasses.ControlArrow}
      data-arrow={arrow}
      onclick={handleClick}
    ></button>
  );
}