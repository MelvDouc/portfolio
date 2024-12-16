export const BOARD_HEIGHT = 6;
export const BOARD_WIDTH = 7;
export const NB_CELLS = BOARD_HEIGHT * BOARD_WIDTH;

export const indexOf = (y: number, x: number) => y * BOARD_WIDTH + x;
export const getX = (cell: number): number => cell % BOARD_WIDTH;