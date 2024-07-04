// https://school.programmers.co.kr/learn/courses/30/lessons/70129

// 방법 1
function solution1(s) {
  let zeroCount = 0;
  let changeCount = 0;

  while (s !== "1") {
    let removeZeroS = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        zeroCount++;
      } else {
        removeZeroS += "1";
      }
    }
    changeCount++;
    s = removeZeroS.length.toString(2);
  }
  return [changeCount, zeroCount];
}

function solution(s) {
  let zeroCount = 0;
  let changeCount = 0;

  while (s !== "1") {
    const originLength = s.length;
    s = s.replaceAll("0", "");
    zeroCount += originLength - s.length;
    s = s.length.toString(2);
    changeCount++;
  }
  return [changeCount, zeroCount];
}
console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]
