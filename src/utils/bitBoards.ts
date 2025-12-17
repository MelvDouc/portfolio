const NB_BIT_BOARDS = 1000;
const SINGLE_BIT_BOARDS: bigint[] = [];
const log2Map = new Map<bigint, number>();

for (let i = 0; i < NB_BIT_BOARDS; i++) {
  SINGLE_BIT_BOARDS[i] = 1n << BigInt(i);
  log2Map.set(SINGLE_BIT_BOARDS[i], i);
}

export const singleBitBoard = (pos: number): bigint => SINGLE_BIT_BOARDS[pos];
export const setBit = (bitBoard: bigint, pos: number): bigint => bitBoard | SINGLE_BIT_BOARDS[pos];
export const isBitSet = (bitBoard: bigint, pos: number): boolean => (bitBoard & SINGLE_BIT_BOARDS[pos]) !== 0n;
export const maxBitboard = (size: number): bigint => (1n << BigInt(size)) - 1n;

export function log2BigInt(bitBoard: bigint): number {
  if (log2Map.has(bitBoard))
    return log2Map.get(bitBoard) as number;

  throw new Error(`Invalid bit board: ${bitBoard}`);
}

export function createNOT(size: number): (bitBoard: bigint) => bigint {
  const MAX_BITBOARD = maxBitboard(size);
  return (bitBoard) => MAX_BITBOARD - bitBoard;
}

export function* setBits(bitBoard: bigint): Generator<number> {
  while (bitBoard) {
    const index = log2BigInt(bitBoard & -bitBoard);
    yield index;
    bitBoard &= (bitBoard - 1n);
  }
}

export function countOnes(bitBoard: bigint): number {
  let count = 0;

  for (const _ of setBits(bitBoard))
    count++;

  return count;
}

export function printBitBoard(bitBoard: bigint, height: number, width: number): void {
  let output = "\n";

  for (let row = height - 1; row >= 0; row--) {
    let r = "";

    for (let col = 0; col < width; col++) {
      r += isBitSet(bitBoard, row * width + col) ? "1" : "0";
    }

    output += r + "\n";
  }

  console.log(output);
}