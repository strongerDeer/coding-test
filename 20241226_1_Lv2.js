function isRight(string) {
  let stack = [];
  for (let s of string) {
    if (s === "[") {
      stack.push("[");
    } else if (s === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        return false;
      }
    } else if (s === "(") {
      stack.push("(");
    } else if (s === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    } else if (s === "{") {
      stack.push("{");
    } else {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (isRight(s.slice(i, s.length) + s.slice(0, i))) {
      answer++;
    }
  }
  return answer;
}
console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
