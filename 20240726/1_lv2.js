// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  let stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("bbcc")); // 1
console.log(solution("aabbcc")); // 1
console.log(solution("aabccb")); // 1
console.log(solution("cdcd")); // 0
