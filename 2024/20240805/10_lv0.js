// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  if (price >= 500_000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300_000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100_000) {
    return Math.floor(price * 0.95);
  } else {
    return price;
  }
}
console.log(solution(150000));
console.log(solution(580000));
console.log(solution(100000));
console.log(solution(10000));
console.log(solution(222222));
