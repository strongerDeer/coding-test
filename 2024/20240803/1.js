// Lv1

function solution(arr, target) {
  for (let number of arr) {
    // includes 사용으로 시간복잡도 O(n2)
    if (number !== target - number && arr.includes(target - number)) {
      return true;
    }
  }
  return false;
}
console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
