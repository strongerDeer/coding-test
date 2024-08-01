// https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
  var answer = 0;

  while (num >= 1) {
    if (answer >= 500) return -1;
    if (num === 1) return answer;

    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  }

  return answer;
}
console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
