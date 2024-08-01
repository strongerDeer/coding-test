// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// Lv1

function solution(n) {
  let arr = n.toString().split('');

  let result = 0;
  arr.forEach((item) => {
    result += Number(item);
  });
  return result;
}

solution(123);
solution(987);
