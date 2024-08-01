// https://school.programmers.co.kr/learn/courses/30/lessons/12935
// Lv1

function solution(arr) {
  let min = Math.min(...arr);
  let result = arr.filter((element) => element !== min);

  return arr.length <= 1 ? [-1] : result;
}

solution([4, 3, 2, 1]);
solution([10]);
solution([1, 3, 5, 2]);
solution([4, 3, 1, 2]);
solution([4, 3, 1, 1]);
