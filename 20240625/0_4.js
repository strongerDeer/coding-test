// https://school.programmers.co.kr/learn/courses/30/lessons/120583
function solution(array, n) {
  const answer = array.filter((num) => num === n).length;
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1)); //2
console.log(solution([0, 2, 3, 4], 1)); //0
