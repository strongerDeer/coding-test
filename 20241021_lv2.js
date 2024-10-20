// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(k, tangerine) {
  const map = new Map();

  for (let tan of tangerine) {
    if (map.has(tan)) {
      map.set(tan, map.get(tan) + 1);
    } else {
      map.set(tan, 1);
    }
  }

  const sortedArray = [...map].sort((a, b) => b[1] - a[1]);

  let count = 0;
  let limit = k;

  for (let i = 0; i < sortedArray.length; i++) {
    if (limit - sortedArray[i][1] > 0) {
      count++;
    } else {
      return count + 1;
    }

    limit -= sortedArray[i][1];
  }
  return count;
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
