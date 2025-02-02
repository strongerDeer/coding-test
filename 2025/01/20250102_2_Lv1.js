function solution(id_list, report, k) {
  let result = new Array(id_list.length).fill(0);
  const userObj = {};

  const reportedUserObj = {};
  for (let id of id_list) {
    userObj[id] = [];
  }

  for (let r of report) {
    const [user, reportedUser] = r.split(" ");

    if (!userObj[user].includes(reportedUser)) {
      reportedUserObj[reportedUser] = (reportedUserObj[reportedUser] || 0) + 1;
    }

    if (!userObj[user].includes(reportedUser)) {
      userObj[user].push(reportedUser);
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    userObj[id_list[i]].forEach((id) => {
      if (reportedUserObj[id] >= k) {
        result[i]++;
      }
    });
  }

  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); //	[2,1,1,0]
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); //		[0,0]
