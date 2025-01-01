function solution(progresses, speeds) {
  let count = 1;
  let answer = [];
  let days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
