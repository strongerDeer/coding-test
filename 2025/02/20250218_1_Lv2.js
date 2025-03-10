function solution(players, m, k) {
  let answer = 0;
  let servers = new Array(24).fill(0);

  for (let i = 0; i < 24; i++) {
    // 필요한 서버
    const needServer = Math.floor(players[i] / m);

    // 현재 서버
    const curServer = servers[i];

    if (needServer > curServer) {
      // 증설이 필요한 서버 개수
      const addServer = needServer - curServer;
      answer += addServer;

      // Math.min(i + k, 24) : 배열의 범위를 벗어 나지 않도록하기 위한 안정장치
      // i = 22, k=5, i+k = 27이기 때문
      for (let j = i; j < Math.min(i + k, 24); j++) {
        servers[j] += addServer;
      }
    }
  }

  return answer;
}
