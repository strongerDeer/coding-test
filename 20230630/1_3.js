// https://school.programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
  return (answer =
    "*".repeat(phone_number.length - 4) + phone_number.slice(-4));
}
console.log(solution("01033334444")); // 	"*******4444"
console.log(solution("027778888")); // "*****8888"
console.log(solution("12345678")); // "*****8888"
