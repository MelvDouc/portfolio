import type MinesweeperGame from "@/components/Minesweeper/MinesweeperGame.js";
import cssClasses from "./MinesweeperCell.module.scss";

export default class MinesweeperCell extends HTMLElement {
  private readonly _game: MinesweeperGame;
  private readonly _index: number;

  constructor(game: MinesweeperGame, index: number) {
    super();
    this._game = game;
    this._index = index;
    this.classList.add(cssClasses.MinesweeperCell);
    this.setCovered(true);
    this.addEventListener("click", () => {
      this._game.uncoverCell(this._index);
    });
    this.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this._game.toggleFlag(this._index);
    });
  }

  public getIndex(): number {
    return this._index;
  }

  public setCovered(covered: boolean) {
    this.dataset.covered = covered ? "1" : "0";
  }

  public setFlagged(flagged: boolean) {
    this.dataset.flagged = flagged ? "1" : "0";
  }

  public setMined(mined: boolean) {
    this.dataset.mined = mined ? "1" : "0";
  }

  public setAdjacentMineCount(count: number): void {
    this.innerText = count > 0 ? String(count) : "";
  }

  public reset(): void {
    this.setCovered(true);
    this.setFlagged(false);
    this.setMined(false);
    this.setAdjacentMineCount(0);
  }
}

customElements.define("minesweeper-cell", MinesweeperCell);
