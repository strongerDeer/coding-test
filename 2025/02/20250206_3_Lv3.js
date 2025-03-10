function solution(n, computers) {
  var answer = 0;

  const visited = Array.from({ length: n }, () => false);

  function dfs(node) {
    // 현재 노드 방문처리
    visited[node] = true;

    // 현재 노드와 연결된 모든 노드 확인
    for (let i = 0; i < n; i++) {
      // 연결되어 있고, 아직 방문하지 않았다면 탐색
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  // 모든 노드를 순회하면서 미방문 노드를 시작점으로 DFS 실행
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
