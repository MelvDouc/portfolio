import type SnakeCanvas from "./SnakeCanvas.jsx";
import type { Coords } from "@/types.js";

export default class Snake extends Array<Coords> {
  private readonly canvas: SnakeCanvas;
  public direction!: "RIGHT" | "LEFT" | "UP" | "DOWN";

  constructor(canvas: SnakeCanvas) {
    super();
    this.canvas = canvas;
    this[0] = {
      x: (Math.ceil(canvas.squaresPerLine / 2) - 1) * canvas.squareSize,
      y: (Math.ceil(canvas.squaresPerLine / 2) - 1) * canvas.squareSize
    };
  }

  isCollision(newHead: Coords): boolean {
    return this.length >= 4
      && this.some(({ x, y }) => x === newHead.x && y === newHead.y);
  }

  getNewHead(): Coords {
    const newHead = { ...this[0] };

    switch (this.direction) {
      case "LEFT":
        newHead.x = (newHead.x - this.canvas.squareSize + this.canvas.width) % this.canvas.width;
        break;
      case "RIGHT":
        newHead.x = (newHead.x + this.canvas.squareSize) % this.canvas.width;
        break;
      case "UP":
        newHead.y = (newHead.y - this.canvas.squareSize + this.canvas.width) % this.canvas.width;
        break;
      case "DOWN":
        newHead.y = (newHead.y + this.canvas.squareSize) % this.canvas.width;
    }

    return newHead;
  }

  steer(key: string): void {
    switch (key) {
      case "ArrowLeft":
        if (this.direction !== "LEFT" && this.direction !== "RIGHT")
          this.direction = "LEFT";
        return;
      case "ArrowRight":
        if (this.direction !== "LEFT" && this.direction !== "RIGHT")
          this.direction = "RIGHT";
        return;
      case "ArrowUp":
        if (this.direction !== "DOWN" && this.direction !== "UP")
          this.direction = "UP";
        return;
      case "ArrowDown":
        if (this.direction !== "DOWN" && this.direction !== "UP")
          this.direction = "DOWN";
    }
  }
}