function solution(land) {
  let answer = Math.max(...land[0]);
  let pos = land[0].indexOf(answer);

  for (let i = 1; i < land.length; i++) {
    land[i].splice(pos, 1);

    let max = Math.max(...land[i]);
    answer += max;
    pos = land[i].indexOf(max);
  }
  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
