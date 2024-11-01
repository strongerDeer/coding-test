// https://school.programmers.co.kr/learn/courses/30/lessons/120585
function solution(array, height) {
  var answer = array.filter((num) => num > height).length;
  return answer;
}
console.log(solution([149, 180, 192, 170], 167)); //3
console.log(solution([180, 120, 140], 190)); //0
