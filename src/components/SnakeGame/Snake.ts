import Direction from "@/components/SnakeGame/Direction.js";
import type { Coords } from "@/types.js";

export default class Snake extends Array<Coords> {
  private direction: Direction = Direction.None;

  constructor(initialXY: number) {
    super();
    this[0] = { x: initialXY, y: initialXY };
  }

  isCollision(newHead: Coords): boolean {
    return this.length >= 4
      && this.some(({ x, y }) => x === newHead.x && y === newHead.y);
  }

  getNewHead(canvasWidth: number, squareSize: number): Coords {
    const newHead = { ...this[0] };

    switch (this.direction) {
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

  steer(key: string): void {
    switch (key) {
      case "ArrowLeft":
        if (this.direction !== Direction.Left && this.direction !== Direction.Right)
          this.direction = Direction.Left;
        return;
      case "ArrowRight":
        if (this.direction !== Direction.Left && this.direction !== Direction.Right)
          this.direction = Direction.Right;
        return;
      case "ArrowUp":
        if (this.direction !== Direction.Down && this.direction !== Direction.Up)
          this.direction = Direction.Up;
        return;
      case "ArrowDown":
        if (this.direction !== Direction.Down && this.direction !== Direction.Up)
          this.direction = Direction.Down;
    }
  }
}