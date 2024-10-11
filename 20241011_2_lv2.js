// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  if (yellow === 1) {
    return [3, 3];
  } else if (yellow === 2) {
    return [4, 3];
  } else if (yellow === 3) {
    return [5, 3];
  }

  for (i = 2; i <= Math.floor(yellow / 2); i++) {
    if (yellow % i === 0) {
      if ((i + yellow / i) * 2 + 4 === brown) {
        return [yellow / i + 2, i + 2];
      }
    }
  }
}

console.log(solution(10, 3)); // [4,3]
console.log(solution(10, 2)); // [4,3]
console.log(solution(8, 1)); // [3,3]
console.log(solution(24, 24)); // [8,6]
