// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// Lv2
// 1234567 나누는게... 먼가 이상함...ㅠㅠ
function solution(n) {
  let arr = [0, 1, 1];

  for (let i = 2; i < n; i++) {
    arr.push((arr[i - 1] + arr[i]) % 1234567);
  }

  return arr[n];
}
solution(3); // 2
solution(5); // 5
solution(10);

/*
  피보나치 수
*/
