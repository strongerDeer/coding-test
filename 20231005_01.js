// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// Lv1

function solution(n) {
  let arr = String(n).split('').reverse();
  let result = [];

  arr.forEach((item) => result.push(Number(item)));

  return result;
}

solution(12345);
