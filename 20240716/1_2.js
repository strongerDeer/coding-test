// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution1(name, yearning, photo) {
  var answer = [];

  photo.map((p, index) => {
    let score = 0;
    for (let i = 0; i < name.length; i++) {
      p.includes(name[i]) ? (score += yearning[i]) : null;
    }
    answer[index] = score;
  });

  return answer;
}

// 방법2
function solution(name, yearning, photo) {
  const scoreMap = name.reduce((map, name, index) => {
    map[name] = yearning[index];
    return map;
  }, {});

  return photo.map((people) =>
    people.reduce((sum, current) => sum + (scoreMap[current] || 0), 0)
  );
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
); // [19, 15, 6]
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
); // [67, 0, 55]
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
); // [5, 15, 0]
