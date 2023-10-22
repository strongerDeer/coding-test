// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// Lv1

function solution(X, Y) {
  var answer = '';

  let Xarr = [...X];
  let Yarr = [...Y];

  for (let i = 9; i >= 0; i--) {
    const curX = Xarr.filter((j) => Number(j) === i).length;
    const curY = Yarr.filter((j) => Number(j) === i).length;

    answer += String(i).repeat(Math.min(curX, curY));
  }

  if (answer === '') return '-1';

  if (Number(answer) === 0) return '0';

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
