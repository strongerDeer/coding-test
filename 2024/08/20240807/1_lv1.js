// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  let answer = [];
  let report_history = {};
  let report_user = {};

  for (const id of id_list) {
    report_history[id] = [];
  }

  for (const r of report) {
    const user1 = r.split(" ")[0];
    const user2 = r.split(" ")[1];

    if (!report_history[user1].includes(user2)) {
      report_history[user1].push(user2);

      if (report_user[user2]) {
        report_user[user2]++;
      } else {
        report_user[user2] = 1;
      }
    }
  }

  const report_userArr = Object.keys(report_user).filter(
    (key) => report_user[key] >= k
  );

  for (let id of id_list) {
    let count = 0;
    for (let user of report_userArr) {
      if (report_history[id].includes(user)) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); // [0,0]
