import Board from "@/components/Connect4/Board/Board.jsx";
import Connect4Controls from "@/components/Connect4/Connect4Controls/Connect4Controls.js";
import Game from "@/components/Connect4/game/Game.js";
import PlayerDisplay from "@/components/Connect4/PlayerDisplay/PlayerDisplay.jsx";

import cssClasses from "./Connect4.module.scss";

export default function Connect4() {
  const game = new Game();

  return (
    <div className={cssClasses.Connect4}>
      <section className={cssClasses.Connect4__Top}>
        <Board game={game} />
      </section>
      <section className={cssClasses.Connect4__Bottom}>
        <PlayerDisplay game={game} />
        <Connect4Controls game={game} />
      </section>
    </div>
  );
}