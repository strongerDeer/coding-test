function compare(a, b) {
  const t1 = a.toString() + b.toString();
  const t2 = b.toString() + a.toString();
  return t1 > t2 ? -1 : 1;
}

function solution(numbers) {
  const sortedNums = numbers.sort(compare);

  const answer = sortedNums.join("");
  return Number(answer) === 0 ? "0" : answer;
}

console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); //"9534330"
