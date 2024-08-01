// https://school.programmers.co.kr/learn/courses/30/lessons/70128
function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2

// reduce
function solution1(a, b) {
  return a.reduce((sum, current, index) => sum + current * b[index], 0);
}

// for ...of
function solution2(a, b) {
  let sum = 0;
  for (let [i, v] of a.entries()) {
    sum += v * b[i];
  }
  return sum;
}
