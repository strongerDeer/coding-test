// https://school.programmers.co.kr/learn/courses/30/lessons/42584

// 100,0000 -> O(N)
// 현재 값 보다 이전 값이 높으면(가격 떨어짐), 이전 값의 길이를 확정한다.
// ** 길이를 확정한 주식은 이후 계산에서 제외하기

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [0];

  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 가격 떨어짐 -> 기간 확정
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([1, 6, 9, 5])); // [ 3, 2, 1, 0 ]
