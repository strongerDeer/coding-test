// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  // 0부터 n까지의 숫자를 모두 소수로 가정하고 시작, 0,1은 소수가 아님
  const isPrime = [false, false, ...new Array(n - 1).fill(true)];

  // 2부터 √n까지 반복
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      // i의 배수들을 모두 소수가 아닌 것으로 표시
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // true로 남아있는 숫자의 개수를 세어 반환
  return isPrime.filter(Boolean).length;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
