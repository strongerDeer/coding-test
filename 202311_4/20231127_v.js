// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// Lv2

function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => b - a);

  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    var sum = people[left] + people[right];
    if (sum > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    answer++;
  }

  if (left === right) answer++;

  return answer;
}

solution([70, 50, 80, 50], 100); //	3
console.log('----');
solution([70, 80, 50], 100); //	3
