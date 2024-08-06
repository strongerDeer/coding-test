// https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
  var answer = [];

  for (const str of strlist) {
    answer.push(str.length);
  }
  return answer;
}
console.log(solution(["We", "are", "the", "world!"])); //
console.log(solution(["I", "Love", "Programmers."])); //
