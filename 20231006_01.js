// https://school.programmers.co.kr/learn/courses/30/lessons/12933
// Lv1

function solution(n) {
  const result = Number(String(n).split('').sort().reverse().join(''));
  return result;
}

solution(118372);
