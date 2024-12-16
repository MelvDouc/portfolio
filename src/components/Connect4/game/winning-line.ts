import { bitboardOf, getIndices } from "@/components/Connect4/game/bit-boards.js";
import { BOARD_HEIGHT, BOARD_WIDTH } from "@/components/Connect4/game/BoardDimensions.js";

const MASK_SIZE = 4;

const rowMask = (1n << BigInt(MASK_SIZE)) - 1n;
const colMask = 1n | bitboardOf(1, 0) | bitboardOf(2, 0) | bitboardOf(3, 0);
const diagonalMask = bitboardOf(0, 0) | bitboardOf(1, 1) | bitboardOf(2, 2) | bitboardOf(3, 3);
const antidiagonalMask = bitboardOf(3, 0) | bitboardOf(2, 1) | bitboardOf(1, 2) | bitboardOf(0, 3);
const allMasks: bigint[] = [];

for (let y = 0; y < BOARD_HEIGHT; y++) {
  for (let x = 0; x < BOARD_WIDTH; x++) {
    const shift = BigInt(BOARD_WIDTH * y + x);

    if (y <= BOARD_HEIGHT - MASK_SIZE)
      allMasks.push(colMask << shift);

    if (x <= BOARD_WIDTH - MASK_SIZE) {
      allMasks.push(rowMask << shift);

      if (y <= BOARD_HEIGHT - MASK_SIZE) {
        allMasks.push(diagonalMask << shift);
        allMasks.push(antidiagonalMask << shift);
      }
    }
  }
}

export function findWinningLine(bitBoard: bigint): number[] | null {
  for (let mask of allMasks)
    if ((bitBoard & mask) === mask)
      return getIndices(mask);

  return null;
}