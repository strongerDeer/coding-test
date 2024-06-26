// https://school.programmers.co.kr/learn/courses/30/lessons/86051

// 내 코드
/*
function solution(numbers) {
  var init = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  return numbers.reduce((sum, cur) => sum - cur, init);
}
*/
// 개선: 상수로 선언하기
function solution(numbers) {
  var TOTAL_SUM = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  return TOTAL_SUM - numbers.reduce((sum, cur) => sum + cur, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
