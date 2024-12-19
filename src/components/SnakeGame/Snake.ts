import Direction, { Arrows } from "@/components/SnakeGame/Direction.js";
import type { Coords } from "@/types.js";

export default class Snake extends Array<Coords> {
  private _direction: Direction = Direction.None;

  public constructor(initialXY: number) {
    super();
    this[0] = { x: initialXY, y: initialXY };
  }

  public isMovingVertically(): boolean {
    return this._direction === Direction.Up
      || this._direction === Direction.Down;
  }

  public isMovingHorizontally(): boolean {
    return this._direction === Direction.Left
      || this._direction === Direction.Right;
  }

  public isCollision(newHead: Coords): boolean {
    return this.length >= 4
      && this.some(({ x, y }) => x === newHead.x && y === newHead.y);
  }

  public getNewHead(canvasWidth: number, squareSize: number): Coords {
    const newHead = { ...this[0] };

    switch (this._direction) {
      case Direction.Left:
        newHead.x = (newHead.x - squareSize + canvasWidth) % canvasWidth;
        break;
      case Direction.Right:
        newHead.x = (newHead.x + squareSize) % canvasWidth;
        break;
      case Direction.Up:
        newHead.y = (newHead.y - squareSize + canvasWidth) % canvasWidth;
        break;
      case Direction.Down:
        newHead.y = (newHead.y + squareSize) % canvasWidth;
    }

    return newHead;
  }

  public steer(arrow: string): void {
    switch (arrow) {
      case Arrows.Left:
        if (!this.isMovingHorizontally())
          this._direction = Direction.Left;
        return;
      case Arrows.Right:
        if (!this.isMovingHorizontally())
          this._direction = Direction.Right;
        return;
      case Arrows.Down:
        if (!this.isMovingVertically())
          this._direction = Direction.Down;
      case Arrows.Up:
        if (!this.isMovingVertically())
          this._direction = Direction.Up;
        return;
    }
  }
}