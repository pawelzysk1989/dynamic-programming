export const constructAll = (
  target: string,
  bankWords: string[],
  memo: Record<string, string[][]> = {}
): string[][] => {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") {
    return [[]];
  }

  const allConstructs = bankWords.reduce((all, word) => {
    if (target.startsWith(word)) {
      const subConstructs = constructAll(
        target.slice(word.length),
        bankWords,
        memo
      );
      return [
        ...all,
        ...subConstructs.map((subConstruct) => [word, ...subConstruct]),
      ];
    }
    return all;
  }, [] as string[][]);

  return (memo[target] = allConstructs);
};

console.log(
  constructAll("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
); // 4
console.log(constructAll("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(
  constructAll("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //0
console.log(
  constructAll("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4

console.log(
  constructAll("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); //0
