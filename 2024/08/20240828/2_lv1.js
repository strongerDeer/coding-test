// https://school.programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
  let cal = [];

  for (let i = 0; i < dartResult.length; i++) {
    switch (dartResult[i]) {
      case "S":
        if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
          cal.push(10);
        } else {
          cal.push(Number(dartResult[i - 1]));
        }
        break;
      case "D":
        if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
          cal.push(Math.pow(10, 2));
        } else {
          cal.push(Math.pow(dartResult[i - 1], 2));
        }

        break;
      case "T":
        if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
          cal.push(Math.pow(10, 3));
        } else {
          cal.push(Math.pow(dartResult[i - 1], 3));
        }

        break;
      case "*":
        if (cal.length > 1) {
          cal[cal.length - 2] = cal[cal.length - 2] * 2;
        }
        cal[cal.length - 1] = cal[cal.length - 1] * 2;
        break;
      case "#":
        cal[cal.length - 1] = cal[cal.length - 1] * -1;
        break;
    }
  }

  return cal.reduce((sum, cur) => sum + cur, 0);
}

console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S0T")); // 3
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
console.log(solution("1T2D3D#")); // -4
console.log(solution("1D2S3T*")); // 59
console.log(solution("1D2S#10S")); // 9
