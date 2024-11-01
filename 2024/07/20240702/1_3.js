// https://school.programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  const numStr = "1234567890";

  for (let i = 0; i < s.length; i++) {
    if (numStr.includes(s[i]) === false) {
      return false;
    }
  }
  return true;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
