// https://school.programmers.co.kr/learn/courses/30/lessons/120841
function solution(dot) {
  if (dot[0] >= 0) {
    if (dot[1] >= 0) {
      return 1;
    } else {
      return 4;
    }
  } else {
    if (dot[1] >= 0) {
      return 2;
    } else {
      return 3;
    }
  }
}

console.log(solution([2, 4]));
console.log(solution([-7, 9]));
