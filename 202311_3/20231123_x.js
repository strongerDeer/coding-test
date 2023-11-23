function solution(brown, yellow) {
  var answer = [];

  const sum = brown + yellow;

  if (yellow < 4) {
    switch (yellow) {
      case 1:
        console.log([3, 3]);
        return [3, 3];
      case 2:
        console.log([4, 3]);
        return [4, 3];
      case 3:
        console.log([5, 3]);
        return [5, 3];
    }
  }
  if (yellow >= 4) {
    for (let i = 0; i < Math.ceil(yellow / 2); i++) {
      if (yellow % i === 0 && (yellow / i + 2) * (i + 2) === sum) {
        answer.push([yellow / i + 2, i + 2]);
      }
    }
  }
  console.log(answer[0]);
  return answer[0];
}
