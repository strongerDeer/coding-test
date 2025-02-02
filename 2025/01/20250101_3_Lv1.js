function solution(participant, completion) {
  const participantMap = new Map();

  participant.map((people) => {
    if (participantMap.has(people)) {
      participantMap.set(people, participantMap.get(people) + 1);
    } else {
      participantMap.set(people, 1);
    }
  });
  completion.map((people) => {
    if (participantMap.has(people)) {
      participantMap.set(people, participantMap.get(people) - 1);
    }
  });

  const result = [...participantMap].find(([_, value]) => value === 1);

  return result[0];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //	"leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); //	"vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); //mislav
