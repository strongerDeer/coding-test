// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
console.log(solution(45)); // 7
console.log(solution(125)); // 229
