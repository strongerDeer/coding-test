// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// Lv1
function solution(k, m, score) {
  var answer = 0;

  let apple = score.sort((a, b) => a - b).slice(score.length % m, score.length);
  let appleBox = [];

  for (let i = 0; i < apple.length; i += m) {
    let tempArr;
    tempArr = apple.slice(i, i + m);
    appleBox.push(tempArr);
  }

  for (let i = 0; i < appleBox.length; i++) {
    const minScore = Math.min(...appleBox[i]);

    answer += minScore * m;
  }

  return answer;
}
solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
