// https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution(n) {
  let arr = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      arr += i;
    }
  }
  return arr;
}

console.log(solution(10)); //30
console.log(solution(4)); //6
