export const howSum = (
  target: number,
  numbers: number[],
  trackedNumbers: number[] = [],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (target in memo) {
    return memo[target];
  }
  if (target === 0) {
    return trackedNumbers;
  }
  if (target < 0) {
    return null;
  }

  for (const num of numbers) {
    trackedNumbers.push(num);
    const res = howSum(target - num, numbers, trackedNumbers, memo);
    if (res) {
      memo[target] = res;
      return res;
    }
    trackedNumbers.pop();
  }

  memo[target] = null;
  return null;
};

// console.log(howSum(7, [2, 3])); // [ 2, 2, 3 ]
// console.log(howSum(7, [5, 3, 4, 7])); // [ 3, 4 ]
// console.log(howSum(7, [2, 41])); // null
// console.log(howSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]
// console.log(howSum(300, [7, 14])); // null
