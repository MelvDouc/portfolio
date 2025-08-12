import { Arrows, type Arrow } from "@/components/SnakeGame/Direction.js";
import cssClasses from "./ControlArrows.module.scss";

export default function ControlArrows() {
  return (
    <div className={cssClasses.ControlArrows}>
      <section className={cssClasses.Row}>
        <ControlArrow arrow={Arrows.Up} />
      </section>
      <section className={cssClasses.Row}>
        <ControlArrow arrow={Arrows.Left} />
        <ControlArrow arrow={Arrows.Right} />
      </section>
      <section className={cssClasses.Row}>
        <ControlArrow arrow={Arrows.Down} />
      </section>
    </div>
  );
}

function ControlArrow({ arrow }: {
  arrow: Arrow;
}) {
  const event = new KeyboardEvent("keydown", { key: arrow });
  const handleClick = () => {
    document.dispatchEvent(event);
  };

  return (
    <button
      className={cssClasses.ControlArrow}
      data-arrow={arrow}
      on:click={handleClick}
    ></button>
  );
}