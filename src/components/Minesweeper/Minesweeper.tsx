import AlertBox from "@/components/AlertBox/AlertBox.jsx";
import FlagCounter from "@/components/Minesweeper/FlagCounter/FlagCounter.jsx";
import MinesweeperActionKind from "@/components/Minesweeper/MinesweeperActionKind.js";
import MinesweeperCell from "@/components/Minesweeper/MinesweeperCell/MinesweeperCell.jsx";
import MinesweeperGame from "@/components/Minesweeper/MinesweeperGame.js";
import MinesweeperGrid from "@/components/Minesweeper/MinesweeperGrid/MinesweeperGrid.js";

import cssClasses from "./Minesweeper.module.scss";

export default function Minesweeper() {
  const game = MinesweeperGame.create({
    height: 10,
    width: 10,
    numberOfMines: 20
  });
  const cells = Array.from({ length: game.numberOfCells }, (_, i) => {
    return new MinesweeperCell(game, i);
  });

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
        AlertBox.create({ message: "You win!", type: "primary" });
        break;
      case MinesweeperActionKind.GameLoss:
        action.minedCellIndices.forEach((index) => {
          cells[index].setMined(true);
        });
        AlertBox.create({ message: "Boom!", type: "danger" });
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
    <div className={cssClasses.Minesweeper}>
      <section className={cssClasses.Minesweeper__Top}>
        <MinesweeperGrid cells={cells} />
      </section>
      <section className={cssClasses.Minesweeper__Bottom}>
        <FlagCounter initialCount={game.flagCount} onCountChange={onFlagCountChange} />
        <button className="btn btn-primary" on:click={() => game.reset()}>New Game</button>
      </section>
    </div>
  );
}