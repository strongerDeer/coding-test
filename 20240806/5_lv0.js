// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution1(my_string) {
  return my_string
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("o", "")
    .replaceAll("u", "");
}

// 정규식
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
console.log(solution("bus")); //
console.log(solution("nice to meet you")); //
