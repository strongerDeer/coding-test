// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  var answer = [0, 0];
  for (let num of num_list) {
    if (num % 2 === 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
