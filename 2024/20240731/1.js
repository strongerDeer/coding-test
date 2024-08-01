function solution1(n, k) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let loc = 0;

  while (arr.length > 1) {
    loc = (loc + k - 1) % arr.length;
    arr.splice(loc, 1);
  }

  return arr[0];
}

function solution(n, k) {
  let queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue[0];
}
console.log(solution(5, 2)); // 3
