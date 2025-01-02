function solution(record) {
  let message = [];
  let user = {};
  for (let r of record) {
    const [state, id, nickname] = r.split(" ");

    switch (state) {
      case "Enter":
        user[id] = nickname;
        message.push([id, "님이 들어왔습니다."]);
        break;
      case "Leave":
        message.push([id, "님이 나갔습니다."]);
        break;
      case "Change":
        user[id] = nickname;
        break;
    }
  }

  return message.map(([id, text]) => user[id] + text);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
); //	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
