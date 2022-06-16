export const canSum = (
  target: number,
  numbers: number[],
  memo: Record<number, boolean> = {}
): boolean => {
  if (target in memo) {
    return memo[target];
  }
  if (target === 0) {
    return true;
  }
  if (target < 0) {
    return false;
  }

  const result = numbers.some((num) => canSum(target - num, numbers, memo));
  return (memo[target] = result);
};

// console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(7, [2, 41])); // false
// console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(300, [7, 14])); // false
