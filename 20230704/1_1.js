// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(n, m) {
  if (n === m) {
    return [n, m];
  }

  function gcd(n, m) {
    const min = Math.min(n, m);
    for (let i = min; i > 0; i--) {
      if (n % i === 0 && m % i === 0) {
        return i;
      }
    }
  }
  let GCD = gcd(n, m);
  let LCM = (n * m) / GCD;

  return [GCD, LCM];
}
console.log(solution(7, 5)); // [1, 35]
console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
console.log(solution(4, 12)); // [4, 10]
console.log(solution(3, 4)); // [1, 12]

console.log(solution(15, 30)); // [15, 30] 1,3,5 1,2, 3,5, 15, 30
console.log(solution(1, 1)); // [8, 12] 1,3,5 1,2, 3,5, 15, 30
