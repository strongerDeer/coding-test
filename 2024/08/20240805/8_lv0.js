// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(n) {
  var answer = [1];

  if (n > 2) {
    for (let i = 3; i <= n; i++) {
      if (i % 2 !== 0) {
        answer.push(i);
      }
    }
  }
  return answer;
}
console.log(solution(10));
console.log(solution(15));
