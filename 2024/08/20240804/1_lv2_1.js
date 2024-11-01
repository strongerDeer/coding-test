// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  let user = {};
  let answer = [];

  for (const text of record) {
    const [action, id, nickname] = text.split(" ");
    if (action != "Leave") {
      user[id] = nickname;
    }
  }

  for (const text of record) {
    const [action, id] = text.split(" ");
    if (action === "Enter") {
      answer.push(user[id] + "님이 들어왔습니다.");
    } else if (action === "Leave") {
      answer.push(user[id] + "님이 나갔습니다.");
    }
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
