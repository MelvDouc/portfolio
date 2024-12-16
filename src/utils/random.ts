const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
const specialChars = "~#-|_@$£%*.?!";

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomLowercase(): string {
  return alphabet[randomInt(0, 26 - 1)];
}

export function randomUppercase(): string {
  return randomLowercase().toUpperCase();
}

export function randomDigit(): string {
  return String(randomInt(0, 9));
}

export function randomSpecialChar(): string {
  return specialChars[randomInt(0, specialChars.length - 1)];
}

export function shuffleArray<T extends Array<unknown>>(array: T): T {
  let i: number, j: number;

  for (i = array.length - 1; i > 0; i--) {
    j = randomInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}