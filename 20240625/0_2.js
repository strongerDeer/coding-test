// https://school.programmers.co.kr/learn/courses/30/lessons/120817
function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return (sum / numbers.length).toFixed(1);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); //94.0
