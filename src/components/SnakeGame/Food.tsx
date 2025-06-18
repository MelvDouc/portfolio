import food from "@/assets/snake/food.png";
import type Snake from "@/components/SnakeGame/Snake.js";
import { randomInt } from "@/utils/random.js";

export default class Food {
  private static randomCoord(squaresPerLine: number, squareSize: number): number {
    return randomInt(0, squaresPerLine - 1) * squareSize;
  }

  public readonly image: HTMLImageElement;
  public x: number;
  public y: number;

  constructor(width: number, squareSize: number) {
    this.image = (<img src={food} />);
    this.x = width - squareSize * 2;
    this.y = squareSize;
  }

  public randomizeCoords(squaresPerLine: number, squareSize: number, snake: Snake): void {
    do {
      this.x = Food.randomCoord(squaresPerLine, squareSize);
      this.y = Food.randomCoord(squaresPerLine, squareSize);
    } while (snake.some(({ x, y }) => x === this.x && y === this.y));
  }
}