// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// Lv1

function solution(s) {
  var answer = 0;
  let x = '';
  let cnt1 = 0;
  let cnt2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (x === '') {
      x = s[i];
    }

    if (x === s[i]) {
      cnt1++;
    } else {
      cnt2++;
    }

    if (cnt1 === cnt2) {
      answer++;
      cnt1 = 0;
      cnt2 = 0;
      x = '';
    }
  }

  if (x.length !== 0) {
    answer++;
  }

  return answer;
}

solution('banana');
console.log('------');
solution('abracadabra');
console.log('------');
solution('aaabbaccccabba');
