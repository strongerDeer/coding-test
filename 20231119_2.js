// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// Lv2
function solution(n) {
  let answer = n + 1;
  let countOne = n.toString(2).split('1').length - 1;

  while (true) {
    if (answer.toString(2).split('1').length - 1 === countOne) {
      break;
    }
    answer += 1;
  }

  return answer;
}
solution(78); // 83
solution(15); // 23
