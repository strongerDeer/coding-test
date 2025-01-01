function solution(s) {
  let stack = [];

  for (const text of s) {
    if (stack.length > 0 && stack[stack.length - 1] === text) {
      stack.pop();
    } else {
      stack.push(text);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
