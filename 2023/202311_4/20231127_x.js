// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// Lv2

function solution(people, limit) {
  var answer = 0;

  while (people.length > 0) {
    const a = limit - people[0];
    people.shift();

    const b = people.find((man) => man <= a);
    const index = people.indexOf(b);
    if (b) {
      people = [...people.slice(0, index), ...people.slice(index + 1)];
      answer += 1;
    } else {
      answer += 1;
    }
  }

  return answer;
}

solution([70, 50, 80, 50], 100); //	3
console.log('----');
solution([70, 80, 50], 100); //	3
