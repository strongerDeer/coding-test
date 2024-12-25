function solution(decimal) {
  let answer = [];
  while (decimal > 1) {
    answer.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return decimal + answer.reverse().join("");
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
