function solution(s) {
  let stack = [];

  for (let item of s) {
    if (item === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution("(())()")); // true
console.log(solution("((())()")); // false
