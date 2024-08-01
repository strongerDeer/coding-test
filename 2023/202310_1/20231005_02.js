// https://school.programmers.co.kr/learn/courses/30/lessons/12934
// Lv1

function solution(n) {
  const sqrt = Math.sqrt(n);

  // 제곱근이 정수인지 판별 필요!
  if (sqrt % 1 === 0) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

solution(121);
solution(3);
solution(4);
solution(5);
