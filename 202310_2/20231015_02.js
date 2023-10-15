// https://school.programmers.co.kr/learn/courses/30/lessons/132267
// Lv.1
function solution(a, b, n) {
  let answer = 0;
  let emptyBottle = n;

  while (true) {
    if (emptyBottle < a) {
      break;
    }
    let cola = Math.floor(emptyBottle / a) * b;
    emptyBottle = (emptyBottle % a) + cola;
    answer += cola;
  }

  return answer;
}
solution(2, 1, 20);
solution(3, 1, 20);
