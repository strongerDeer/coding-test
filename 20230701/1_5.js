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

//방법 2
function solution1(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    /*
    isInteger 주어진 값이 정수인지 확인
    "어떤 수의 약수의 개수가 홀수인 경우는 그 수가 완전 제곱수일 때뿐"
     */
    // 제곱근이 정수면 약수의 개수가 홀수
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
