function solution(queue1, queue2) {
  let sum1 = queue1.reduce((sum, cur) => sum + BigInt(cur), 0n);
  const sum2 = queue2.reduce((sum, cur) => sum + BigInt(cur), 0n);
  const totalSum = sum1 + sum2;
  const arr1 = [...queue1, ...queue2];
  const arr2 = [...queue2, ...queue1];

  if (totalSum % 2n !== 0n) return -1;

  const target = totalSum / 2n;

  if (BigInt(Math.max(...queue1, ...queue2)) > target) return -1;

  let left = 0;
  let right = queue1.length - 1;
  let count = 0;

  while (right < arr1.length && left <= right) {
    if (sum1 === target) return count;

    if (sum1 > target) {
      sum1 -= BigInt(arr1[left]);
      left++;
      count++;
    } else {
      right++;
      if (right < arr1.length) {
        sum1 += BigInt(arr1[right]);
        count++;
      }
    }
  }

  left = 0;
  right = queue1.length - 1;
  count = 0;

  while (right < arr2.length && left <= right) {
    if (sum2 === target) return count;

    if (sum2 > target) {
      sum2 -= BigInt(arr2[left]);
      left++;
      count++;
    } else {
      right++;
      if (right < arr2.length) {
        sum2 += BigInt(arr2[right]);
        count++;
      }
    }
  }
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
