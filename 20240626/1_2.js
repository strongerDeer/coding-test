// https://school.programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {
  var answer = Number([...String(n)].sort((a, b) => b - a).join(""));
  return answer;
}
console.log(solution("118372")); // 873211
