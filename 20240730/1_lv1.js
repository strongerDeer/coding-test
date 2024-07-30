// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < moves.length; i++) {
    let j = 0;

    while (j < board.length) {
      let current = board[j][moves[i] - 1];
      if (current !== 0) {
        if (stack[stack.length - 1] === current) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(current);
        }
        board[j][moves[i] - 1] = 0;
        break;
      } else {
        j++;
      }
    }
  }
  return answer;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
