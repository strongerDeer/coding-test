// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  let prevCases = [0];

  for (let num of numbers) {
    const currentCases = [];

    for (let prev of prevCases) {
      currentCases.push(prev + num);
      currentCases.push(prev - num);
    }

    prevCases = currentCases;
  }

  return prevCases.filter((sum) => sum === target).length;
}
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
