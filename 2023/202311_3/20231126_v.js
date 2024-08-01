// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// Lv2

function solution(n) {
  let ans = 0;

  while (n !== 0) {
    if (n % 2 === 1) {
      ans++;
      n -= 1;
    } else {
      n /= 2;
    }
  }

  return ans;
}

solution(5); //2
console.log('----');
solution(6); //2
console.log('----');
solution(5000); //5
