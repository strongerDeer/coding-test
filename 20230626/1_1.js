// https://school.programmers.co.kr/learn/courses/30/lessons/12932
function solution(n) {
  var answer = String(n).split("").map(Number).reverse();
  return answer;
}

// 더 간결한 방법
function solution(n) {
  return [...String(n)].reverse().map(Number);
}
console.log(solution("12345")); // [5,4,3,2,1]
