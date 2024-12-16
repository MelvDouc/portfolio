import food from "@/assets/snake/food.png";
import { randomInt } from "@/utils/random.js";
import type SnakeCanvas from "./SnakeCanvas.jsx";

export default class Food {
  public readonly image: HTMLImageElement;
  public x: number;
  public y: number;
  public randomizeCoords: VoidFunction;

  constructor({ width, squareSize, squaresPerLine, snake }: SnakeCanvas) {
    this.image = <img src={food} />;
    this.x = width - squareSize * 2;
    this.y = squareSize;
    this.randomizeCoords = () => {
      do {
        this.x = randomInt(0, squaresPerLine - 1) * squareSize;
        this.y = randomInt(0, squaresPerLine - 1) * squareSize;
      } while (snake.some(({ x, y }) => x === this.x && y === this.y));
    };
  }
}