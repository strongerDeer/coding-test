// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// Lv.1
function solution(s, n) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const alphabet = s[i];
    if (alphabet === ' ') {
      answer += ' ';
      continue;
    }

    const arr = lower.includes(alphabet) ? lower : upper;
    let index = (arr.indexOf(alphabet) + n) % lower.length;
    answer += arr[index];
  }

  return answer;
}
solution('AB', 1);
solution('z', 1);
solution('a B z', 4);
