import { randomDigit, randomLowercase, randomSpecialChar, randomUppercase, shuffleArray } from "@/utils/random.js";

export const MIN_LENGTH = 1;
export const MAX_LENGTH = 50;
export const CHAR_OPTIONS = ["lowercase", "uppercase", "digits", "specialChars"] as const;

export const CHAR_FUNCTIONS = {
  lowercase: randomLowercase,
  uppercase: randomUppercase,
  digits: randomDigit,
  specialChars: randomSpecialChar
} as const;

export function isValidLength(len: number): boolean {
  return len >= MIN_LENGTH && len <= MAX_LENGTH;
}

/**
 * @returns `null` if no option is selected, a string otherwise.
 */
export function createPassword(options: Record<CharOption, boolean>, len: number): string | null {
  const charFunctions = Object.entries(options).reduce((acc, [charOption, selected]) => {
    if (selected)
      acc.push(CHAR_FUNCTIONS[charOption as CharOption]);
    return acc;
  }, [] as (() => string)[]);

  if (charFunctions.length === 0)
    return null;

  const chars: string[] = [];

  while (chars.length < len) {
    for (const fn of charFunctions)
      chars.push(fn());
  }

  return shuffleArray(chars).slice(0, len).join("");
}

export type CharOption = typeof CHAR_OPTIONS[number];