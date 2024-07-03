// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
function solution(s) {
  if (s.length % 2 !== 0 || s[0] === ")") return false;

  let count = 0;
  for (let char of s) {
    if (char === "(") {
      count++;
    } else {
      if (count === 0) return false;
      count--;
    }
  }
  return count === 0;
}
console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
