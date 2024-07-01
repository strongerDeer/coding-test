// https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(s) {
  var index = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s[index - 1] + s[index];
  } else {
    return s[index];
  }
}
console.log(solution("abcde")); // c
console.log(solution("qwer")); // we

// 다른 방법 문자열 자르기 - substring
function solution2(s) {
  var mid = Math.floor(s.length / 2);
  return s.substring(mid - (s.length % 2 === 0 ? 1 : 0), mid + 1);
}
