// https://school.programmers.co.kr/learn/courses/30/lessons/12914
function solution(n) {
  let first = 1; // 1칸 뛰는 방법
  let second = 2; // 2칸 뛰는 방법

  // n이 1이나 2면 바로 반환
  if (n === 1) return first;
  if (n === 2) return second;

  // 3칸부터는 이전 두 값을 더해가면서 계산
  for (let i = 3; i <= n; i++) {
    let sum = (first + second) % 1234567;
    first = second; // 이전 값을 저장
    second = sum; // 새로운 값을 저장
  }

  return second;
}
console.log(solution(4)); // 5
console.log(solution(5)); // 8
console.log(solution(6)); // 13
