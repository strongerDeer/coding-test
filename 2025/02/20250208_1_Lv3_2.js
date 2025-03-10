function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);

  let left = 1;
  let right = distance;

  while (left <= right) {
    // 중간 값
    const mid = Math.floor((left + right) / 2);

    let removeCount = 0; // 제거 바위수
    let prevRock = 0; // 이전 바위 위치

    for (let i = 0; i < rocks.length; i++) {
      // 바위 사이 거리가 mid 보다 작거나 같으면: 제거
      if (rocks[i] - prevRock <= mid) {
        removeCount++;
      } else {
        // 크다면: 현재 바위 위치 변경
        prevRock = rocks[i];
      }
    }
    if (distance - prevRock < mid) removeCount++;
    if (removeCount > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
