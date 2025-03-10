function solution(triangle) {
  let dp = [[triangle[0][0]]];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i] = new Array(j + 1).fill(0);
    }
  }

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      const current = triangle[i][j];
      const parent1 = dp[i - 1][j - 1] || 0;
      const parent2 = dp[i - 1][j] || 0;

      dp[i][j] = Math.max(current + parent1, current + parent2);
    }
  }
  return Math.max(...dp[dp.length - 1]);
}
