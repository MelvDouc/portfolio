import { type Obs, obs } from "reactfree-jsx";
import {
  randomLowercase,
  randomUppercase,
  randomDigit,
  randomSpecialChar,
  shuffleArray
} from "@/utils/random.js";

export default class PasswordState {
  public static readonly randomCharFunctions = {
    lowercase: randomLowercase,
    uppercase: randomUppercase,
    digits: randomDigit,
    "special-chars": randomSpecialChar
  };

  public password: Obs<string>;
  public length: Obs<number>;
  public selectedOptions: Obs<Set<keyof typeof PasswordState["randomCharFunctions"]>>;
  public readonly MIN_LENGTH = 1;
  public readonly MAX_LENGTH = 50;

  constructor() {
    this.password = obs("");
    this.length = obs(15);
    this.selectedOptions = obs(new Set([
      "lowercase",
      "uppercase",
      "digits"
    ]));

    this.length.subscribe(() => this.updatePassword());
    this.selectedOptions.subscribe(() => this.updatePassword());
  }

  public isValidLength(length: number): boolean {
    return length >= this.MIN_LENGTH && length <= this.MAX_LENGTH;
  }

  public updatePassword() {
    if (!this.selectedOptions.value.size)
      return;

    const password: string[] = [];
    const length = this.length.value;

    while (password.length < length)
      for (const option of this.selectedOptions.value)
        password.push(PasswordState.randomCharFunctions[option]());

    this.password.value = shuffleArray(password)
      .slice(0, length)
      .join("");
  }
}