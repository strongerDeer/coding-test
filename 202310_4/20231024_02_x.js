// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// Lv1
function solution(ingredient) {
  let stack = [];
  let answer = 0;

  ingredient.forEach((item) => {
    stack.push(item);

    if (stack.length >= 4) {
      const find = stack.slice(-4).join('');
      if (find === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer++;
      }
    }
  });

  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); //2
console.log('----');
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); //0
console.log('----');
solution([1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3]); //2
