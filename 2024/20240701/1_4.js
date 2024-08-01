// https://school.programmers.co.kr/learn/courses/30/lessons/77884
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
console.log(solution(1, 2)); // 1
console.log(solution(1, 1)); // 1
console.log(solution(13, 13)); // 43
console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
