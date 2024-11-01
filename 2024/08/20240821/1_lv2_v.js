// https://school.programmers.co.kr/learn/courses/30/lessons/159993
// 최단경로 구하기. 너비우선탐색
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  pop() {
    return this.items[this.front++];
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

// 이동가능한 좌표 판단
function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== "X";
}

// 방문한 여부
function appendToQueue(ny, nx, k, time, visited, q) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 3차원 배열.
  // n: 맵의 세로 길이, m: 맵의 가로길이,
  // 레버의 상태 [false , false]
  // ex) 레버를 당긴 상태로 방문 [false, true] / 레버를 당기지 않은 상태로 방문 [true, false]
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  const dy = [-1, 1, 0, 0]; // 0,0 기준.  상,하,좌,우 순서
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        // 시작점
        // [ i(y좌표), j(x좌표), k(레버상태), time(시간) ]
        q.push([i, j, 0, 0]);

        // [0] 레버 당김 없이 지나감.
        visited[i][j][0] = true;
      }
      if (maps[i][j] === "E") {
        // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop();

    // k(레버상태) 레버가 열리고 도착점일 경우
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // 네 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 이동 가능한 좌표이지 않을경우 다음 방향, 이동 가능한 좌표일 때만 큐에 넣음.
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }
      // appendToQueue: 방문여부 변경
      if (maps[ny][nx] === "L") {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }
  return -1;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])); // 16
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])); // -1
