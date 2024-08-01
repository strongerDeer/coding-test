// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// Lv1

function solution(x) {
  const arr = String(x).split('');
  let sum = 0;
  arr.forEach((item) => (sum += Number(item)));

  return x % sum === 0;
}

solution(10);
solution(12);
solution(11);
solution(13);
solution(123);
