// https://school.programmers.co.kr/learn/courses/30/lessons/76501

// 방법 1
/*
function solution(absolutes, signs) {
  var answer = 0;
  absolutes.map((num, index) => (answer += num * (signs[index] ? 1 : -1)));
  return answer;
}
*/

// 개선. reduce: 부수효과 없음.
function solution(absolutes, signs) {
  return absolutes.reduce((sum, cur, i) => sum + (signs[i] ? cur : -cur), 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
