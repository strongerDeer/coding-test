function solution(numbers, target) {
  var answer = 0;

  function dfs(index, sum) {
    const stack = [[index, sum]];

    while (stack.length > 0) {
      const [currentIndex, currentSum] = stack.pop();

      // 모든 숫자를 사용하고,
      if (currentIndex === numbers.length) {
        // 타겟넘버와 같다면,
        if (currentSum === target) {
          answer++;
        }
        continue;
      }
      // 현재 숫자를 더하는 경우와 빼는 경우 스택에 추가
      // index는 증가 , 값은 더하고 빼고 2가지 경우
      stack.push([currentIndex + 1, currentSum + numbers[currentIndex]]);
      stack.push([currentIndex + 1, currentSum - numbers[currentIndex]]);
    }
  }
  dfs(0, 0); // 초기 인덱스와 합계
  return answer;
}
