import { isSet } from "./utils";

export const bestSum = (
  target: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (target in memo) {
    return memo[target];
  }
  if (target === 0) {
    return [];
  }
  if (target < 0) {
    return null;
  }

  const best = numbers
    .map((num) => {
      const sum = bestSum(target - num, numbers, memo);
      return isSet(sum) ? [...sum, num] : null;
    })
    .filter(isSet)
    .reduce(
      (shortest, current) =>
        !isSet(shortest) || current.length < shortest.length
          ? current
          : shortest,
      null as number[] | null
    );

  return (memo[target] = best);
};

console.log(bestSum(7, [2, 3])); // [ 2, 2, 3 ]
console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(8, [2, 3, 5])); // [ 3, 5 ]
console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
console.log(bestSum(7, [2, 41])); // null
console.log(bestSum(8, [2, 3, 5])); // [ 3, 5 ]
console.log(bestSum(300, [7, 14])); // null
