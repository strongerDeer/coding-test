function solution(n, costs) {
  // 비용으로 정렬: 최소 비용으로 모든 섬을 연결해야기 때문에, 가장 적은 비용의 다르부터 선택하면서 섬들을 연결.
  costs.sort((a, b) => a[2] - b[2]);
  console.log(costs);

  // 부모 배열 초기화: 초기에는 각 노드가 자기 자신을 부모로 가짐.
  const parent = Array.from({ length: n }, (_, i) => i); // [0, 1, 2, 3]

  // 부모노드 찾기: 노드의 루트(최상위 부모)를 찾는 연산
  function findParent(node) {
    if (parent[node] === node) return node; // 자신이 루트면 자신 반환
    return (parent[node] = findParent(parent[node])); // 루트를 찾아 올라감. 경로 압축
  }

  // 두 노드를 연결
  function union(node1, node2) {
    const parent1 = findParent(node1);
    const parent2 = findParent(node2);

    if (parent1 !== parent2) {
      // 루트가 다르면
      parent[parent2] = parent1; // 한 그룹의 루트를 다른 그룹의 루트 아래로 넣는것
      // parent[parent1] = parent2; 반대로 해도 상관없음.

      return true;
    }
    return false;
  }

  let answer = 0;
  let edges = 0; // 연결된 간선의 수

  for (const [from, to, cost] of costs) {
    // 사이클이 형성되지 않는 경우에만 연결
    if (union(from, to)) {
      answer += cost;
      edges++;

      // 모든 섬이 연결
      if (edges === n - 1) break;
    }
  }
  return answer;
}

// 테스트 케이스 2: 5개 섬
console.log(
  solution(5, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 4, 2],
    [1, 3, 2],
    [0, 4, 6],
  ])
); // 11
