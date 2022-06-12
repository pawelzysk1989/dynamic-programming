type Grid = [number, number];

const fromGridToKey = ([m, n]: Grid) => {
  if (m < n) {
    return `${m},${n}`;
  }
  return `${n},${m}`;
};

const gridTraveller = (
  grid: Grid,
  memo = {} as Record<string, number>
): number => {
  const [gridX, gridY] = grid;
  if (gridX <= 0 || gridY <= 0) {
    return 0;
  }

  if (gridX === 1 && gridY === 1) {
    return 1;
  }

  const key = fromGridToKey(grid);

  if (key in memo) {
    return memo[key];
  }

  return (memo[key] =
    gridTraveller([gridX - 1, gridY], memo) +
    gridTraveller([gridX, gridY - 1], memo));
};

console.log(gridTraveller([18, 18]));
