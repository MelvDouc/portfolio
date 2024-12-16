import FlagCounter from "@/components/Minesweeper/FlagCounter/FlagCounter.jsx";
import MinesweeperActionKind from "@/components/Minesweeper/MinesweeperActionKind.js";
import MinesweeperCell from "@/components/Minesweeper/MinesweeperCell/MinesweeperCell.jsx";
import MinesweeperGame from "@/components/Minesweeper/MinesweeperGame.js";
import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";
import cssClasses from "./Minesweeper.module.scss";

export default function Minesweeper() {
  const game = MinesweeperGame.create({
    height: 10,
    width: 10,
    numberOfMines: 20
  });
  const cells: MinesweeperCell[] = [];

  game.onAction((action) => {
    switch (action.kind) {
      case MinesweeperActionKind.UncoverCell:
        cells[action.index].setCovered(false);
        cells[action.index].setAdjacentMineCount(action.adjacentMineCount);
        break;
      case MinesweeperActionKind.ToggleCellFlag:
        cells[action.index].setFlagged(action.isFlagged);
        break;
      case MinesweeperActionKind.GameWin:
        alert("You win!");
        break;
      case MinesweeperActionKind.GameLoss:
        action.minedCellIndices.forEach((index) => {
          cells[index].setMined(true);
        });
        break;
      case MinesweeperActionKind.NewGame:
        cells.forEach((cell) => cell.reset());
    }
  });

  const onFlagCountChange = (listener: (flagCount: number) => void): void => {
    game.onAction((action) => {
      switch (action.kind) {
        case MinesweeperActionKind.ToggleCellFlag:
          listener(action.newFlagCount);
          break;
        case MinesweeperActionKind.NewGame:
          listener(game.flagCount);
      }
    });
  };

  return (
    <SmallComponentWrapper>
      <div className={cssClasses.Minesweeper}>
        <article className={cssClasses.MinesweeperGrid}>
          {Array.from({ length: game.height }, (_, row) => (
            <section className={cssClasses.MinesweeperRow}>
              {Array.from({ length: game.width }, (_, col) => {
                const cell = new MinesweeperCell(game, row * game.width + col);
                cells.push(cell);
                return cell;
              })}
            </section>
          ))}
        </article>
        <article className={cssClasses.MinesweeperControls}>
          <FlagCounter initialCount={game.flagCount} onCountChange={onFlagCountChange} />
          <button className="btn btn-primary" onclick={() => game.reset()}>New Game</button>
        </article>
      </div>
    </SmallComponentWrapper>
  );
}