import { indexOf, NB_CELLS } from "@/components/Connect4/game/BoardDimensions.js";
import { createNOT, isBitSet, setBit, setBits, singleBitBoard } from "@/utils/bitBoards.js";

const not = createNOT(NB_CELLS);
export const setCell = (bitBoard: bigint, cell: number): bigint => setBit(bitBoard, cell);
export const clearCell = (bitBoard: bigint, cell: number): bigint => bitBoard & not(singleBitBoard(cell));
export const isCellSet = (bitBoard: bigint, cell: number): boolean => isBitSet(bitBoard, cell);
export const bitboardOf = (y: number, x: number): bigint => 1n << BigInt(indexOf(y, x));

export function getIndices(bitBoard: bigint): number[] {
  return [...setBits(bitBoard)];
}