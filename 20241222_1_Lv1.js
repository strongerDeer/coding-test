function solution(N, stages) {
  let count = [];
  let answer = [];
  let result = [];
  const len = stages.length;

  for (let i = 1; i <= N; i++) {
    count[i - 1] = stages.filter((stage) => stage === i).length;
  }
  count.reduce((sum, cur, index) => {
    answer.push([index + 1, cur / (len - sum)]);
    return sum + cur;
  }, 0);

  answer.sort((a, b) => b[1] - a[1]);
  answer.map((item) => result.push(item[0]));
  return result;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
