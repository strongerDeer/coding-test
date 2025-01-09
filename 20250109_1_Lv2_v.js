function solution(topping) {
  let answer = 0;

  // 해시 테이블 활용
  const rightMap = new Map(); // 토핑 개수 관리
  const leftSet = new Set(); // 토핑 종류 관리

  for (const t of topping) {
    rightMap.set(t, (rightMap.get(t) || 0) + 1);
  }

  // 투 포인터 개념
  // 배열을 순회하면서 자르는 위치를 한 칸씩 이동
  // 왼쪽/오른쪽으로 나눔
  for (const t of topping) {
    // 토핑 오른쪽에서 왼쪽으로 옮기기
    // 왼쪽 추가
    leftSet.add(t);
    // 오른쪽 삭제
    rightMap.set(t, rightMap.get(t) - 1);

    // 만약 오른쪽에서 토핑이 0개가 된다면 Map에서 삭제
    if (rightMap.get(t) === 0) {
      rightMap.delete(t);
    }

    // 양쪽의 토핑 종류 수가 같으면 증가
    if (leftSet.size === rightMap.size) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 16
console.log(solution([1, 2, 3, 1, 4])); // -1
