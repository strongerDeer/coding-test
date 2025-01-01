function solution(N, K) {
  let arr = Array.from(new Array(N), (_, i) => i + 1);

  while (arr.length > 1) {
    addArr = arr.splice(0, K).slice(0, -1);

    arr = [...arr, ...addArr];
  }
  return arr[0];
}
console.log(solution(5, 2)); // 3
