import Board from "@/components/Connect4/Board/Board.jsx";
import cssClasses from "@/components/Connect4/Connect4.module.scss";
import Game from "@/components/Connect4/game/Game.js";
import PlayerDisplay from "@/components/Connect4/PlayerDisplay/PlayerDisplay.jsx";
import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";

export default function Connect4() {
  const game = Game.instance;

  return (
    <SmallComponentWrapper>
      <div className={cssClasses.connect4}>
        <PlayerDisplay />
        <Board />
        <div className={cssClasses.connect4Buttons}>
          <button className="btn btn-primary" onclick={() => game.undoLastMove()}>Undo</button>
          <button className="btn btn-primary" onclick={() => game.restart()}>New Game</button>
        </div>
      </div>
    </SmallComponentWrapper>
  );
}