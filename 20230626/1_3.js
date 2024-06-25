// https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  var answer = Math.floor(Math.sqrt(n));
  return answer * answer === n ? (answer + 1) * (answer + 1) : -1;
}
console.log(solution(121)); // 144
console.log(solution(3)); // -1
