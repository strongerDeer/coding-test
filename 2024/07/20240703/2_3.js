// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
function solution(A, B) {
  const aArr = A.sort((a, b) => a - b);
  const bArr = B.sort((a, b) => b - a);

  var answer = aArr.reduce((sum, cur, i) => sum + cur * bArr[i], 0);
  return answer;
}
console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10

// sort()는 기본적으로 문자열 정렬을 수행. 숫자 정렬을 위해서는 비교함수가 필요!
