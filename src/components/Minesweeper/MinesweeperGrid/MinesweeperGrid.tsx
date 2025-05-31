import type MinesweeperCell from "@/components/Minesweeper/MinesweeperCell/MinesweeperCell.js";

import cssClasses from "./MinesweeperGrid.module.scss";

export default function MinesweeperGrid({ cells }: {
  cells: MinesweeperCell[];
}) {
  return (
    <div className={cssClasses.MinesweeperGrid}>
      {cells}
    </div>
  );
}