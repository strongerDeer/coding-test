function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  let start;
  let end;
  let lever;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") start = [i, j];
      else if (maps[i][j] === "E") end = [i, j];
      else if (maps[i][j] === "L") lever = [i, j];
    }
  }

  // 상하 좌우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  function bfs(start, end) {
    const [startX, startY] = start;
    const [endX, endY] = end;

    const visited = Array.from({ length: n }, () => Array(m).fill(-1));
    const queue = [[...start]];
    visited[startX][startY] = 0;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      // end 일경우
      if (x === endX && y === endY) {
        return visited[x][y];
      }

      // 상하좌우 탐색
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 영역안에 존재 하는지 체크
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (maps[nx][ny] !== "X" && visited[nx][ny] === -1) {
            visited[nx][ny] = visited[x][y] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }

    return -1;
  }

  // 시작 -> 레버
  const toLever = bfs(start, lever);
  if (toLever === -1) return -1;

  // 레버 -> 끝
  const toEnd = bfs(lever, end);
  if (toEnd === -1) return -1;

  return toLever + toEnd;
}
