// https://school.programmers.co.kr/learn/courses/30/lessons/178871
// Lv1

function solution(players, callings) {
  let answer = players;

  callings.forEach((name) => {
    let index = answer.indexOf(name);
    let temp = answer[index - 1];

    answer[index - 1] = name;
    answer[index] = temp;
  });

  return answer;
}

solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']); //["mumu", "kai", "mine", "soe", "poe"]
