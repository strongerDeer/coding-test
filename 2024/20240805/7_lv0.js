// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length / 2)];
}
console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
