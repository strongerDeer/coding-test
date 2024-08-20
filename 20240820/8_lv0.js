// https://school.programmers.co.kr/learn/courses/30/lessons/181884
function solution(numbers, n) {
  let answer = 0;

  for (let num of numbers) {
    if (answer <= n) {
      answer += num;
    }
  }
  return answer;
}
console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
