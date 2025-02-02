function solution(nums) {
  const N = nums.length / 2;

  const arr = new Set([...nums]); // O(N)

  return arr.size > N ? N : arr.size; // size O(1)
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2

// O(N)의 복잡도
