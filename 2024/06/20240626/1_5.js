// https://school.programmers.co.kr/learn/courses/30/lessons/12944
function solution(arr) {
  var answer = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  return answer;
}
console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution([5, 5])); // 5
