// https://school.programmers.co.kr/learn/courses/30/lessons/82612
function solution(price, money, count) {
  var totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return totalPrice - money > 0 ? totalPrice - money : 0;
}
console.log(solution(3, 20, 4)); // 10
console.log(solution(3, 20, 1)); // 0
