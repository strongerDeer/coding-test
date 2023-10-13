// https://school.programmers.co.kr/learn/courses/30/lessons/142086
// Lv.1
function solution(s) {
  var answer = [-1];
  console.log('---');
  for (let i = 1; i < s.length; i++) {
    let alphabet = s[i];
    let preText = s.slice(0, i);

    if (preText.indexOf(alphabet) === -1) {
      answer.push(-1);
    } else {
      answer.push(preText.split('').reverse().indexOf(alphabet) + 1);
    }
  }

  return answer;
}
solution('banana');
solution('foobar');
