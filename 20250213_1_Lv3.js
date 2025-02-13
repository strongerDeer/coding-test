function solution(n, edge) {
  // 그래프 만들기 (1번부터 시작: +1)
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // BFS
  const distances = Array(n + 1).fill(-1);
  distances[1] = 0; // 시작점은 0으로 초기화
  const queue = [1];

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of graph[current]) {
      // 방문하지 않은 노드라면
      if (distances[next] === -1) {
        distances[next] = distances[current] + 1;
        queue.push(next);
      }
    }
  }

  const maxDistance = Math.max(...distances);

  return distances.filter((x) => x === maxDistance).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
