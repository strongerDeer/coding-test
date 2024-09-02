// 트리 순회
// 전위
function preOrder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]} `;
    ret += preOrder(nodes, idx * 2 + 1);
    ret += preOrder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 중위
function inOrder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = inOrder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]} `;
    ret += inOrder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 하위
function postOrder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = postOrder(nodes, idx * 2 + 1);
    ret += postOrder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]} `;
    return ret;
  }

  return "";
}

function solution(nodes) {
  return [
    preOrder(nodes, 0).slice(0, -1),
    inOrder(nodes, 0).slice(0, -1),
    postOrder(nodes, 0).slice(0, -1),
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7])); // ["1 2 4 5 3 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"];
