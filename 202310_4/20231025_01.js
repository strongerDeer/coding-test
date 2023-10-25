// https://school.programmers.co.kr/learn/courses/30/lessons/161990
// Lv1
function solution(wallpaper) {
  const X = [];
  const Y = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        Y.push(i);
        X.push(j);
      }
    }
  }

  // 오름차순 정렬
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  let lux = Y[0];
  let luy = X[0];
  let rdx = Y[Y.length - 1] + 1;
  let rdy = X[X.length - 1] + 1;

  return [lux, luy, rdx, rdy];
}

solution(['.#...', '..#..', '...#.']); //[0, 1, 3, 4]
console.log('----');
solution(['..', '#.']); //[1, 0, 2, 1]
console.log('----');
solution([
  '..........',
  '.....#....',
  '......##..',
  '...##.....',
  '....#.....',
]); //[1, 3, 5, 8]
console.log('----');
solution([
  '.##...##.',
  '#..#.#..#',
  '#...#...#',
  '.#.....#.',
  '..#...#..',
  '...#.#...',
  '....#....',
]); //[0, 0, 7, 9]
