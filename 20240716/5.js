function solution(nums) {
  return nums.sort((a, b) => a - b);
}

console.log(solution([1, -5, 2, 4, 3])); // [-5,1,2,3,4]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); //	[1,1,2,2,3,4,5]
console.log(solution([6, 1, 7])); // [1,6,7]
