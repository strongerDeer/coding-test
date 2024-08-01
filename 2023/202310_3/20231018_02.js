// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// Lv1

function solution(number, limit, power) {
  let answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let result = [];
    let index = 1;

    while (index <= Math.sqrt(i)) {
      if (i % index === 0) {
        result.push(index);
        if (i / index !== index) result.push(i / index);
      }
      index++;
    }

    arr.push(result.length);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      answer += power;
    } else {
      answer += arr[i];
    }
  }
  console.log(answer);
  return answer;
}

solution(5, 3, 2);
console.log('------');
solution(10, 3, 2);

console.log('------');
solution(15, 3, 2);
