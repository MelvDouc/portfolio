import MinesweeperActionKind from "@/components/Minesweeper/MinesweeperActionKind.js";
import { createNOT, isBitSet, maxBitboard, setBit, setBits, singleBitBoard } from "@/utils/bitBoards.js";
import { randomInt } from "@/utils/random.js";

export default class MinesweeperGame {
  public static create(params: MinesweeperGameParams): MinesweeperGame {
    return new this(params);
  }

  private static createAdjacentMasks(height: number, width: number): bigint[] {
    const rowOffsets = [-1, -1, -1, 0, 0, 1, 1, 1];
    const colOffsets = [-1, 0, 1, -1, 1, -1, 0, 1];

    return Array.from({ length: height * width }, (_, i) => {
      const srcRow = Math.floor(i / width);
      const srcCol = i % width;
      let mask = 0n;

      for (const [i, rowOffset] of rowOffsets.entries()) {
        const colOffset = colOffsets[i];
        const destRow = srcRow + rowOffset;
        const destCol = srcCol + colOffset;

        if (destRow >= 0 && destRow < height && destCol >= 0 && destCol < width) {
          const destIndex = destRow * width + destCol;
          mask = setBit(mask, destIndex);
        }
      }

      return mask;
    });
  }

  private readonly _height: number;
  private readonly _width: number;
  private readonly _numberOfMines: number;
  private readonly _adjacentMasks: bigint[];
  private readonly _adjacentMineCounts: number[];
  private readonly _eventTarget = new EventTarget();
  private readonly _NOT: (bitBoard: bigint) => bigint;
  private _coveredCellsBitBoard: bigint;
  private _minedCellsBitBoard = 0n;
  private _flaggedCellsBitBoard = 0n;
  private _flagCount: number;
  private _isOver = false;

  private constructor({ height, width, numberOfMines }: MinesweeperGameParams) {
    this._height = height;
    this._width = width;
    this._numberOfMines = numberOfMines;
    this._adjacentMasks = MinesweeperGame.createAdjacentMasks(this._height, this._width);
    this._adjacentMineCounts = Array(this.numberOfCells).fill(0);
    this._NOT = createNOT(this.numberOfCells);
    this._coveredCellsBitBoard = maxBitboard(this.numberOfCells);
    this._flagCount = this._numberOfMines;
  }

  public get height(): number {
    return this._height;
  }

  public get width(): number {
    return this._width;
  }

  public get numberOfCells(): number {
    return this._height * this._width;
  }

  public get flagCount(): number {
    return this._flagCount;
  }

  public uncoverCell(index: number): void {
    if (this._isOver || !this._isCellCovered(index) || this._isCellFlagged(index))
      return;

    if (!this._areMinesPlaced())
      this._placeMines(index);

    this._uncoverSingleCell(index);

    if (this._checkLoss(index))
      return;

    this._uncoverAdjacentCells(index);
    this._checkWin();
  }

  public toggleFlag(index: number): void {
    if (this._isOver || !this._isCellCovered(index))
      return;

    if (this._isCellFlagged(index)) {
      this._flaggedCellsBitBoard &= this._NOT(singleBitBoard(index));
      this._flagCount++;
      this._emitToggleFlagAction(index, false);
      return;
    }

    if (this._flagCount === 0)
      return;

    this._flaggedCellsBitBoard |= singleBitBoard(index);
    this._flagCount--;
    this._emitToggleFlagAction(index, true);
    this._checkWin();
  }

  public reset(): void {
    this._adjacentMineCounts.forEach((_, i, arr) => arr[i] = 0);
    this._coveredCellsBitBoard = maxBitboard(this.numberOfCells);
    this._minedCellsBitBoard = 0n;
    this._flaggedCellsBitBoard = 0n;
    this._flagCount = this._numberOfMines;
    this._isOver = false;
    this._emitAction({ kind: MinesweeperActionKind.NewGame });
  }

  public onAction(listener: (action: MinesweeperGameAction) => void): void {
    this._eventTarget.addEventListener("game-action", (e) => {
      listener((e as CustomEvent<MinesweeperGameAction>).detail);
    });
  }

  private _emitAction(action: MinesweeperGameAction): void {
    this._eventTarget.dispatchEvent(
      new CustomEvent("game-action", { detail: action })
    );
  }

  private _emitToggleFlagAction(index: number, isFlagged: boolean): void {
    this._emitAction({
      kind: MinesweeperActionKind.ToggleCellFlag,
      index,
      isFlagged,
      newFlagCount: this._flagCount
    });
  }

  private _isCellCovered(index: number): boolean {
    return isBitSet(this._coveredCellsBitBoard, index);
  }

  private _isCellMined(index: number): boolean {
    return isBitSet(this._minedCellsBitBoard, index);
  }

  private _isCellFlagged(index: number): boolean {
    return isBitSet(this._flaggedCellsBitBoard, index);
  }

  private _areMinesPlaced(): boolean {
    return this._minedCellsBitBoard !== 0n;
  }

  private _isWin(): boolean {
    return this._areMinesPlaced()
      && this._coveredCellsBitBoard === this._minedCellsBitBoard
      && this._flaggedCellsBitBoard === this._minedCellsBitBoard;
  }

  private _checkWin(): void {
    if (this._isWin()) {
      this._emitAction({ kind: MinesweeperActionKind.GameWin });
      this._isOver = true;
    }
  }

  private _checkLoss(index: number): boolean {
    if (!this._isCellMined(index))
      return false;

    this._emitAction({
      kind: MinesweeperActionKind.GameLoss,
      minedCellIndices: [...setBits(this._minedCellsBitBoard)]
    });
    this._isOver = true;
    return true;
  }

  private _placeMines(excludedIndex: number): void {
    let count = 0;

    while (count < this._numberOfMines) {
      const index = randomInt(0, this.numberOfCells - 1);

      if (index === excludedIndex || isBitSet(this._minedCellsBitBoard, index))
        continue;

      this._minedCellsBitBoard = setBit(this._minedCellsBitBoard, index);
      count++;

      for (const destIndex of setBits(this._adjacentMasks[index]))
        this._adjacentMineCounts[destIndex]++;
    }
  }

  private _uncoverSingleCell(index: number): void {
    this._coveredCellsBitBoard &= this._NOT(singleBitBoard(index));
    this._emitAction({
      kind: MinesweeperActionKind.UncoverCell,
      index,
      adjacentMineCount: this._adjacentMineCounts[index]
    });
  }

  private _uncoverAdjacentCells(index: number): void {
    // cells adjacent + covered + not flagged + not mined
    const adjacentBitBoard = this._adjacentMasks[index]
      & this._coveredCellsBitBoard
      & this._NOT(this._flaggedCellsBitBoard)
      & this._NOT(this._minedCellsBitBoard);

    for (const destIndex of setBits(adjacentBitBoard)) {
      this._uncoverSingleCell(destIndex);

      if (this._adjacentMineCounts[destIndex] === 0)
        this._uncoverAdjacentCells(destIndex);
    }
  }
}

// ===== ===== ===== ===== =====
// TYPES
// ===== ===== ===== ===== =====

type MinesweeperGameParams = {
  height: number;
  width: number;
  numberOfMines: number;
};

type UncoverCellAction = {
  kind: MinesweeperActionKind.UncoverCell;
  index: number;
  adjacentMineCount: number;
};

type ToggleCellFlagAction = {
  kind: MinesweeperActionKind.ToggleCellFlag;
  index: number;
  isFlagged: boolean;
  newFlagCount: number;
};

type GameWinAction = {
  kind: MinesweeperActionKind.GameWin;
};

type GameLossAction = {
  kind: MinesweeperActionKind.GameLoss;
  minedCellIndices: number[];
};

type NewGameAction = {
  kind: MinesweeperActionKind.NewGame;
};

type MinesweeperGameAction =
  | UncoverCellAction
  | ToggleCellFlagAction
  | GameWinAction
  | GameLossAction
  | NewGameAction;