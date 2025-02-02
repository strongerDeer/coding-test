function bfs(start, end, n, m, maps) {
  let visited = Array.from({ length: n }, () => Array(m).fill(-1));
  let queue = [[...start]];

  // 시작 좌표 방문
  visited[start[0]][start[1]] = 0;

  // 상하좌우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    // 종료지점
    if (x == end[0] && y === end[1]) {
      console.log(visited);
      return visited[x][y] + 1;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] !== 0 &&
        visited[nx][ny] === -1
      ) {
        visited[nx][ny] = visited[x][y] + 1;

        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  return bfs([0, 0], [n - 1, m - 1], n, m, maps);
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
