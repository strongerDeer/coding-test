// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

function solution(ingredient) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4) {
      const lastFour = stack.slice(-4).join("");
      if (lastFour === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }

  return count;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
