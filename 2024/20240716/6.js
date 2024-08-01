function solution(nums) {
  const result = new Set(nums);
  return [...result].sort((a, b) => b - a);
}

console.log(solution([4, 2, 2, 1, 3, 4])); // [ 4, 3, 2, 1 ]
console.log(solution([5, 4, 3, 2, 1])); // [ 5, 4, 3, 2, 1 ]
