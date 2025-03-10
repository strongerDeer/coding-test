function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(-1));

  // 상 하 좌 우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // 초기화
  const queue = [[0, 0]];
  visited[0][0] = 1;

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    // 종점지에 도착했다면
    if (x === n - 1 && y === m - 1) {
      return visited[x][y];
    }

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 영역안에 존재하는지 체크
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 해당 칸이 벽이 아니고, 방문한 적도 없다면
        if (maps[nx][ny] !== 0 && visited[nx][ny] === -1) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return -1;
}
