// https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
  const findProcess = `${location}_${priorities[location]}`;
  const newPriorities = priorities.map((process, index) => [index, process]);

  let queue = [];

  while (newPriorities.length > 0) {
    let selectProcess = newPriorities.shift();
    const aaa = newPriorities.find(
      ([_, process]) => process > selectProcess[1]
    );

    if (aaa) {
      newPriorities.push(selectProcess);
    } else {
      queue.push(`${selectProcess[0]}_${selectProcess[1]}`);
    }
  }

  return queue.indexOf(findProcess) + 1;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
