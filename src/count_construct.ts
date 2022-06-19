export const countConstruct = (
  target: string,
  bankWords: string[],
  memo: Record<string, number> = {}
): number => {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") {
    return 1;
  }

  const counter = bankWords.reduce(
    (counter, word) =>
      target.startsWith(word)
        ? counter + countConstruct(target.slice(word.length), bankWords, memo)
        : counter,
    0
  );

  return (memo[target] = counter);
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4

console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); //0
