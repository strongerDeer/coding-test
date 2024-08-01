// https://school.programmers.co.kr/learn/courses/30/lessons/86051
// Lv1

function solution(numbers) {
  let result = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;

  numbers.map((number) => (result -= number));

  return result;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
solution([5, 8, 4, 0, 6, 7, 9]);
