// https://school.programmers.co.kr/learn/courses/30/lessons/138477
// Lv1
function solution(k, score) {
  var answer = [];
  let arr = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      arr[i] = score[i];
      arr.sort((a, b) => a - b);
      answer.push(arr[0]);
    } else {
      if (arr[0] < score[i]) {
        arr[0] = score[i];
      }
      arr.sort((a, b) => a - b);
      answer.push(arr[0]);
    }
  }

  return answer;
}
solution(3, [10, 100, 20, 150, 1, 100, 200]);
solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
