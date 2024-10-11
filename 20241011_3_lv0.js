// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  var answer = [];
  let max = 186;
  if (n < 50) {
    max = 100;
  }

  for (let i = 0; i < max; i++) {
    if (String(i).split("").indexOf("3") === -1 && i % 3 !== 0) {
      answer.push(i);
    }
  }

  return answer[n - 1];
}
console.log(solution(100)); // 25
console.log(solution(15)); // 25
console.log(solution(40)); // 76
