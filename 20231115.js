// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// Lv2
function solution(s) {
  let answer = [];
  var arr = s.split(' ');

  for (let word of arr) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }
    answer.push(newWord);
  }

  return answer.join(' ');
}

solution('3people unFollowed me');
solution('for the last week');
