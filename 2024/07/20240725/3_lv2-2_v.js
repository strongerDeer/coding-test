// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  const pairs = { ")": "(", "}": "{", "]": "[" };
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      // 괄호 문자열을 회전시키면서 참조
      const c = s[(i + j) % n];
      console.log(c);

      if ("({[".includes(c)) {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (pairs[c] === top) {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
