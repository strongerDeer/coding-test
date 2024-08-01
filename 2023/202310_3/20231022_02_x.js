// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  var answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    let index = -1;
    if (reserve.indexOf(lost[i] - 1) > -1) {
      index = reserve.indexOf(lost[i] - 1);
    } else if (reserve.indexOf(lost[i]) > -1) {
      index = reserve.indexOf(lost[i]);
    } else if (reserve.indexOf(lost[i] + 1) > -1) {
      index = reserve.indexOf(lost[i] + 1);
    }
    if (index !== -1) {
      reserve = reserve.slice(index + 1);
      answer++;
    }
  }

  return answer;
}

solution(5, [2, 4], [1, 3, 5]);
console.log('------');
solution(5, [2, 4], [3]);
console.log('------');
solution(3, [3], [1]);
