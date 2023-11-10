// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// Lv1
function solution(id_list, report, k) {
  let answer = new Map();

  for (let i = 0; i < report.length; i++) {
    let 신고한id = report[i].split(' ')[0];
    let 이용자id = report[i].split(' ')[1];

    const array = answer.get(이용자id);
    if (array && array.indexOf(신고한id) === -1) {
      array.push(신고한id);
    } else {
      answer.set(이용자id, [신고한id]);
    }
  }

  const findArr = Array.from(answer.values())
    .filter((array) => array.length >= k)
    .flat();

  let result = new Map();
  id_list.map((id) => {
    result.set(id, 0);
  });

  for (let i = 0; i < findArr.length; i++) {
    result.set(findArr[i], result.get(findArr[i]) + 1);
  }

  return [...result.values()];
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2,
); // [2,1,1,0]
solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3); //[0,0]
