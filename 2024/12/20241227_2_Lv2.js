function solution(prices) {
  let answer = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        answer[i]++;
      }
    }
  }

  return answer;
}
console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
