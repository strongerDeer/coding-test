function solution(n, edge) {
  // 1번부터 시작
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  console.log(graph);

  const distances = Array(n + 1).fill(-1);
  distances[1] = 0;

  const queue = [1];

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of graph[current]) {
      if (distances[next] === -1) {
        distances[next] = distances[current] + 1;
        queue.push(next);
      }
    }
  }

  const maxDistance = Math.max(...distances);

  return distances.filter((x) => x === maxDistance).length;
}
