function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"];
  const w1 = 5 ** 0;
  const w2 = 5 ** 1;
  const w3 = 5 ** 2;
  const w4 = 5 ** 3;
  const w5 = 5 ** 4;

  // 각 자리수별 값: 1부터 시작해서 각 자리수마다 5배씩 늘어남
  const values = [
    w1, // 1
    w1 + w2, // 6
    w1 + w2 + w3, // 31
    w1 + w2 + w3 + w4, // 156
    w1 + w2 + w3 + w4 + w5, // 781
  ];
  // A, E, I, O, U -> 5개 / 1 ~ 5
  // AA, AE, AI, AO, AU
  // EA, EE, EI, EO, EU ... -> 25개 / 6(5+1) ~ 30(5+5*5)

  return word.split("").reduce((answer, char, index) => {
    // 현재 알파벳의 인덱스 * 현재 자리수의 값
    return answer + alphabets.indexOf(char) * values[4 - index] + 1;
  }, 0);
}
console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
