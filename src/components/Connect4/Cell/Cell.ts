import Player from "@/components/Connect4/game/Player.js";
import cssClasses from "./Cell.module.scss";

export default class Cell extends HTMLElement {
  public constructor(play: VoidFunction) {
    super();
    this.classList.add(cssClasses.Cell);
    this.addEventListener("click", play);
  }

  public setPiece(player: Player): void {
    switch (player) {
      case Player.RED:
        this.dataset.color = "red";
        break;
      case Player.YELLOW:
        this.dataset.color = "yellow";
    }
  }

  public removePiece(): void {
    this.dataset.color = "";
  }

  public setWinning(winning: boolean): void {
    winning
      ? this.classList.add(cssClasses.CellWin)
      : this.classList.remove(cssClasses.CellWin);
  }

  public reset(): void {
    this.removePiece();
    this.setWinning(false);
  }
}

customElements.define("connect4-cell", Cell);