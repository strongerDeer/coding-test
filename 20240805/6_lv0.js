// https://school.programmers.co.kr/learn/courses/30/lessons/120809

function solution(numbers) {
  return numbers.map((num) => num * 2);
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 100, -99, 1, 2, 3]));
