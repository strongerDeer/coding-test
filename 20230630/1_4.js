// https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
  if (arr.length === 1) return [-1];

  const min = Math.min(...arr);
  const index = arr.indexOf(min);

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
console.log(solution([4, 3, 2, 1])); //[4,3,2]
console.log(solution([4, 3, 1, 2])); //[4,3,2]
console.log(solution([1, 4, 3, 2])); //[4,3,2]
console.log(solution([10])); // 	[-1]
