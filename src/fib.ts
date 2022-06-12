const slowFibb = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return slowFibb(n - 1) + slowFibb(n - 2);
};

const dynamicFibb = (
  n: number,
  cache: Map<number, number> = new Map<number, number>()
): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const cached = cache.get(n);
  if (cached) {
    return cached;
  }
  const calculated = dynamicFibb(n - 1, cache) + dynamicFibb(n - 2, cache);
  cache.set(n, calculated);
  return calculated;
};

const fibb = (n: number) => {
  const helper = (n: number, curr: number, prev: number): number => {
    if (n === 0) return 0;
    if (n === 1) return curr;
    return helper(n - 1, curr + prev, curr);
  };
  return helper(n, 1, 0);
};
