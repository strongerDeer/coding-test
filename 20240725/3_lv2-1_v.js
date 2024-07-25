// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  if (s.length % 2 !== 0) return 0;
  const isValid = (str) => {
    const stack = [];
    const pairs = { ")": "(", "}": "{", "]": "[" };

    for (let char of str) {
      if ("({[".includes(char)) {
        stack.push(char);
      } else if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
    return stack.length === 0;
  };

  let count = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (isValid(s.slice(i) + s.slice(0, i))) {
      count++;
    }
  }
  return count;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
