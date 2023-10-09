// https://school.programmers.co.kr/learn/courses/30/lessons/12922
// Lv1

function solution(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result += '수';
    } else {
      result += '박';
    }
  }
  return result;
}

solution(3);
solution(4);
