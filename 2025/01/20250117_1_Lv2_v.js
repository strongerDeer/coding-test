function solution(land) {
  const n = land.length;

  let dp = Array.from({ length: n }, () => Array(4).fill(0));
  dp[0] = [...land[0]];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 4; j++) {
      dp[i][j] =
        land[i][j] +
        Math.max(
          ...[0, 1, 2, 3].filter((k) => k !== j).map((k) => dp[i - 1][k])
        );
    }
  }

  return Math.max(...dp[n - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
