function solution(answers) {
  let result = [];
  let map = {
    1: 0,
    2: 0,
    3: 0,
  };
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) {
      map[1] += 1;
    }
    if (answers[i] === b[i % b.length]) {
      map[2] += 1;
    }
    if (answers[i] === c[i % c.length]) {
      map[3] += 1;
    }
  }
  const Max = Math.max(...Object.values(map));

  Object.entries(map).map(([key, value]) => {
    if (value === Max) {
      result.push(Number(key));
    }
  });
  return result;
}
console.log(solution([1, 2, 3, 4, 5])); //[1]
console.log(solution([1, 3, 2, 4, 2])); //[1,2,3]
