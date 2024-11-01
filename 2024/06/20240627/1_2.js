// https://school.programmers.co.kr/learn/courses/30/lessons/12912
function solution(n) {
  if (n <= 1) return n;
  var answer = 1 + n;

  for (let i = 2; i <= Math.round(n / 2); i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
console.log(solution(0)); // 1
console.log(solution(1)); // 1
console.log(solution(15)); // 24
console.log(solution(12)); // 28
console.log(solution(5)); // 6
console.log(solution(9)); // 6
