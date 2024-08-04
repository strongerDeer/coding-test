// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  let users = {};
  let history = [];
  let answer = [];

  for (let text of record) {
    const [action, id, nickname] = text.split(" ");

    switch (action) {
      case "Enter":
        users[id] = nickname;
        history.push([id, "님이 들어왔습니다."]);
        break;
      case "Leave":
        history.push([id, "님이 나갔습니다."]);
        break;
      case "Change":
        users[id] = nickname;
        break;
    }
  }

  for (let h of history) {
    answer.push(users[h[0]] + h[1]);
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
