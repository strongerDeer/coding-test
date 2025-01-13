function solution(n, words) {
  const wordSet = new Set(); // O(1)
  let lastChar = "";

  for (let i = 0; i < words.length; i++) {
    // O(n)
    const currentWord = words[i];

    if (
      currentWord.length <= 1 ||
      (i > 0 && lastChar !== currentWord[0]) ||
      wordSet.has(currentWord)
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    wordSet.add(currentWord);
    lastChar = currentWord[currentWord.length - 1];
  }

  return [0, 0];
}
// 시간 복잡도: O(n²\) / 공간 복잡도: O(n) - set

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3,3]
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
); // [0,0]
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
); // [1,3]
