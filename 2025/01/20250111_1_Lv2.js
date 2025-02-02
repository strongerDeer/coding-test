function solution(s) {
  let sArr = s.split(" ").map((s) => Number(s));

  return `${Math.min(...sArr)} ${Math.max(...sArr)}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
