import type Connect4Game from "@/components/Connect4/game/Game.js";
import cssClasses from "./Connect4Controls.module.scss";

export default function Connect4Controls({ game }: {
  game: Connect4Game;
}) {
  return (
    <div className={cssClasses.Connect4Controls}>
      <button className="btn btn-primary" on:click={() => game.undoLastMove()}>Undo</button>
      <button className="btn btn-primary" on:click={() => game.restart()}>New Game</button>
    </div>
  );
}