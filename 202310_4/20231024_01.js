// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// Lv1
function solution(s, skip, index) {
  let answer = '';
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  const text = skip.split('').join('|');
  const regExp = new RegExp(text, 'g');
  alphabets = alphabets.replace(regExp, '');

  for (let i = 0; i < s.length; i++) {
    const len = alphabets.length;

    let findIndex = alphabets.indexOf(s[i]);

    if (findIndex !== -1) {
      answer += alphabets[(findIndex + index) % len];
    }
  }

  return answer;
}

solution('aukks', 'wbqd', 5);
solution('aukks', '', 0);
