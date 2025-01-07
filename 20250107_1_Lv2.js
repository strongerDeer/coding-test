function solution(scoville, K) {
  let count = 0;

  let foods = [...scoville].sort((a, b) => a - b);

  while (foods[0] < K && foods.length > 1) {
    const mixed = foods[0] + foods[1] * 2;
    foods.splice(0, 2);
    foods.push(mixed);

    foods.sort((a, b) => a - b);
    count++;
  }

  return foods[0] >= K ? count : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
console.log(solution([1, 1, 1], 4)); // 2
console.log(solution([10, 10, 10, 10], 100)); // -1
console.log(solution([1, 2, 3], 11)); // 2
console.log(solution([7, 7, 7, 7], 7)); // 0
console.log(solution([1, 1], 3)); // 1
console.log(solution([1], 2)); // -1
