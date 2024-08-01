// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// Lv2
function solution(s) {
  var arr = s.split(' ');
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');
