// https://school.programmers.co.kr/learn/courses/30/lessons/12917
// Lv1

function solution(s) {
  let result = s
    .split('')
    .sort((a, b) => (a < b ? 1 : -1))
    .join('');

  return result;
}

solution('Zbcdefg');
