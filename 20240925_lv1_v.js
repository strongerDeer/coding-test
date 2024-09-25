// https://school.programmers.co.kr/learn/courses/30/lessons/178871

// 시간초과
/*

function solution(players, callings) {
  let answer = players;

  for (let call of callings) {
    const index = answer.indexOf(call);
    let frontPlayer = answer[index - 1];

    answer[index] = frontPlayer;
    answer[index - 1] = call;
  }

  return answer;
}
  
*/

function solution(players, callings) {
  const playerRanks = {};
  const rankPlayers = {};

  players.forEach((player, index) => {
    playerRanks[player] = index;
    rankPlayers[index] = player;
  });

  callings.forEach((calledPlayer) => {
    const currentRank = playerRanks[calledPlayer];
    const frontPlayer = rankPlayers[currentRank - 1];

    // 순위 교체
    playerRanks[calledPlayer]--;
    playerRanks[frontPlayer]++;

    rankPlayers[currentRank - 1] = calledPlayer;
    rankPlayers[currentRank] = frontPlayer;
  });

  return Object.values(rankPlayers);
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
