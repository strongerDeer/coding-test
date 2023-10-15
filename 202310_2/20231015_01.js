// https://school.programmers.co.kr/learn/courses/30/lessons/134240
// Lv.1
function solution(food) {
  var answer = '';

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    if (count > 0) {
      answer += String(i).repeat(count);
    }
  }
  answer += '0' + answer.split('').reverse().join('');

  return answer;
}
solution([1, 3, 4, 6]);
solution([1, 7, 1, 2]);
