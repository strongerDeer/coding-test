// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution1(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
}

// 코드 정리
function solution(numbers) {
  var set = new Set();
  const len = numbers.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); //[2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); //[2,5,7,9,12]
