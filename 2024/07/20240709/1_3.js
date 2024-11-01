//  https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution1(s) {
  const answer = [-1];
  let str = s[0];

  for (let i = 1; i < s.length; i++) {
    const num = [...str].reverse().join("").indexOf(s[i]);

    if (num !== -1) {
      answer.push([...str].reverse().join("").indexOf(s[i]) + 1);
    } else {
      answer.push(-1);
    }

    str += s[i];
  }
  return answer;
}

// 방법 2
function solution(s) {
  const lastIndex = {};
  return [...s].map((char, i) => {
    console.log(lastIndex);
    const result = lastIndex[char] ? i - lastIndex[char] : -1;
    lastIndex[char] = i;
    return result;
  });
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
