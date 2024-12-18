enum Direction {
  None,
  Left,
  Right,
  Down,
  Up
}

export const Arrows = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Left: "ArrowLeft",
  Right: "ArrowRight"
} as const;

export type Arrow = typeof Arrows[keyof typeof Arrows];

export default Direction;