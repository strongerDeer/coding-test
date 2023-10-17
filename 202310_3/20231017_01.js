// https://school.programmers.co.kr/learn/courses/30/lessons/159994
// Lv1
function solution(cards1, cards2, goal) {
  while (true) {
    if (goal.length === 0) {
      console.log('Yes');
      return 'Yes';
    } else if (goal[0] === cards1[0]) {
      goal.shift();
      cards1.shift();
    } else if (goal[0] === cards2[0]) {
      goal.shift();
      cards2.shift();
    } else if (goal[0] !== cards1[0] || goal[0] !== cards2[0]) {
      console.log('No');
      return 'No';
    }
  }
}
solution(
  ['i', 'drink', 'water'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water'],
);
solution(
  ['i', 'water', 'drink'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water'],
);
