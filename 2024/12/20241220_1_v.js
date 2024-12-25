function rotate90(arr) {
  const N = arr.length;
  const rotatedArr = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      rotatedArr[j][N - 1 - i] = arr[i][j];
    }
  }
  return rotatedArr;
}
function solution(arr, n) {
  let rotated = arr.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    rotated = rotate90(rotated);
  }
  return rotated;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1
  )
);

/* 
[
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4],
] */

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);

/* 
  [
    [16, 15, 14, 13],
    [12, 11, 10, 9],
    [8, 7, 6, 5],
    [4, 3, 2, 1],
  ] */
