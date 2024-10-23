// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  const avg = citations.reduce((sum, cur) => sum + cur, 0) / citations.length;

  const max = Math.max(...citations);

  if (avg === 0) return 0;

  for (let i = max; i > 0; i--) {
    const a = citations.filter((num) => num >= i).length;
    if (a >= i) {
      return i;
    }
  }
}
console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([3, 0, 6, 1, 5])); //3
console.log(solution([0, 0, 0, 0, 0])); // 0
console.log(solution([10, 10, 10, 10, 10])); //5
console.log(solution([6, 6, 6, 6, 3, 3])); //4
console.log(solution([4, 4, 4, 5, 0, 1, 2, 3])); //4
console.log(solution([1, 1, 1, 1, 1])); //1
