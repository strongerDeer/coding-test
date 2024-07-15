// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution1(a, b, n) {
  var answer = 0;

  while (n >= a) {
    if (n % a === 0) {
      answer += (n / a) * b;
      n = (n / a) * b;
    } else {
      answer += Math.floor(n / a) * b;
      n = ((n - (n % a)) / a) * b + (n % a);
    }
  }
  return answer;
}

// 코드정리

function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    const exchanged = Math.floor(n / a) * b;
    answer += exchanged;
    n = exchanged + (n % a);
  }
  return answer;
}

console.log(solution(2, 1, 20)); //	19
console.log(solution(3, 2, 3)); //	2
console.log(solution(3, 2, 5)); //	6
console.log(solution(3, 1, 20)); // 9
