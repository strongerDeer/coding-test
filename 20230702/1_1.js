// https://school.programmers.co.kr/learn/courses/30/lessons/12917
function solution(s) {
  return [...s].sort().reverse().join("");
}
console.log(solution("Zbcdefg")); // "gfedcbZ"
console.log(solution("dabc")); // "gfedcbZ"
