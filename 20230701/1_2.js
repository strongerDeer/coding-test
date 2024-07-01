// https://school.programmers.co.kr/learn/courses/30/lessons/12922
function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}
console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"

// 반복 문자열 사용
function solution1(n) {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}
console.log("1 :", solution1(3)); // "수박수"
console.log("1 :", solution1(4)); // "수박수박"
