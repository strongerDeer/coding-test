// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const cup = Math.floor(money / 5500);
  return [cup, money - cup * 5500];
}
console.log(solution(5500)); //
console.log(solution(15000)); //
