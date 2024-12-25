// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  function dfs(index, currentSum) {
    // 숫자 모두 다 사용했을 때
    if (index === numbers.length) {
      return currentSum === target ? 1 : 0;
    }

    return (
      // 숫자를 더하는 경우와 빼는 경우의 합
      dfs(index + 1, currentSum + numbers[index]) +
      dfs(index + 1, currentSum - numbers[index])
    );
  }

  return dfs(0, 0);
}
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
