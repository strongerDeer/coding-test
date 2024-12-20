// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  let x = Math.floor(board[0] / 2);
  let y = Math.floor(board[1] / 2);

  let [minX, maxX] = [-x, x];
  let [minY, maxY] = [-y, y];
  let [curX, curY] = [0, 0];

  for (const key of keyinput) {
    switch (key) {
      case "left":
        curX = curX - 1 >= minX ? curX - 1 : curX;
        break;
      case "right":
        curX = curX + 1 <= maxX ? curX + 1 : curX;
        break;
      case "up":
        curY = curY + 1 <= maxY ? curY + 1 : curY;
        break;
      case "down":
        curY = curY - 1 >= minY ? curY - 1 : curY;
        break;
    }
  }

  return [curX, curY];
}
console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
