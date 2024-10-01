// https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript

function solution(wallpaper) {
  let [lux, luy, rdx, rdy] = [Infinity, Infinity, -1, -1];

  wallpaper.forEach((row, i) => {
    if (row.includes("#")) {
      lux = Math.min(lux, i);
      rdx = Math.max(rdx, i + 1);

      const firstFile = row.indexOf("#");
      const lastFile = row.lastIndexOf("#");

      luy = Math.min(luy, firstFile);
      rdy = Math.max(rdy, lastFile + 1);
    }
  });

  return [lux, luy, rdx, rdy];
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
