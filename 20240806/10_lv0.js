// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(n, numlist) {
  var answer = [];

  for (let num of numlist) {
    if (num % n === 0) {
      answer.push(num);
    }
  }
  return answer;
}
console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); //
console.log(solution(5, [1, 9, 3, 10, 13, 5])); //
console.log(solution(12, [2, 100, 120, 600, 12, 12])); //
