// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = alphabet.split("").filter((str) => !skip.includes(str));

  var answer = "";
  for (let str of s) {
    let num = (arr.indexOf(str) + index) % arr.length;
    answer += arr[num];
  }
  return answer;
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
