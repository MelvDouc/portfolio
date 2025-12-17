const xOffsets = [-1, -1, -1, 0, 0, 1, 1, 1];
const yOffsets = [-1, 0, 1, -1, 1, -1, 0, 1];

export function coordsToIndex(x: number, y: number, numberOfRows: number): number {
  return x * numberOfRows + y;
}

export function indexToCoords(index: number, numberOfRows: number): { x: number; y: number; } {
  return {
    x: Math.floor(index / numberOfRows),
    y: index % numberOfRows
  };
}

export function* adjacentCoords(x: number, y: number, numberOfRows: number, numberOfCols: number) {
  for (let i = 0; i < xOffsets.length; i++) {
    const coords = {
      x: x + xOffsets[i],
      y: y + yOffsets[i]
    };
    if (coords.x >= 0 && coords.x < numberOfRows && coords.y >= 0 && coords.y < numberOfCols)
      yield coords;
  }
}