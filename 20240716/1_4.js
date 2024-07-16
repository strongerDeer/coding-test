// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution1(nums) {
  const getNum = nums.length / 2;
  const set = new Set(nums);
  return getNum < set.size ? getNum : set.size;
}

// 코드정리
function solution(nums) {
  const maxSelect = nums.length / 2;
  const uniqueTypes = new Set(nums);
  return Math.min(maxSelect, uniqueTypes.size);
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); //	3

console.log(solution([3, 3, 3, 2, 2, 2])); // 2
