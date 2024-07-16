// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution1(k, score) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      arr.push(score[i]);
    } else {
      if (arr[0] < score[i]) {
        arr.shift(1);
        arr.push(score[i]);
      }
    }
    arr.sort((a, b) => a - b);
    answer.push(arr[0]);
  }

  return answer;
}

function solution(k, score) {
  var hall = [];

  return score.map((s) => {
    if (hall.length < k) {
      hall.push(s);
    } else if (s > hall[hall.length - 1]) {
      hall.pop();
      hall.push(s);
    }
    hall.sort((a, b) => b - a);
    return hall[hall.length - 1];
  });
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); //	[10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); //	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
