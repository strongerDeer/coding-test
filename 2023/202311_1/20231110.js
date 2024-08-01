// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// Lv1
function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const report_list = {};

  id_list.map((id) => {
    report_list[id] = [];
  });

  report.map((id) => {
    const [신고한id, 이용자id] = id.split(' ');
    if (!report_list[이용자id].includes(신고한id)) {
      report_list[이용자id].push(신고한id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((id) => {
        answer[id_list.indexOf(id)] += 1;
      });
    }
  }

  return answer;
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2,
); // [2,1,1,0]
solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3); //[0,0]
