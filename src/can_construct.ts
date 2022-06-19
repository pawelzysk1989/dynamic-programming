export const canConstruct = (
  target: string,
  bankWords: string[],
  memo: Record<string, boolean> = {}
): boolean => {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") {
    return true;
  }

  const canTargetWordBeConstructed = bankWords.some((word) => {
    if (target.startsWith(word)) {
      return canConstruct(target.slice(word.length), bankWords, memo);
    }
    return false;
  });

  memo[target] = canTargetWordBeConstructed;
  return canTargetWordBeConstructed;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); //false
