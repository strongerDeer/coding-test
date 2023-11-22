// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// Lv2

function solution(s) {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
solution('baabaa'); // 1
console.log('-----'); // 1
solution('cdcd'); // 0
