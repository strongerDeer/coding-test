// https://school.programmers.co.kr/learn/courses/30/lessons/172928
// Lv1

function solution(park, routes) {
  var answer = [];

  // 시작점 좌표
  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf('S') !== -1) {
      answer = [i, park[i].indexOf('S')];
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const x = routes[0].length - 1;
    const y = routes.length - 1;

    const direction = routes[i].split(' ')[0];
    const move = routes[i].split(' ')[1] * 1;

    switch (direction) {
      case 'E':
        if (
          answer[1] + move <= x &&
          !park[answer[0]].slice(answer[1] + 1).includes('X')
        ) {
          answer[1] += move;
        }
        break;
      case 'W':
        if (
          answer[1] - move >= 0 &&
          !park[answer[0]].slice(0, answer[1]).includes('X')
        ) {
          answer[1] -= move;
        }
        break;
      case 'S':
        const sArr = [];
        for (let j = answer[0] + 1; j <= y; j++) {
          sArr.push(park[j][answer[1]]);
        }

        if (answer[0] + move <= y && !sArr.includes('X')) {
          answer[0] += move;
        }
        break;
      case 'N':
        const nArr = [];
        for (let j = answer[0] - 1; j >= 0; j--) {
          nArr.push(park[j][answer[1]]);
        }

        if (answer[0] - move >= 0 && !nArr.includes('X')) {
          answer[0] -= move;
        }
        break;
    }
  }
  console.log(answer);
  return answer;
}

solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']); //[2,1]
console.log('------');
solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']); //[0,1]
console.log('------');
solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']); //[0,0]
