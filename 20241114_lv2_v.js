// https://school.programmers.co.kr/learn/courses/30/lessons/1844
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  // 방문 배열 초기화
  const visited = Array.from(Array(n), () => Array(m).fill(false));

  // 상, 우, 하, 좌
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // BFS '너비우선탐색'을 위한 큐
  const queue = [[0, 0, 1]]; // [x, y, distance]
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (maps[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
  }
  return -1;
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
