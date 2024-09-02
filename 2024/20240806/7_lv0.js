// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(cipher, code) {
  var answer = "";

  for (let i = 1; i <= Math.floor(cipher.length / code); i++) {
    answer += cipher[code * i - 1];
  }

  return answer;
}
console.log(solution("dfjardstddetckdaccccdegk", 4)); //
console.log(solution("pfqallllabwaoclk", 2)); //
