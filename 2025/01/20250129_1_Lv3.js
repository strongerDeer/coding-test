function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = times[0]; // 최소 시간: 7
  let right = times[times.length - 1] * n; // 최대 시간: 10 * 6 = 60

  while (left <= right) {
    // 중간 시간
    const mid = Math.floor((left + right) / 2);
    //  7 + 60 / 2 => 33
    //  7 + 32 / 2 => 19
    // 20 + 32 / 2 => 26
    // 27 + 32 / 2 => 29
    // 27 + 28 / 2 => 27
    // 28 + 28 / 2 => 28

    // 심사 가능한 인원
    let possible = 0;

    for (let time of times) {
      possible += Math.floor(mid / time);
    }
    // times:      7 , 10
    // mid: 33 ... 4 +  3 => 7
    // mid: 19 ... 2 +  1 => 3
    // mid: 26 ... 3 +  2 => 5
    // mid: 29 ... 4 +  2 => 6
    // mid: 27 ... 3 +  2 => 5
    // mid: 28 ... 4 +  2 => 6

    if (possible >= n) {
      right = mid - 1; // 32          -> 28        -> 27
    } else {
      left = mid + 1; //     20 -> 27        -> 28
    }
  }

  return left;
}
console.log(solution(6, [7, 10])); // 28
