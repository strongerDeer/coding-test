// https://school.programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
  // 학생 초기화
  const students = Array(n).fill(1);

  // 도난 학생
  lost.forEach((student) => students[student - 1]--);

  // 체육복 있는 학생
  reserve.forEach((student) => students[student - 1]++);

  // 빌려주기
  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      // 앞번호
      if (i > 0 && students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      }
      // 뒷번호
      if (i < n - 1 && students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  return students.filter((s) => s > 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(6, [2, 5], [1, 3])); // 5
console.log(solution(5, [2, 4], [3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
