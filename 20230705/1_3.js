// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  var answer = 0;

  for (let i = 0; i <= number.length - 3; i++) {
    for (let j = i + 1; j <= number.length - 2; j++) {
      for (let k = j + 1; k <= number.length - 1; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}
console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
