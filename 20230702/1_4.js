// https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = [];

    for (let j = 0; j < arr1[0].length; j++) {
      result[j] = arr1[i][j] + arr2[i][j];
    }
    answer[i] = result;
  }
  return answer;
}

// 방법 2
// function solution(arr1, arr2) {
//   return arr1.map((row, i) => row.map((v, j) => v + arr2[i][j]));
// }

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
