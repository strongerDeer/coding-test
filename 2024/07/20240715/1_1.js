// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution1(strings, n) {
  const result = [];
  let arr = [];

  for (let i = 0; i < strings.length; i++) {
    arr.push(strings[i][n] + strings[i]);
  }
  arr.sort();

  for (let i = 0; i < strings.length; i++) {
    result.push(arr[i].slice(1));
  }

  return result;
}

//방법2
function solution(strings, n) {
  return strings.sort((a, b) => {
    // a: bed, b:sun
    if (a[n] === b[n]) {
      // 같으면 단어 자체 비교 음수면 바꿈, 양수면 그대로, 0 같음
      return a.localeCompare(b);
    }
    // a[n]: e,  b[e]: u
    return a[n].localeCompare(b[n]);
  });
}

console.log(solution(["bab", "aaa"], 1)); //	["car", "bed", "sun"]
console.log(solution(["sun", "bed", "car"], 1)); //	["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
