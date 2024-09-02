// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  var answer = my_string.replace(/[a-zA-Z]/g, "").split("");
  return answer.reduce((sum, cur) => sum + Number(cur), 0);
}
console.log(solution("aAb1B2cC34oOp")); //
console.log(solution("1a2b3c4d123")); //
