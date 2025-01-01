function createObj(arr) {
  const obj = {};
  for (let item of arr) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  return obj;
}

function solution(want, number, discount) {
  let count = 0;

  function check(list) {
    for (let i = 0; i < want.length; i++) {
      if ((list[want[i]] || 0) < number[i]) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    let list = createObj(discount.slice(i, i + 10));

    if (check(list)) {
      count++;
    }
  }

  return count;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); //	3
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); //	0
