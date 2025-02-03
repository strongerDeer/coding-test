function dfs(node, graph, visited) {
  let count = 1; // 그래프의 노드 개수를 카운트
  visited[node] = true; // 현재 노드를 방문처리 한다.

  for (let next of graph[node]) {
    // 방문한적이 없다면
    if (!visited[next]) {
      // 연결된 노드에서 다시 dfs를 실행하고 그 결과를 현재 count에 더한다.
      count += dfs(next, graph, visited);
    }
  }
  return count;
}

function solution(n, wires) {
  let answer = n; // 최대 차이로 초기화

  // 전체 그래프 구성
  const fullGraph = {};
  wires.forEach(([v1, v2]) => {
    if (!fullGraph[v1]) fullGraph[v1] = [];
    if (!fullGraph[v2]) fullGraph[v2] = [];
    // 양방향
    fullGraph[v1].push(v2);
    fullGraph[v2].push(v1);
  });

  // 각 전선을 하나씩 제외하고 체크
  wires.forEach(([v1, v2]) => {
    const graph = { ...fullGraph };
    graph[v1] = graph[v1].filter((v) => v !== v2);
    graph[v2] = graph[v2].filter((v) => v !== v1);

    const visited = Array(n + 1).fill(false);
    const count = dfs(1, graph, visited);
    answer = Math.min(answer, Math.abs(count - (n - count)));
  });

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 3
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // 0
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
); // 1
