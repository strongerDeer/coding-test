function solution(numbers) {
  const result = numbers
    .map((n) => n.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}

console.log(solution([6, 10, 2])); // 5
console.log(solution([3, 30, 34, 5, 9])); // 3
