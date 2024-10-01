// https://school.programmers.co.kr/learn/courses/30/lessons/160586
function solution(keymap, targets) {
  const charMap = new Map();

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      const char = keymap[i][j];
      const count = j + 1;

      if (!charMap.has(char) || charMap.get(char) > count) {
        charMap.set(char, count);
      }
    }
  }

  return targets.map((target) => {
    let count = 0;

    for (const char of target) {
      if (!charMap.has(char)) {
        return -1;
      }
      count += charMap.get(char);
    }
    return count;
  });
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // 	[-1]
console.log(solution(["AA"], ["B", "A"])); // 	[-1]
console.log(solution(["AA"], ["B", "B"])); // 	[-1]
console.log(solution(["AA", "AB"], ["A", "A"])); // 	[-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
