// https://school.programmers.co.kr/learn/courses/30/lessons/250137

function solution(bandage, health, attacks) {
  const [castTime, healPerSecond, bonusHeal] = bandage;
  let currentHealth = health;
  let lastAttackTime = 0;

  for (const [attackTime, damage] of attacks) {
    const healDuration = attackTime - lastAttackTime - 1;
    if (healDuration > 0) {
      const regularHeal = healDuration * healPerSecond;
      const bonusHealCount = Math.floor(healDuration / castTime);
      const totalHeal = regularHeal + bonusHealCount * bonusHeal;

      currentHealth = Math.min(currentHealth + totalHeal, health);
    }

    currentHealth -= damage;
    if (currentHealth <= 0) return -1;

    lastAttackTime = attackTime;
  }
  return currentHealth;
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
