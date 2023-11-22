// https://school.programmers.co.kr/learn/courses/30/lessons/178871
// Lv1

// 시간초과
function solution(players, callings) {
  let answer = players;

  callings.forEach((name) => {
    let index = answer.indexOf(name);
    answer = [
      ...answer.slice(0, index - 1),
      name,
      answer[index - 1],
      ...answer.slice(index + 1),
    ];
  });
  return answer;
}

solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']); //["mumu", "kai", "mine", "soe", "poe"]
