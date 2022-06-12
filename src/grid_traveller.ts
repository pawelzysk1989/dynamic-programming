type Grid = [number, number];

const fromGridToKey = ([m, n]: Grid) => `${m},${n}`;

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

  const downGrid: Grid = [gridX - 1, gridY];
  const rightGrid: Grid = [gridX, gridY - 1];

  const downGridKey = fromGridToKey(downGrid);
  const rightGridKey = fromGridToKey(rightGrid);

  const downGridTraveller =
    memo[downGridKey] ?? (memo[downGridKey] = gridTraveller(downGrid, memo));
  const rightGridTraveller =
    memo[rightGridKey] ?? (memo[rightGridKey] = gridTraveller(rightGrid, memo));

  return downGridTraveller + rightGridTraveller;
};

console.log(gridTraveller([18, 18]));
