// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let count1 = n.toString(2).replaceAll("0", "").length;

  let answer = n + 1;

  while (answer.toString(2).replaceAll("0", "").length !== count1) {
    answer++;
  }

  return answer;
}
console.log(solution(78)); // 83
console.log(solution(15)); // 23
