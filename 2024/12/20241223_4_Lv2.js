function solution(dirs) {
  var answer = 0;
  let [x, y] = [0, 0];
  let history = [];

  function isInBox(x, y) {
    return x >= -5 && x <= 5 && y >= -5 && y <= 5 ? true : false;
  }

  for (const dir of dirs) {
    switch (dir) {
      case "U":
        if (isInBox(x, y + 1)) {
          if (!history.includes(`${x}${y}${x}${y + 1}`)) {
            history.push(`${x}${y}${x}${y + 1}`);
            history.push(`${x}${y + 1}${x}${y}`);
            answer++;
          }
          y += 1;
        }
        break;
      case "D":
        if (isInBox(x, y - 1)) {
          if (!history.includes(`${x}${y}${x}${y - 1}`)) {
            history.push(`${x}${y}${x}${y - 1}`);
            history.push(`${x}${y - 1}${x}${y}`);
            answer++;
          }
          y -= 1;
        }
        break;
      case "L":
        if (isInBox(x - 1, y)) {
          if (!history.includes(`${x}${y}${x - 1}${y}`)) {
            history.push(`${x}${y}${x - 1}${y}`);
            history.push(`${x - 1}${y}${x}${y}`);
            answer++;
          }
          x -= 1;
        }
        break;
      case "R":
        if (isInBox(x + 1, y)) {
          if (!history.includes(`${x}${y}${x + 1}${y}`)) {
            history.push(`${x}${y}${x + 1}${y}`);
            history.push(`${x + 1}${y}${x}${y}`);
            answer++;
          }
          x += 1;
        }
        break;
    }
  }
  return answer;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
