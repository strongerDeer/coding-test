// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
  var answer = [];

  let filteredNum = lottos.filter((num) => num !== 0);
  let count = 0;
  for (let num of win_nums) {
    for (let j = 0; j < filteredNum.length; j++) {
      if (num === filteredNum[j]) {
        count++;
      }
    }
  }

  switch (count) {
    case 6:
      answer[1] = 1;
      break;
    case 5:
      answer[1] = 2;
      break;
    case 4:
      answer[1] = 3;
      break;
    case 3:
      answer[1] = 4;
      break;
    case 2:
      answer[1] = 5;
      break;
    default:
      answer[1] = 6;
  }

  switch (6 - filteredNum.length + count) {
    case 6:
      answer[0] = 1;
      break;
    case 5:
      answer[0] = 2;
      break;
    case 4:
      answer[0] = 3;
      break;
    case 3:
      answer[0] = 4;
      break;
    case 2:
      answer[0] = 5;
      break;
    default:
      answer[0] = 6;
  }
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
