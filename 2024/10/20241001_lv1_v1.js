// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  const h = park.length;
  const w = park[0].length;
  let pos; // [h, w]

  // 시작점
  for (let hPos = 0; hPos < h; hPos++) {
    const wPos = park[hPos].indexOf("S");
    if (wPos !== -1) {
      pos = [hPos, wPos];
      break;
    }
  }

  const move = (direction, steps) => {
    const [dh, dw] = {
      N: [-1, 0],
      S: [1, 0],
      W: [0, -1],
      E: [0, 1],
    }[direction];

    let [nh, nw] = pos;
    for (let i = 0; i < steps; i++) {
      nh += dh;
      nw += dw;
      if (nh < 0 || nh >= h || nw < 0 || nw >= w || park[nh][nw] === "X") {
        return false;
      }
    }
    pos = [nh, nw];
    return true;
  };

  for (const route of routes) {
    const [direction, steps] = route.split(" ");
    move(direction, parseInt(steps));
  }

  return pos;
}
console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]
