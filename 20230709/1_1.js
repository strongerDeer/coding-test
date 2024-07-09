// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution1(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }

  let max = sizes[0];

  for (let i = 1; i < sizes.length; i++) {
    if (sizes[i][0] > max[0]) {
      max[0] = sizes[i][0];
    }
    if (sizes[i][1] > max[1]) {
      max[1] = sizes[i][1];
    }
  }
  return max[0] * max[1];
}

// 방법2
function solution(sizes) {
  const [maxWidth, maxHeight] = sizes.reduce(
    ([maxW, maxH], [w, h]) => {
      return [Math.max(maxW, Math.max(w, h)), Math.max(maxH, Math.min(w, h))];
    },
    [0, 0]
  );

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); //4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); //120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); //133
