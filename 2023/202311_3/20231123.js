// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// Lv2

function solution(brown, yellow) {
  var answer = [];

  const total = brown + yellow;
  let arr = [];

  for (let i = 0; i < Math.ceil(total / 2); i++) {
    if (total % i === 0) {
      arr.push([total / i, i]);
    }
  }

  answer = arr.filter((value) => (value[0] + value[1]) * 2 - 4 === brown)[0];

  return answer;
}

solution(10, 2); // [4, 3]
console.log('----');
solution(8, 1); // [3, 3]
console.log('----');
solution(24, 24); // [8, 6]
console.log('----');
solution(16, 9); // [8, 6]

console.log('----');
solution(14, 6); // [8, 6]
