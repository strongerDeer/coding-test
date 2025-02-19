function solution(s1, s2) {
  let answer = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (s1[i] === 0) {
        let pos = s1.indexOf(s2[i]);
        s1[i] = s2[i];
        s1[pos] = 0;
      } else {
        let zeroPos = s1.indexOf(0);
        s1[i] = 0;
        s1[zeroPos] = s2[i];
      }
      answer++;
    }
  }

  return answer;
}
console.log(solution([1, 2, 3, 0, 6, 5, 4], [1, 2, 3, 4, 5, 6, 0])); //4
console.log(solution([4, 3, 5, 2, 1, 0, 6], [4, 3, 5, 2, 1, 0, 6])); //0
