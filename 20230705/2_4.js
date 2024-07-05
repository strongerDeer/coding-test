// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let count = 1;

  for (let start = 1; start <= n / 2; start++) {
    let sum = 0;
    let current = start;

    while (sum < n) {
      sum += current;
      if (sum === n) {
        count++;
        break;
      }
      current++;
    }
  }
  return count;
}
console.log(solution(15)); // 4
console.log(solution(6)); // 2
