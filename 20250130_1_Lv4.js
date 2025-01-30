function solution(distance, rocks, n) {
  let answer = 0;
  rocks.sort((a, b) => a - b);

  let left = 1;
  let right = distance;

  /*
    0,    2,    11,   14,   17,   21,   25
     --2-- --9-- --3-- --3-- --4-- --4--     
  */

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 바위간의 간격의 최소 거리
    let removeCount = 0; // 제거 바위 개수
    let prevRock = 0; // 이전 바위 위치

    for (let i = 0; i < rocks.length; i++) {
      // 바위 사이 거리가 mid보다 작으면 제거
      if (rocks[i] - prevRock < mid) {
        removeCount++; // 바위 제거
      } else {
        prevRock = rocks[i]; // 현재 바위 위치 저장
      }
    }

    if (distance - prevRock < mid) removeCount++;

    if (removeCount > n) {
      right = mid - 1; // 너무 많은 바위를 제거 해야 하므로 거리 줄이기
    } else {
      answer = mid; // 현재 거리 일단 저장
      left = mid + 1; // 더 큰 거리의 가능성을 생각해 거리를 늘려서 시도
    }
  }
  return answer;
}
console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 4
/*
    0,    2,    11,   14,   17,   21,   25
     --2-- --9-- --3-- --3-- --4-- --4--    

      최소 거리 4를 기준으로 할 때:
        1) 0→2: 2 < 4   (❌제거)
        2) 0→11: 11 > 4 (유지)
        3) 11→14: 3 < 4 (❌제거)
        4) 11→17: 6 > 4 (유지)
        5) 17→21: 4 = 4 (유지)
        6) 21→25: 4 = 4 (유지)
  */
