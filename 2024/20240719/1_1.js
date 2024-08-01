// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(k, m, score) {
  var answer = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const arr = score.slice(i, i + m);
    answer += arr.length === m ? Math.min(...arr) * m : 0;
  }
  return answer;
}
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
