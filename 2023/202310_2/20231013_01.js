// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// Lv.1
function solution(strings, n) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < strings.length; i++) {
    arr.push([strings[i][n], strings[i]]);
  }
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i][1]);
  }

  return answer;
}
solution(['sun', 'bed', 'car'], 1);
solution(['abce', 'abcd', 'cdx'], 2);
