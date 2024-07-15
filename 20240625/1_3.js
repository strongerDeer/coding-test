// https://school.programmers.co.kr/learn/courses/30/lessons/12931

/* 실패
function solution(n) {
  const arr = String(n).split("");

  const answer = arr.reduce((acc, cur) => Number(acc) + Number(cur));

  return answer;
}

*/

// 실패원인 acc의 타입이 string이기 때문에! 초기값을 숫자로 설정할것!
function solution(n) {
  const arr = String(n).split("");
  const answer = arr.reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
}

function solution(n) {
  const arr = String(n).split("").map(Number);
  const answer = arr.reduce((acc, cur) => acc + cur);
  return answer;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
console.log(solution(1234567890)); // 24
console.log(solution(100000000)); // 1
