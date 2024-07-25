function solution(str) {
  let answer = [];

  if (str[0] === ")") return "False";
  for (let s of str) {
    if (s === ")") {
      answer.pop();
    } else {
      answer.push(s);
    }
  }

  return answer.length === 0;
}

console.log(solution("(())()")); // true
console.log(solution("((())()")); // false
