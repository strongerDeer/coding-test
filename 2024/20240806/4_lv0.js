// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  return (
    Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3)
  );
}
console.log(solution(23)); //
console.log(solution(24)); //
console.log(solution(999)); //
