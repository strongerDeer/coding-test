function solution(x, y, n) {
  if (x === y) return 0;

  const visited = new Set();
  const queue = [[x, 0]];
  visited.add(x);

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    const nextNumbers = [current + n, current * 2, current * 3];

    for (const next of nextNumbers) {
      if (next === y) return count + 1;

      if (next > y || visited.has(next)) continue;

      visited.add(next);
      queue.push([next, count + 1]);
    }
  }

  return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
