// https://school.programmers.co.kr/learn/courses/30/lessons/49994
// 좌표 평면을 벗어났는지 체크
function isValidMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}
function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set();

  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMove(nx, ny)) {
      continue;
    }
    // 객체는 중복 체크가 안됨.
    // A -> B, B -> A 두가지 모두를 고려해야하기때문.
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  console.log(visited);
  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
