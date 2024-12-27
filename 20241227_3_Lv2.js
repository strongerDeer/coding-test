function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (const i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] !== 0) {
        const item = board[j][i - 1];
        if (stack[stack.length - 1] === item) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(item);
        }
        board[j][i - 1] = 0;
        break;
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
