// https://school.programmers.co.kr/learn/courses/30/lessons/12937
function solution(num) {
  return Math.abs(num) % 2 === 1 ? "Odd" : "Even";
}
console.log(solution(3)); // Odd
console.log(solution(4)); // Even
console.log(solution(0)); // Even
console.log(solution(-1)); // Even
