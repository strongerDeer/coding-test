// https://school.programmers.co.kr/learn/courses/30/lessons/12950
// Lv1

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }

  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ],
); //[[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]); //	[[4],[6]]
solution(
  [
    [1, 2, 3],
    [2, 3, 4],
    [1, 1, 1],
  ],
  [
    [1, 2, 3],
    [2, 3, 4],
    [1, 1, 1],
  ],
); //[[4,6],[7,9]]
