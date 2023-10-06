// https://school.programmers.co.kr/learn/courses/30/lessons/12943
// Lv1

function solution(num) {
  let result = num;
  let count = 0;

  const collatz = (num) => {
    if (num % 2 === 0) {
      result = num / 2;
    } else {
      result = num * 3 + 1;
    }
  };
  // 1이 아닐때까지 반복하라!
  while (result !== 1) {
    collatz(result);
    count++;
  }

  if (count > 500) {
    return -1;
  } else {
    return count;
  }
}

solution(6); //8
solution(16); //4
solution(626331); //-1
