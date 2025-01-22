function solution(numbers) {
  const numberSet = new Set(); // 중복제거

  // 소수판별
  function isPrime(n) {
    if (n <= 1) return false; // 1 이하는 소수 X
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // 최적화를 위해 제곱근까지만 확인
      if (n % i === 0) return false; // 나누어 떨어지면 소수 X
    }
    return true;
  }

  // DFS 깊이우선탐색
  function dfs(numStr, numbers, visited) {
    // numStr: 현재까지 만든 숫자 문자열
    // numbers: 사용할 수 있는 숫자들의 배열
    // visited: 각 숫자의 사용 여부를 체크하는 배열
    //  '', ['1', '7'], [false, false]

    // 1. 현재 만들어진 숫자가 있다면 소수여부 체크
    if (numStr !== "") {
      // 소수이면 추가
      const num = parseInt(numStr);
      if (isPrime(num)) numberSet.add(num);
    }

    // 2. 사용할 수 있는 모든 숫자 순회
    for (let i = 0; i < numbers.length; i++) {
      // 아직 사용하지 않은 숫자라면
      if (!visited[i]) {
        // 2-1. 현재 숫자를 사용했다고 표시
        visited[i] = true;

        // 2-2. 현재 숫자를 추가하여 재귀 호출
        dfs(numStr + numbers[i], numbers, visited);

        // 2-3. 백트래킹: 현재 숫자를 사용하지 않은 상태로 되돌림.
        visited[i] = false;
      }
    }
  }

  // 숫자 사용 여부를 체크할 배열 초기화
  const visited = new Array(numbers.length).fill(false);

  dfs("", numbers.split(""), visited);

  return numberSet.size;
}
console.log(solution("17")); // 3
console.log(solution("011")); // 2
