// https://school.programmers.co.kr/learn/courses/30/lessons/12953

// 최대공약수(GCD)
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 최소공배수(LCM
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
}
console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
