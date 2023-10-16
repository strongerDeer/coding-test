// https://school.programmers.co.kr/learn/courses/30/lessons/176963
// Lv1

function solution(name, yearning, photo) {
  var answer = [];

  for (let i = 0; i < photo.length; i++) {
    let arr = 0;
    for (let j = 0; j < name.length; j++) {
      arr +=
        photo[i].filter((people) => people === name[j]).length * yearning[j];
    }
    answer.push(arr);
  }

  return answer;
}
solution(
  ['may', 'kein', 'kain', 'radi'],
  [5, 10, 1, 3],
  [
    ['may', 'kein', 'kain', 'radi'],
    ['may', 'kein', 'brin', 'deny'],
    ['kon', 'kain', 'may', 'coni'],
  ],
);
solution(
  ['kali', 'mari', 'don'],
  [11, 1, 55],
  [
    ['kali', 'mari', 'don'],
    ['pony', 'tom', 'teddy'],
    ['con', 'mona', 'don'],
  ],
);
solution(
  ['may', 'kein', 'kain', 'radi'],
  [5, 10, 1, 3],
  [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
);
