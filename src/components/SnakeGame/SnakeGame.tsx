import ControlArrows from "@/components/SnakeGame/ControlArrows/ControlArrows.jsx";
import SnakeCanvas from "@/components/SnakeGame/SnakeCanvas.jsx";

import cssClasses from "./SnakeGame.module.scss";

export default function SnakeGame() {
  return (
    <div className={cssClasses.SnakeGame}>
      {new SnakeCanvas()}
      <ControlArrows />
    </div>
  );
}