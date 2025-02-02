function bfs(start, end, n, m, maps) {
  const visited = Array.from(Array(n), () => Array(m).fill(-1));

  const queue = [[...start]];
  // 시작 좌표 방문
  visited[start[0]][start[1]] = 0;

  // 상하좌우 이동을 위한 방향 배열
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    // 종료 지점이라면
    if (x === end[0] && y === end[1]) {
      return visited[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        // 0<= nx <= n / 0<= ny < nm 의 영역을 벗어나지 않고
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        // X(벽)가 아니고
        maps[nx][ny] !== "X" &&
        // 방문한적 없다면
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
  let start, lever, end;
  const n = maps.length;
  const m = maps[0].length;

  // 시작, 레버, 끝 좌표 구하기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") start = [i, j];
      else if (maps[i][j] === "L") lever = [i, j];
      else if (maps[i][j] === "E") end = [i, j];
    }
  }

  // 시작 -> 출구까지의 최단 거리
  const toLever = bfs(start, lever, n, m, maps);
  if (toLever === -1) return -1;

  // 레버 -> 출구까지의 최단 거리
  const toEnd = bfs(lever, end, n, m, maps);
  if (toEnd === -1) return -1;

  // 전체 이동 거리의 합
  return toLever + toEnd;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "EXXXX"])); // 16
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])); // -1
