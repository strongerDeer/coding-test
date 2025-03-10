function solution(schedules, timelogs, startday) {
  const n = schedules.length;
  let count = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let h = Math.floor(schedules[i] / 100);
    let m = schedules[i] % 100;

    if (m + 10 >= 60) {
      h += 1;
      m -= 50;
    } else {
      m += 10;
    }

    const allowedTime = h * 100 + m;

    for (let j = 0; j < 7; j++) {
      const dayNum = (startday + j) % 7;

      if (dayNum === 6 || dayNum === 0) continue;

      if (allowedTime >= timelogs[i][j]) {
        count[i] += 1;
      }
    }
  }

  return count.filter((v) => v === 5).length;
}
