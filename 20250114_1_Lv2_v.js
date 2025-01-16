function solution(queue1, queue2) {
  let sum1 = queue1.reduce((sum, cur) => sum + BigInt(cur), 0n);
  let sum2 = queue2.reduce((sum, cur) => sum + BigInt(cur), 0n);
  const totalSum = sum1 + sum2;

  if (totalSum % 2n !== 0n) return -1;

  const target = totalSum / 2n;

  const merged = [...queue1, ...queue2];
  const len = queue1.length;

  let p1 = 0;
  let p2 = len;

  let count = 0;
  const maxCount = len * 3;

  while (count <= maxCount) {
    if (sum1 === target) return count;

    if (sum1 > target) {
      sum1 -= BigInt(merged[p1]);
      sum2 += BigInt(merged[p1]);
      p1++;
    } else {
      if (p2 >= merged.length) break;
      sum1 += BigInt(merged[p2]);
      sum2 -= BigInt(merged[p2]);
      p2++;
    }

    count++;
  }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
