// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// Lv2
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  return answer;
}
solution(3);
solution(4);
solution(5);
solution(6);
solution(7);
solution(15); // 4

/* 주어진 자연수를 "연속된 자연수의 합으로 표현하는 방법의 수" = "홀수인 약수 갯수" 
  3: 1, 3 => 2
  4: 1, 2, 4 => 1
  5: 1, 5 => 2
  6: 1, 2, 3, 6 => 2
  7: 1, 7 => 2
  15: 1, 3, 5, 15 => 4

*/
