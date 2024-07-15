// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
process.stdin.setEncoding("utf8");

function solution(n, m) {
  let result = "";
  for (let i = 0; i < m; i++) {
    result += "*".repeat(n) + "\n";
  }
  return result;
}

// 방법2
// function solution(n, m) {
//   const row = "*".repeat(n) + "\n";
//   return row.repeat(m);
// }

process.stdin.on("data", (data) => {
  const [n, m] = data.split(" ").map(Number);
  console.log(solution(n, m));
});

console.log(solution(5, 3));
