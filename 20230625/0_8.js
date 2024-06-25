// https://school.programmers.co.kr/learn/courses/30/lessons/120807
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}
console.log(solution(2, 3)); //-1
console.log(solution(11, 11)); //1
console.log(solution(7, 99)); //-1
