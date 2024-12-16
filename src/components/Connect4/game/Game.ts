import { BOARD_HEIGHT, indexOf, getX } from "@/components/Connect4/game/BoardDimensions.js";
import Player from "@/components/Connect4/game/Player.js";
import { clearCell, isCellSet, setCell } from "@/components/Connect4/game/bit-boards.js";
import { findWinningLine } from "@/components/Connect4/game/winning-line.js";

export default class Game {
  public static readonly instance = new this();

  private readonly _bitBoards: bigint[] = Array(2).fill(0n);
  private readonly _history: HistoryItem[] = [];
  private readonly _eventTarget = new EventTarget();
  private _activePlayer: Player = Player.RED;
  private _isOver = false;

  private constructor() { }

  private get _fullOccupancy(): bigint {
    return this._bitBoards[Player.RED] | this._bitBoards[Player.YELLOW];
  }

  public play(index: number): void {
    if (this._isOver)
      return;

    const actualIndex = this._firstEmptyCellOnColumn(getX(index));

    if (actualIndex === -1)
      return;

    this._bitBoards[this._activePlayer] = setCell(this._bitBoards[this._activePlayer], actualIndex);
    this._emitSetPiece(actualIndex, this._activePlayer);
    this._history.push({
      index: actualIndex,
      activePlayer: this._activePlayer
    });

    const winningLine = findWinningLine(this._bitBoards[this._activePlayer]);

    if (winningLine) {
      this._emitWin(winningLine);
      this._isOver = true;
      return;
    }

    this._setActivePlayer(1 - this._activePlayer);
  }

  public undoLastMove(): void {
    const prevState = this._history.pop();

    if (!prevState)
      return;

    const { index: cell, activePlayer } = prevState;
    this._bitBoards[activePlayer] = clearCell(this._bitBoards[activePlayer], cell);
    this._isOver = false;
    this._emitRemovedPiece(cell, activePlayer);
    this._setActivePlayer(activePlayer);
  }

  public restart(): void {
    this._bitBoards[Player.RED] = 0n;
    this._bitBoards[Player.YELLOW] = 0n;
    this._history.length = 0;
    this._activePlayer = Player.RED;
    this._isOver = false;
    this._emitAction({ kind: "game-reset" });
  }

  public onAction(listener: (action: GameAction) => void): void {
    this._eventTarget.addEventListener("game-action", (e) => {
      listener((e as CustomEvent<GameAction>).detail);
    });
  }

  private _emitAction(action: GameAction): void {
    this._eventTarget.dispatchEvent(
      new CustomEvent("game-action", { detail: action })
    );
  }

  private _emitSetPiece(index: number, player: Player): void {
    this._emitAction({
      kind: "piece-set",
      player,
      index
    });
  }

  private _emitRemovedPiece(index: number, player: Player): void {
    this._emitAction({
      kind: "piece-removed",
      player,
      index
    });
  }

  private _emitWin(winningLine: number[]): void {
    this._emitAction({
      kind: "game-won",
      winner: this._activePlayer,
      winningLine
    });
  }

  private _firstEmptyCellOnColumn(x: number): number {
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      const cell = indexOf(y, x);

      if (!isCellSet(this._fullOccupancy, cell))
        return cell;
    }

    return -1;
  }

  private _setActivePlayer(player: Player): void {
    this._activePlayer = player;
    this._emitAction({
      kind: "player-change",
      player
    });
  }
}

interface HistoryItem {
  index: number;
  activePlayer: Player;
}

type PieceSetAction = {
  kind: "piece-set";
  index: number;
  player: Player;
};

type PieceRemovedAction = {
  kind: "piece-removed";
  index: number;
  player: Player;
};

type PlayerChangeAction = {
  kind: "player-change";
  player: Player;
};

type GameWonAction = {
  kind: "game-won";
  winner: Player;
  winningLine: number[];
};

type GameResetAction = {
  kind: "game-reset";
};

type GameAction =
  | PieceSetAction
  | PieceRemovedAction
  | PlayerChangeAction
  | GameWonAction
  | GameResetAction;