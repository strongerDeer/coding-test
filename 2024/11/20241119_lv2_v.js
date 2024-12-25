// https://school.programmers.co.kr/learn/courses/30/lessons/132265
function solution(topping) {
  let answer = 0;
  const total = new Map();
  const left = new Set();

  topping.forEach((t) => {
    total.set(t, (total.get(t) || 0) + 1);
  });

  for (let i = 0; i < topping.length; i++) {
    left.add(topping[i]);
    total.set(topping[i], total.get(topping[i]) - 1);

    if (total.get(topping[i]) === 0) {
      total.delete(topping[i]);
    }

    if (left.size === total.size) {
      answer++;
    }
  }

  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
console.log(solution([1, 2, 1, 4])); // 1
console.log(solution([1, 1, 2, 1, 4])); // 1
console.log(solution([1, 2, 1, 4, 4, 4])); // 1
