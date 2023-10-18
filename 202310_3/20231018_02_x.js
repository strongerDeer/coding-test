// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// Lv1

function solution(number, limit, power) {
  let answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let count = 1;

    for (let j = 1; j < i; j++) {
      if (i % j === 0) count++;
    }

    arr.push(count);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      answer += power;
    } else {
      answer += arr[i];
    }
  }

  return answer;
}

solution(5, 3, 2);
console.log('------');
solution(10, 3, 2);

console.log('------');
solution(15, 3, 2);
