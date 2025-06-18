import AlertBox from "@/components/AlertBox/AlertBox.jsx";
import Food from "@/components/SnakeGame/Food.jsx";
import Snake from "@/components/SnakeGame/Snake.js";
import { setIntervalOnAnimationFrame } from "@/services/animations.service.js";

export default class SnakeCanvas extends HTMLCanvasElement {
  private static readonly CLR_NOKIA_SCREEN = "#C7F0D8";
  private static readonly CLR_NOKIA_TEXT = "#43523D";

  public readonly squaresPerLine: number = 15;
  public squareSize!: number;
  public snake!: Snake;
  public food!: Food;
  public score = 0;

  constructor() {
    super();
  }

  connectedCallback() {
    this.width = this._getIdealSize();
    this.height = this.width;
    this.squareSize = this.width / this.squaresPerLine;
    const initialSnakeXY = (Math.ceil(this.squaresPerLine / 2) - 1) * this.squareSize;
    this.snake = new Snake(initialSnakeXY);
    this.food = new Food(this.width, this.squareSize);

    const ctx = this._init();
    document.addEventListener("keydown", this._steerSnake);
    this._playGame(ctx);
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this._steerSnake);
  }

  private _getIdealSize(): number {
    const parent = this.parentElement as HTMLElement;
    const { height, width } = parent.getBoundingClientRect();
    const min = Math.min(height, width);
    return min - min % this.squaresPerLine;
  }

  private _playGame(ctx: CanvasRenderingContext2D): void {
    const abortController = new AbortController();

    abortController.signal.addEventListener("abort", () => {
      AlertBox.create({
        message: "The snake swallowed its own tail!"
      });
    });

    setIntervalOnAnimationFrame(() => {
      this._paintBackground(ctx);
      this._paintSnake(ctx);
      this._paintFood(ctx);
      const newHead = this.snake.getNewHead(this.width, this.squareSize);

      if (newHead.x === this.food.x && newHead.y === this.food.y) {
        this.score++;
        this.food.randomizeCoords(this.squaresPerLine, this.squareSize, this.snake);
      } else {
        this.snake.pop();
      }

      if (this.snake.isCollision(newHead))
        abortController.abort();

      this.snake.unshift(newHead);
    }, 100, abortController);
  }

  private _paintBackground(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = SnakeCanvas.CLR_NOKIA_SCREEN;
    ctx.fillRect(0, 0, this.width, this.width);
    ctx.fillStyle = SnakeCanvas.CLR_NOKIA_TEXT;
    ctx.fillText(this.score.toString(), this.width / 2, this.width / 2);
  }

  private _paintSnake(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = SnakeCanvas.CLR_NOKIA_TEXT;
    ctx.strokeStyle = SnakeCanvas.CLR_NOKIA_SCREEN;

    for (const { x, y } of this.snake) {
      ctx.fillRect(x, y, this.squareSize, this.squareSize);
      ctx.strokeRect(x, y, this.squareSize, this.squareSize);
    }
  }

  private _paintFood(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.food.image, this.food.x, this.food.y, this.squareSize, this.squareSize);
  }

  private _init(): CanvasRenderingContext2D {
    const ctx = this.getContext("2d")!;
    ctx.font = "45px Courier";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    this._paintBackground(ctx);
    this._paintSnake(ctx);
    this._paintFood(ctx);
    return ctx;
  }

  private readonly _steerSnake = (e: KeyboardEvent): void => {
    this.snake.steer(e.key);
  };
}

customElements.define("snake-canvas", SnakeCanvas, { extends: "canvas" });