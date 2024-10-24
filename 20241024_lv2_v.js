// https://school.programmers.co.kr/learn/courses/30/lessons/87390

// 제한사항 메모리 초과 발생.
/*
function solution(n, left, right) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr[i][j] = i + 1;
      } else if (i > j) {
        arr[i][j] = i + 1;
      } else {
        arr[i][j] = j + 1;
      }
    }
  }

  return arr.flat().slice(left, right + 1);
}
*/

function solution(n, left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result.push(Math.max(row, col) + 1);
  }

  return result;
}

console.log(solution(5, 10, 15)); // [3,3,3,4,5,4]
console.log(solution(4, 0, 5)); // [1,2,3,4,2,2]
