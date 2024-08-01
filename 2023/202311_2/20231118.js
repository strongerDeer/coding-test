// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// Lv2
function solution(s) {
  let answer = [0, 0];
  let num = s;

  while (num !== '1') {
    answer[0] += 1;
    answer[1] += num.split('0').length - 1;

    num = num.replaceAll('0', '');
    num = num.length.toString(2);
  }

  return answer;
}
solution('0111010'); //[3,8]
solution('110010101001'); //[3,8]
solution('01110'); //	[3,3]
solution('1111111'); //4,1]);
