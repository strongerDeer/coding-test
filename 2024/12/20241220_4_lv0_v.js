// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const width = board[0] / 2;
  const height = board[1] / 2;

  function isInBox(x, y, dx, dy) {
    return (
      -width <= x + dx &&
      x + dx <= width &&
      -height <= y + dy &&
      y + dy <= height
    );
  }

  for (const key of keyinput) {
    const [dx, dy] = moves[key];
    if (isInBox(x, y, dx, dy)) {
      x += dx;
      y += dy;
    }
  }
  return [x, y];
}
console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
