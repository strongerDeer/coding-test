function solution(info, n, m) {
  const length = info.length;
  let minATrace = Infinity;

  function dfs(index, aSum, bSum) {
    if (index === length) {
      if (aSum < n && bSum < m) {
        minATrace = Math.min(minATrace, aSum);
      }
      return;
    }

    // A가 훔치는 경우
    if (aSum + info[index][0] < n) {
      dfs(index + 1, aSum + info[index][0], bSum);
    }

    // B기 훔치는 경우
    if (bSum + info[index][1] < m) {
      dfs(index + 1, aSum, bSum + info[index][1]);
    }
  }

  dfs(0, 0, 0);

  return minATrace === Infinity ? -1 : minATrace;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4
  )
);
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    1,
    7
  )
);
console.log(
  solution(
    [
      [3, 3],
      [3, 3],
    ],
    7,
    1
  )
);
console.log(
  solution(
    [
      [3, 3],
      [3, 3],
    ],
    6,
    1
  )
);
