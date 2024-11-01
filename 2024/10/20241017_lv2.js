// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  var answer = [0, 0];
  let history = [words[0]];
  let start = words[0].slice(-1);

  for (let i = 1; i < words.length; i++) {
    if (words[i][0] !== start) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else if (history.includes(words[i])) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      start = words[i].slice(-1);
      history.push(words[i]);
    }
  }

  return answer;
}
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
); // [3, 3]
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
); // [0, 0]
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
); // [1, 3]
