// https://school.programmers.co.kr/learn/courses/30/lessons/120847
function solution(numbers) {
  numbers.sort((a, b) => b - a);

  return numbers[0] * numbers[1];
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
