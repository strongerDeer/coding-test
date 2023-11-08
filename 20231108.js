// https://school.programmers.co.kr/learn/courses/30/lessons/178871
// Lv1

function solution(players, callings) {
  let answer = players;
  const hash = new Map();

  players.forEach((name, index) => {
    hash.set(name, index);
  });

  for (let i = 0; i < callings.length; i++) {
    const name = callings[i];
    let idx = hash.get(name);
    let front = players[idx - 1];

    [answer[idx], answer[idx - 1]] = [answer[idx - 1], answer[idx]];

    hash.set(name, hash.get(name) - 1);
    hash.set(front, hash.get(name) + 1);
  }

  return answer;
}

solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']); //["mumu", "kai", "mine", "soe", "poe"]
