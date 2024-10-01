// https://school.programmers.co.kr/learn/courses/30/lessons/131128
function solution(X, Y) {
  const countX = new Map();
  const countY = new Map();

  for (const char of X) {
    countX.set(char, (countX.get(char) || 0) + 1);
  }
  for (const char of Y) {
    countY.set(char, (countY.get(char) || 0) + 1);
  }

  let result = "";

  for (let i = 9; i >= 0; i--) {
    const digit = i.toString();

    const countInX = countX.get(digit) || 0;
    const countInY = countY.get(digit) || 0;

    const commonCount = Math.min(countInX, countInY);
    result += digit.repeat(commonCount);
  }

  if (result === "") return "-1";
  if (result[0] === "0") return "0";

  return result;
}
console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
