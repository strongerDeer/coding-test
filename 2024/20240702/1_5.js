// https://school.programmers.co.kr/learn/courses/30/lessons/12939
/*
function solution(s) {
  var strArr = s.split(" ").map(Number);
  return `${Math.min(...strArr)} ${Math.max(...strArr)}`;
}
  */

// 방법 2
function solution(s) {
  const { min, max } = s.split(" ").reduce(
    ({ min, max }, num) => ({
      min: Math.min(min, num),
      max: Math.max(max, num),
    }),
    { min: Infinity, max: -Infinity }
  );
  return `${min} ${max}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
