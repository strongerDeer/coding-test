// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 깊이 우선 탐색
function solution(k, dungeons) {
  let maxDungeons = 0;
  const visited = new Array(dungeons.length).fill(false);

  // DFS로 가능한 모든 던전 순서 탐색
  function explore(currentK, count) {
    maxDungeons = Math.max(maxDungeons, count);

    for (let i = 0; i < dungeons.length; i++) {
      // 아직 방문하지 않은 던전이고, 현재 피로도로 도전 가능하면
      if (!visited[i] && currentK >= dungeons[i][0]) {
        visited[i] = true; // 방문 표시
        explore(currentK - dungeons[i][1], count + 1); // 다음 던전 탐색
        visited[i] = false; // 방문 표시 제거 (백트래킹)
      }
    }
  }

  explore(k, 0);
  return maxDungeons;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
