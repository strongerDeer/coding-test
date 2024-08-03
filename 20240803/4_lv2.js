// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    let arr = discount.slice(i, i + 10);

    let obj = {};

    for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]]) {
        obj[arr[j]] += 1;
      } else {
        obj[arr[j]] = 1;
      }
    }

    let result = [];

    for (let k = 0; k < want.length; k++) {
      if (obj[want[k]] === number[k]) {
        result.push(0);
      } else {
        result.push(1);
      }
    }

    if (result.reduce((sum, cur) => sum + cur, 0) === 0) {
      answer++;
    }
  }

  return answer;
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
); // 3
console.log("--------------------");
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
); // 0
