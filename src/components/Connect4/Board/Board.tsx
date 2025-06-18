import Cell from "@/components/Connect4/Cell/Cell.js";
import {
  BOARD_HEIGHT,
  getX,
  getY,
  indexOf,
  NB_CELLS
} from "@/components/Connect4/game/BoardDimensions.js";
import type Game from "@/components/Connect4/game/Game.js";
import cssClasses from "./Board.module.scss";

export default function Board({ game }: {
  game: Game;
}) {
  const cells = Array.from({ length: NB_CELLS }, (_, i) => {
    return new Cell(() => game.play(i));
  });
  let winningLine: number[] = [];

  game.onAction((action) => {
    switch (action.kind) {
      case "piece-set":
        cells[action.index].setPiece(action.player);
        break;
      case "piece-removed":
        cells[action.index].removePiece();
        winningLine.forEach((i) => cells[i].setWinning(false));
        break;
      case "game-won":
        action.winningLine.forEach((i) => cells[i].setWinning(true));
        winningLine = action.winningLine;
        break;
      case "game-reset":
        cells.forEach((cell) => cell.reset());
    }
  });

  return (
    <div className={cssClasses.Board}>
      {Array.from({ length: NB_CELLS }, (_, i) => {
        const revY = BOARD_HEIGHT - getY(i) - 1;
        const x = getX(i);
        return cells[indexOf(revY, x)];
      })}
    </div>
  );
}