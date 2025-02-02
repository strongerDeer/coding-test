function solution(x, y, n) {
  let answer = 0;
  while (x <= y) {
    if (x === y) return answer;

    if (x + n === y) {
      answer++;
      return answer;
    } else if ((y / x) % 3 === 0) {
      x *= 3;
      answer++;
    } else if ((y / x) % 2 === 0) {
      x *= 2;
      answer++;
    } else {
      x += n;
      answer++;
    }
  }
  return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
