// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  var max = Math.max(...array);
  return [max, array.indexOf(max)];
}
console.log(solution([1, 8, 3])); //
console.log(solution([9, 10, 11, 8])); //
