// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const alphabets = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
  ];

  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const upper = alphabets[0].indexOf(s[i]);
    const lower = alphabets[1].indexOf(s[i]);
    if (upper !== -1) {
      answer += alphabets[0][upper + n];
    } else if (lower !== -1) {
      answer += alphabets[1][lower + n];
    } else {
      answer += " ";
    }
  }

  return answer;
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
