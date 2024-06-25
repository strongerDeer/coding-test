// https://school.programmers.co.kr/learn/courses/30/lessons/120829
function solution(angle) {
  if (angle === 90) {
    return 2;
  } else if (angle === 180) {
    return 4;
  } else if (angle < 90) {
    return 1;
  } else {
    return 3;
  }
}
console.log(solution(70)); //1
console.log(solution(91)); //3
console.log(solution(180)); //4
