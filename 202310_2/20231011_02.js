// https://school.programmers.co.kr/learn/courses/30/lessons/147355
// Lv
function solution(t, p) {
  const pLength = p.length;
  let arr = [];
  let count = 0;

  for (let i = 0; i <= t.length - pLength; i++) {
    arr.push(t.slice(i, i + p.length));
  }
  arr.forEach((s) => {
    if (Number(s) <= Number(p)) count++;
  });

  return count;
}

solution('3141592', '271');
solution('500220839878', '7');
solution('10203', '15');
