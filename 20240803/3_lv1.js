// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution1(participant, completion) {
  const participantMap = new Map();

  for (let name of participant) {
    if (participantMap.has(name)) {
      participantMap.set(name, participantMap.get(name) + 1);
    } else {
      participantMap.set(name, 1);
    }
  }

  for (let name of completion) {
    if (participantMap.has(name)) {
      participantMap.set(name, participantMap.get(name) - 1);
    }
  }

  for (const [key, value] of participantMap) {
    if (value === 1) {
      return key;
    }
  }
}
function solution(participant, completion) {
  const obj = {};

  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] = -1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]) //"mislav"
);
