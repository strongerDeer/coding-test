// https://school.programmers.co.kr/learn/courses/30/lessons/42885

/*
// 시간 초과
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let answer = 0;

  while (people.length > 0) {
    if (people[0] + people[people.length - 1] <= limit) {
      answer++;
      people.shift();
      people.pop();
    } else {
      answer++;
      people.shift();
    }
  }
  return answer;
}
  
*/
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }
    boats++;
  }

  return boats;
}
console.log(solution([50, 30, 20], 100)); // 1
console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
