function solution(arr, target) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).indexOf(target - arr[i]) !== -1) return "True";
  }

  return "False";
}

console.log(solution([1, 2, 3, 4, 8], 6)); // True
console.log(solution([2, 3, 5, 9], 10)); // False
