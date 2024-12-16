import Cell from "@/components/Connect4/Cell/Cell.js";
import { BOARD_HEIGHT, BOARD_WIDTH, indexOf } from "@/components/Connect4/game/BoardDimensions.js";
import Game from "@/components/Connect4/game/Game.js";
import cssClasses from "./Board.module.scss";

export default function Board() {
  const cells: Cell[] = [];
  let winningLine: number[] = [];

  Game.instance.onAction((action) => {
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
      {Array.from({ length: BOARD_HEIGHT }, (_, y) => (
        <section className={cssClasses.BoardRow}>
          {Array.from({ length: BOARD_WIDTH }, (_, x) => {
            const cell = new Cell(indexOf(y, x));
            cells.push(cell);
            return cell;
          })}
        </section>
      ))}
    </div>
  );
}