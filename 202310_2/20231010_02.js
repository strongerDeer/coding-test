// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// Lv
function solution(n, m) {
  let answer = [1, 1];

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      answer[0] = i;
    }
  }

  while (true) {
    if (answer[1] % n === 0 && answer[1] % m === 0) {
      break;
    }
    answer[1]++;
  }

  return answer;
}

solution(3, 12);
solution(2, 5);
solution(4, 7);
solution(4, 14);
