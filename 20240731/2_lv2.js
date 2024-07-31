// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let answer = [];
  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let start = days[0];
  let count = 1;

  for (let i = 1; i <= days.length; i++) {
    if (start >= days[i]) {
      count++;
    } else {
      answer.push(count);
      start = days[i];
      count = 1;
    }
  }

  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
