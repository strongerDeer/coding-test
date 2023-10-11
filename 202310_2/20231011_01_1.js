// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// Lv
function solution(s) {
  let answer = '';

  let words = s.split(' ');

  words.forEach((item, index) => {
    for (let i = 0; i < item.length; i++) {
      if (i % 2 === 0) {
        answer += item[i].toUpperCase();
      } else {
        answer += item[i].toLowerCase();
      }
    }
    if (index < words.length - 1) {
      answer += ' ';
    }
  });

  return answer;
}

solution('try hello world');
solution('tryA helloz worldE');
solution('aaa aaa aaa aaa');
solution('aaaa aaaa aaaa aaaa');
solution('aaa aaaa aaa aaaa');
solution('aaaa aaa aaaa aaa');
solution('AAAA AAA AAAA AAA');
solution('AAA AAAA AAA AAAA');
solution('AAA ');
