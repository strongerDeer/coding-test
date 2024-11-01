// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const mod = 1234567;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, (a + b) % mod];
  }

  return b;
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
