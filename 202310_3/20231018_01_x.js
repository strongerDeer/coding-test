// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// Lv1
function solution(n) {
  let answer = [];

  if (n === 2) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      let count = 0;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          count++;
        }
      }
      if (count === 0) {
        answer.push(i);
      }
    }
    return answer.length;
  }
}
console.log('------');
solution(10);
console.log('------');
solution(5);
console.log('------');
solution(2);
