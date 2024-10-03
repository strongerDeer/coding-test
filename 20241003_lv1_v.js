// https://school.programmers.co.kr/learn/courses/30/lessons/250137

function solution(bandage, health, attacks) {
  const [maxCount, hp, addHp] = bandage;
  const lastTime = attacks[attacks.length - 1][0];
  let curHealth = health;
  let map = new Map();
  let count = 0;
  attacks.forEach(([time, power]) => {
    map.set(time, power);
  });
  for (let i = 1; i <= lastTime; i++) {
    if (map.has(i)) {
      curHealth -= map.get(i);
      count = 0;
      if (curHealth <= 0) return -1;
    } else {
      curHealth = Math.min(curHealth + hp, health);
      count++;
      if (count === maxCount) {
        curHealth = Math.min(curHealth + addHp, health);
        count = 0;
      }
    }
  }

  return curHealth;
}
console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
); // 5

console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
); // -1
console.log(
  solution([4, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
); // -1
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
); // 3
