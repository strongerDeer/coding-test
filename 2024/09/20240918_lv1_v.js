// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let left = "*";
  let right = "#";
  const mainHand = hand === "left" ? "L" : "R";

  function getDistance(from, to) {
    const [x1, y1] = keypad[from];
    const [x2, y2] = keypad[to];
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  return numbers
    .map((num) => {
      if ([1, 4, 7].includes(num)) {
        left = num;
        return "L";
      }
      if ([3, 6, 9].includes(num)) {
        right = num;
        return "R";
      }

      const leftDist = getDistance(left, num);
      const rightDist = getDistance(right, num);

      if (leftDist < rightDist) {
        left = num;
        return "L";
      }
      if (rightDist < leftDist) {
        right = num;
        return "R";
      }

      if (mainHand === "L") {
        left = num;
      } else {
        right = num;
      }
      return mainHand;
    })
    .join("");
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") === "LRLLLRLLRRL"
);
console.log(
  solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left") === "LRLLRRLLLRR"
);
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right") === "LLRLLRLLRL");
