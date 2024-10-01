// https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript

function solution(wallpaper) {
  const x = [];
  const y = [];
  for (let i = 0; i < wallpaper.length; i++) {
    const first = wallpaper[i].indexOf("#");
    const last = wallpaper[i].lastIndexOf("#");

    if (first !== -1 || last !== -1) {
      x.push(i, i + 1);
      y.push(first, last + 1);
    }
  }
  return [Math.min(...x), Math.min(...y), Math.max(...x), Math.max(...y)];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]
