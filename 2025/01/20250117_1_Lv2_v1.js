function solution(land) {
  const n = land.length;
  let maxScore = 0;

  function dfs(row, prevCol, score) {
    console.log("😀", "row: ", row, "prevCol: ", prevCol, "score: ", score);
    if (row === n) {
      maxScore = Math.max(maxScore, score);
      console.log("⭐️", "maxScore: ", maxScore);
      return;
    }

    for (let col = 0; col < 4; col++) {
      if (col !== prevCol) {
        console.log(
          "⏪",
          "row: ",
          row + 1,
          "prevCol: ",
          col,
          "score: ",
          score + land[row][col]
        );
        dfs(row + 1, col, score + land[row][col]);
      }
    }
  }
  for (let col = 0; col < 4; col++) {
    console.log("✅", "row: ", 1, "prevCol: ", col, "score: ", land[0][col]);
    dfs(1, col, land[0][col]);
  }

  return maxScore;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
