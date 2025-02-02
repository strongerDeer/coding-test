function solution(n, words) {
  let history = [];
  for (let i = 0; i < words.length; i++) {
    // for O(n)
    if (history.includes(words[i])) {
      //  includes O(n)
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    if (history.length > 0) {
      let lastWord = history[history.length - 1];
      let lastString = lastWord[lastWord.length - 1];

      let firstString = words[i][0];

      if (lastString !== firstString) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }
    }
    history.push(words[i]);
  }

  return [0, 0];
}
// 시간 복잡도: O(n²) / 공간 복잡도: O(n) - history 배열

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
