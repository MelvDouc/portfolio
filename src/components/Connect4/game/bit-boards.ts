import { indexOf, NB_CELLS } from "@/components/Connect4/game/BoardDimensions.js";
import { createNOT, setBits } from "@/utils/bitBoards.js";

export const not = createNOT(NB_CELLS);
export const bitboardOf = (y: number, x: number): bigint => 1n << BigInt(indexOf(y, x));