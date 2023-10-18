// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// Lv1

/*
에라토스테네스의 체
수학적으로 두 수를 곱할 경우, 2 * 4 = 4 * 2이다.
따라서 특정한 숫자의 제곱근이 소수인지만 판별하면 된다. 
다른 수가 곱해진 배수들은 양의 약수를 3개 이상 가지게 되므로 더 이상 소수가 아니기 때문이다.
*/
function solution(n) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) {
      continue;
    }

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) {
      answer++;
    }
  }

  return answer;
}
// console.log('------');
solution(10);
console.log('------');
solution(5);
console.log('------');
solution(2);
