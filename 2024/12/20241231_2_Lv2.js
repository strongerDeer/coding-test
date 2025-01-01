function solution(progresses, speeds) {
  let count = 1;
  let answer = [];
  let max = Math.ceil((100 - progresses[0]) / speeds[0]);

  for (let i = 1; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (max < day) {
      answer.push(count);
      max = day;
      count = 1;
    } else {
      count++;
    }
  }

  answer.push(count);
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
