function solution(N, road, K) {
  // 인접 리스트 생성
  const graph = Array.from({ length: N + 1 }, () => []);

  /*
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
  */
  road.forEach(([start, end, distance]) => {
    // 양방향
    graph[start].push([end, distance]);
    graph[end].push([start, distance]);
  });

  /*
  graph
  [
   0: [],
   1: [ [ 2, 1 ], [ 4, 2 ] ],
   2: [ [ 1, 1 ], [ 3, 3 ], [ 5, 2 ] ],
   3: [ [ 2, 3 ], [ 5, 1 ] ],
   4: [ [ 1, 2 ], [ 5, 2 ] ],
   5: [ [ 2, 2 ], [ 3, 1 ], [ 4, 2 ] ]
  ]
  */

  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0; // 시작점 (1번 마을) 거리는 0
  /*
    dist 
    [ Infinity, 0, Infinity, Infinity, Infinity, Infinity ]
  */
  const queue = [[1, 0]]; // [마을번호, 거리]

  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]); // 거리가 작은순으로 정렬
    const [current, distance] = queue.shift();

    // [current, distance]: [1, 0]
    // dist[current] < distance => dist[1] < 0  같은 0 스킵
    // graph[current] => graph[1] : [ [ 2, 1 ], [ 4, 2 ] ]

    // [next, weight]: [2,1]
    // nextDistance = distance + weight = 0 + 1;

    // nextDistance < dist[next] => 1 < dist[2](Infinity)
    // dist[2] = 1;
    // dist: [ Infinity, 0, 1, Infinity, Infinity, Infinity ]
    // queue.push([2, 1]) queue = [[2, 1]]

    // [next, weight]: [ 4, 2 ]
    // nextDistance = distance + weight = 0 + 2;
    // 2 < dist[4](Infinity)
    // dist[4] = 2;
    // dist: [ Infinity, 0, 1, Infinity, 2, Infinity ]
    // queue.push([4, 2]) queue = [[2, 1], [4, 2]]

    /*  -------------------------------------- */
    // [current, distance]: [2, 1]
    // dist[current] < distance => dist[2](1) < 1  같은 1 스킵
    // graph[current] => graph[2] : [ [ 1, 1 ], [ 3, 3 ], [ 5, 2 ] ]

    // [next, weight]: [ 1, 1 ]
    // nextDistance = distance + weight = 1 + 1;

    // nextDistance < dist[next] => 2 < dist[1](0) X

    // [next, weight]: [ 3, 3 ]
    // nextDistance = distance + weight = 1 + 3;
    // nextDistance < dist[next] => 4 < dist[3](Infinity)
    // dist[next] = nextDistance; => dist[3] = 4;
    // dist: [ Infinity, 0, 1, 4, 2, Infinity ]
    // queue.push([next, nextDistance]) => queue.push([3, 4]) queue = [[4, 2],[3, 4]]

    // 현재 거리가 이미 저장된 거리보다 크면 스킵
    if (dist[current] < distance) continue;

    for (const [next, weight] of graph[current]) {
      const nextDistance = distance + weight;

      // 더 짧은 경로 발견
      if (nextDistance < dist[next]) {
        dist[next] = nextDistance;
        queue.push([next, nextDistance]);
      }
    }
  }

  // dist: [ Infinity, 0, 1, 4, 2, 3 ]
  return dist.filter((d) => d <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4
