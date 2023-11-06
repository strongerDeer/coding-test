// https://school.programmers.co.kr/learn/courses/30/lessons/172928
// Lv1

function solution(park, routes) {
  const maxH = park.length - 1;
  const maxW = park[0].length - 1;
  var answer = [];

  // 시작점 좌표
  let h;
  let w;

  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf('S') !== -1) {
      w = park[i].indexOf('S');
      h = i;
    }
  }

  routes.forEach((str) => {
    const [direction, move] = str.split(' ');

    let tempW = w;
    let tempH = h;
    let flag = true;

    for (let i = 0; i < Number(move); i++) {
      if (direction === 'E') tempW++;
      if (direction === 'W') tempW--;
      if (direction === 'S') tempH++;
      if (direction === 'N') tempH--;
      if (
        tempW > maxW ||
        tempW < 0 ||
        tempH > maxH ||
        tempH < 0 ||
        park[tempH][tempW] === 'X'
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      w = tempW;
      h = tempH;
    }
    answer = [h, w];
  });

  return answer;
}

solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']); //[2,1]
console.log('------');
solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']); //[0,1]
console.log('------');
solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']); //[0,0]
