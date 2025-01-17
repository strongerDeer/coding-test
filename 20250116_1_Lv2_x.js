function solution(x, y, n) {
  function add(x, y, n) {
    let count = 0;
    while (x < y) {
      x += n;
      count++;
    }

    if (x === y) {
      return count;
    } else {
      return -1;
    }
  }

  function twoTimes(x, y) {
    let count = 0;
    while (x < y) {
      x *= 2;
      count++;
    }

    if (x === y) {
      return count;
    } else {
      return -1;
    }
  }

  function threeTimes(x, y) {
    let count = 0;
    while (x < y) {
      x *= 3;
      count++;
    }

    if (x === y) {
      return count;
    } else {
      return -1;
    }
  }

  const a = add(x, y, n);
  const b = twoTimes(x, y);
  const c = threeTimes(x, y);

  const arr = [a, b, c].filter((num) => num > -1);

  return arr.length === 0 ? -1 : Math.min(...arr);
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
