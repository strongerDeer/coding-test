//  https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution1(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const result = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];

    answer.push(result);
  }
  return answer;
}

// 코드정리
function solution(array, commands) {
  return commands.map(([start, end, k]) => {
    return array.slice(start - 1, end).sort((a, b) => a - b)[k - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
