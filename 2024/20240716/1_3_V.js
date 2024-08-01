// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (const word of goal) {
    if (cards1[i] === word) {
      i++;
    } else if (cards2[j] === word) {
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
); //	"Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //	"No"
