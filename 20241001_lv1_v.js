// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  const h = park.length - 1;
  const w = park[0].length - 1;
  let pos = [0, 0]; // [h, w]

  for (let hPos = 0; hPos < park.length; hPos++) {
    const wPos = park[hPos].indexOf("S");
    if (wPos !== -1) {
      pos[0] = hPos;
      pos[1] = wPos;
      break;
    }
  }

  routes.forEach((route) => {
    const [direction, move] = route.split(" ");

    switch (direction) {
      case "E": {
        const wPos = pos[1] + parseInt(move);
        if (wPos > w || wPos < 0) {
          return;
        }

        const findX = park[pos[0]].indexOf("X");

        if (findX === -1) {
          pos[1] = wPos;
        } else if (findX !== -1 && wPos < findX) {
          pos[1] = wPos;
        }
        break;
      }
      case "W": {
        const wPos = pos[1] - parseInt(move);
        if (wPos > w || wPos < 0) {
          return;
        }

        const findX = park[pos[0]].lastIndexOf("X");
        if (findX === -1) {
          pos[1] = wPos;
        } else if (findX !== -1 && wPos > findX) {
          pos[1] = wPos;
        }
        break;
      }
      case "S": {
        const hPos = pos[0] + parseInt(move);

        if (hPos > h || hPos < 0) {
          return;
        }

        let findX;

        for (let i = 0; i < park.length; i++) {
          if (park[i][pos[1]] === "X") {
            findX = i;
            break;
          }
        }

        if (findX === undefined) {
          pos[0] = hPos;
        } else if (findX !== undefined && hPos < findX) {
          pos[0] = hPos;
        }
        break;
      }
      case "N": {
        const hPos = pos[0] - parseInt(move);

        if (hPos > h || hPos < 0) {
          return;
        }

        let findX;
        for (let i = park.length; i >= 0; i--) {
          if (park[i][pos[1]] === "X") {
            findX = i;
            break;
          }
        }

        if (findX === undefined) {
          pos[0] = hPos;
        } else if (findX !== undefined && hPos > findX) {
          pos[0] = hPos;
        }

        break;
      }
    }
  });

  return pos;
}
console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]
