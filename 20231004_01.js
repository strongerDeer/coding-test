// https://school.programmers.co.kr/learn/courses/30/lessons/12928
// Lv1

function solution(n) {
  let arr = [];
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  arr.forEach((item) => {
    result += Number(item);
  });

  return result;
}

solution(12);
solution(5);
