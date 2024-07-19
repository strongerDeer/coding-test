// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let score = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        score[j] += 1;
      }
    }
  }

  const max = Math.max(...score);
  let result = [];
  for (let i = 0; i < 3; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
