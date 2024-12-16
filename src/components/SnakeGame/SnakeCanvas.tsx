import AlertBox from "@/components/AlertBox/AlertBox.jsx";
import { setIntervalOnAnimationFrame } from "@/utils/animation.js";
import Food from "./Food.jsx";
import Snake from "./Snake.js";

export default class SnakeCanvas extends HTMLCanvasElement {
  public readonly squaresPerLine: number = 15;
  public readonly squareSize: number;
  public readonly snake: Snake;
  public readonly food: Food;
  public score = 0;
  private readonly steerSnake: (e: KeyboardEvent) => void;

  constructor() {
    super();
    this.width = this.getIdealWidth();
    this.squareSize = this.width / this.squaresPerLine;
    this.height = this.width;
    this.snake = new Snake(this);
    this.food = new Food(this);
    this.steerSnake = (e) => this.snake.steer(e.key);
  }

  connectedCallback() {
    document.addEventListener("keydown", this.steerSnake);
    this.playGame();
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this.steerSnake);
  }

  private createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0, "#33DD24");
    gradient.addColorStop(0.5, "#83E358");
    gradient.addColorStop(1, "#33DD24");
    return gradient;
  }

  private getIdealWidth(): number {
    let width = Math.floor(window.innerWidth * 0.8);
    // get first multiple of `this.squaresPerLine` <= width
    width -= width % this.squaresPerLine;
    return Math.min(width, 600);
  }

  private playGame(): void {
    const ctx = this.getContext("2d")!;
    const { width, squareSize, snake, food } = this;
    const abortController = new AbortController();
    ctx.font = "45px Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const gradient = this.createGradient(ctx);

    abortController.signal.addEventListener("abort", () => {
      AlertBox.create({
        message: "The snake swallowed its own tail!"
      });
    });

    setIntervalOnAnimationFrame(() => {
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, width);
      ctx.fillStyle = "white";
      ctx.fillText(`${this.score}`, width / 2, width / 2);
      ctx.fillStyle = "purple";
      ctx.strokeStyle = "lightpurple";

      for (const { x, y } of snake) {
        ctx.fillRect(x, y, squareSize, squareSize);
        ctx.strokeRect(x, y, squareSize, squareSize);
      }

      ctx.drawImage(food.image, food.x, food.y, squareSize, squareSize);
      const newHead = snake.getNewHead();

      if (newHead.x === food.x && newHead.y === food.y) {
        this.score++;
        food.randomizeCoords();
      } else {
        snake.pop();
      }

      if (snake.isCollision(newHead))
        abortController.abort();

      snake.unshift(newHead);
    }, 100, abortController);
  }
}

customElements.define("snake-canvas", SnakeCanvas, { extends: "canvas" });