// https://school.programmers.co.kr/learn/courses/30/lessons/12980
function solution(n) {
  let ans = 1;

  let num = n;
  while (num > 1) {
    if (num % 2 === 1) {
      ans++;
      num = Math.floor(num / 2);
    } else {
      num = num / 2;
    }
  }

  return ans;
}
console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5
