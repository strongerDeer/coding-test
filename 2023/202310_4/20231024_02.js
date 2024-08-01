// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// Lv1
function solution(ingredient) {
  var answer = 0;

  let str = ingredient.join('');

  while (true) {
    let idx = str.indexOf('1231');

    if (idx === -1) {
      break;
    }
    str = str.slice(0, idx) + str.slice(idx + 4);
    answer++;
  }

  // console.log(answer);
  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); //2
console.log('----');
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); //0
console.log('----');
solution([1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3]); //2
