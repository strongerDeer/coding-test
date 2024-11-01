// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const one = "12345".repeat(8);
  const two = "21232425".repeat(5);
  const three = "3311224455".repeat(4);

  let result = [];
  let count = [0, 0, 0];
  let j = 0;
  for (let i = 0; i < answers.length; i++) {
    // console.log(answers[i], one[j], two[j], three[j]);

    if (answers[i] === Number(one[j])) {
      count[0] += 1;
    }
    if (answers[i] === Number(two[j])) {
      count[1] += 1;
    }
    if (answers[i] === Number(three[j])) {
      count[2] += 1;
    }

    j++;
    if (j === 40) {
      j = 0;
    }
  }

  const max = Math.max(...count);

  for (let i = 0; i < 3; i++) {
    if (count[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
