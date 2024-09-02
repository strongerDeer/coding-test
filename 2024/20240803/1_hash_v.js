// Lv1
function countSort(arr, k) {
  const hashTable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      hashTable[num] = 1;
    }
  }
  return hashTable;
}
function solution(arr, target) {
  const hashTable = countSort(arr, target);
  for (const num of arr) {
    // num: 6, target: 6, complement: 0

    const complement = target - num;

    if (
      complement !== num && // 뺀값이 기존값과 동일 X  num: 5, target: 5, complement: 5
      complement >= 0 && // 뺀값이 음수여서는 안됨. num: 8, target: 6, complement: -2
      complement <= target &&
      hashTable[complement] === 1 // 해당값 존재
    ) {
      return true;
    }
  }
  return false;
}
console.log(solution([6, 1, 2], 6)); // false
console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
