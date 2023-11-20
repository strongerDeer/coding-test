// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// Lv2
// 1234567 나누는게... 먼가 이상함...ㅠㅠ
function solution(n) {
  let answer = 0;
  let f0 = 0;
  let f1 = 1;

  for (let i = 2; i <= n; i++) {
    answer = (f0 + f1) % 1234567;
    f0 = f1;
    f1 = answer;
  }

  return answer;
}
solution(3); // 2
solution(5); // 5
solution(10);
