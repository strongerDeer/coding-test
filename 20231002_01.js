// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// Lv1

function solution(arr) {
  let sum = 0;
  let length = arr.length;
  arr.forEach((item) => {
    sum += item;
  });

  return sum / length;
}

solution([1, 2, 3, 4]);
solution([5, 5]);
