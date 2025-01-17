function solution(x, y, n) {
  // dp[i] = i를 만들기 위한 최소 연산 횟수
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0; // 시작점

  // x부터 y까지 순회
  for (let i = x; i <= y; i++) {
    console.log(dp);
    if (dp[i] === Infinity) continue;

    // 현재 위치에서 가능한 세 가지 연산 결과를 저장
    if (i + n <= y) {
      console.log("+");
      dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }
    if (i * 2 <= y) {
      console.log("*2");
      dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    }
    if (i * 3 <= y) {
      console.log("*3");
      dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

// console.log(solution(10, 40, 5)); // 2
// console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
