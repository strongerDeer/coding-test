// https://school.programmers.co.kr/learn/courses/30/lessons/12954
// Lv1

function solution(x, n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

solution(2, 5);
solution(4, 3);
solution(-4, 2);
