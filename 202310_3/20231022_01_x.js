// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// Lv1

function solution(X, Y) {
  var answer = '';

  let Xarr = [...X].sort((a, b) => b - a);
  let Yarr = [...Y].sort((a, b) => b - a);

  while (Xarr.length > 0) {
    let index = Yarr.indexOf(Xarr[0]);

    if (index > -1) {
      answer += Xarr[0];
      Yarr = Yarr.slice(index + 1);
    }
    Xarr.shift();
  }

  if (answer === '') return '-1';
  if (Number(answer) === 0) return 0;
  return answer;
}

solution('100', '2345');
console.log('------');
solution('100', '203045');
console.log('------');
solution('100', '123450');
console.log('------');
solution('12321', '42531');
console.log('------');
solution('5525', '1255');
