// https://school.programmers.co.kr/learn/courses/30/lessons/181879
function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((sum, cur) => sum + cur, 0);
  } else {
    return num_list.reduce((mul, cur) => mul * cur, 1);
  }
}
console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));
