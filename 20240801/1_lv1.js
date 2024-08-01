// https://school.programmers.co.kr/learn/courses/30/lessons/159994
// Lv1
function solution1(cards1, cards2, goal) {
  let result = [];
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      const remove = cards1.shift();
      result.push(remove);
    } else if (goal[i] === cards2[0]) {
      const remove = cards2.shift();
      result.push(remove);
    } else {
      return "No";
    }
  }

  return result.join("") === goal.join("") ? "Yes" : "No";
}

function solution(cards1, cards2, goal) {
  let i = 0,
    j = 0;
  for (let word of goal) {
    if (word === cards1[i]) {
      i++;
    } else if (word === cards2[j]) {
      j++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
