// https://school.programmers.co.kr/learn/courses/30/lessons/161989
// Lv1

// n: 벽길이 ,  m: 롤러의 길이
function solution(n, m, section) {
  let answer = 0;
  let part = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > part) {
      part = section[i] + m - 1;
      answer++;
    }
  }

  return answer;
}
// console.log('------');
solution(8, 4, [2, 3, 6]);
console.log('------');
solution(5, 4, [1, 3]);
console.log('------');
solution(4, 1, [1, 2, 3, 4]);
console.log('------');
solution(8, 2, [1, 3, 7]);
