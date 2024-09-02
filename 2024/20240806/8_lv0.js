// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  let answer = "";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let str of my_string) {
    const lowerIndex = lower.indexOf(str);
    const upperIndex = upper.indexOf(str);
    if (lowerIndex !== -1) {
      answer += upper[lowerIndex];
    } else {
      answer += lower[upperIndex];
    }
  }
  return answer;
}
console.log(solution("cccCCC")); //
console.log(solution("abCdEfghIJ")); //
