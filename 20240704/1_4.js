// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;
  let sum = 0;

  for (let amount of d) {
    if (sum + amount <= budget) {
      sum += amount;
      count++;
    } else {
      break;
    }
  }

  return count;
}
console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
console.log(solution([1, 1, 1, 1], 10)); // 0
