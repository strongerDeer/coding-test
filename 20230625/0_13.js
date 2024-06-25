// https://school.programmers.co.kr/learn/courses/30/lessons/120806
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000, 1);
}
console.log(solution(3, 2)); // 1500
console.log(solution(7, 3)); // 2333
console.log(solution(1, 16)); // 62
