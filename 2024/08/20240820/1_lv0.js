//https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution(s1, s2) {
  var answer = 0;

  for (let str1 of s1) {
    for (let str2 of s2) {
      if (str1 === str2) answer++;
    }
  }
  return answer;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"], ["m", "dot"]));
