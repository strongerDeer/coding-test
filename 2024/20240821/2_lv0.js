// https://school.programmers.co.kr/learn/courses/30/lessons/120868
function solution(sides) {
  var answer = 0;

  for (
    let i = Math.abs(sides[0] - sides[1]) + 1;
    i < sides[0] + sides[1];
    i++
  ) {
    answer++;
  }
  return answer;
}

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13
