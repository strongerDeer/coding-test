// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  let answer = ["", "", "", ""];
  let map = new Map();

  map.set("R", 0);
  map.set("T", 0);
  map.set("C", 0);
  map.set("F", 0);
  map.set("J", 0);
  map.set("M", 0);
  map.set("A", 0);
  map.set("N", 0);

  for (let i = 0; i < survey.length; i++) {
    const grade = choices[i] - 4;

    if (grade >= 0) {
      map.set(survey[i][1], map.get(survey[i][1]) + grade);
    } else {
      map.set(survey[i][0], map.get(survey[i][0]) + Math.abs(grade));
    }
  }

  if (map.get("R") >= map.get("T")) {
    answer[0] = "R";
  } else {
    answer[0] = "T";
  }
  if (map.get("C") >= map.get("F")) {
    answer[1] = "C";
  } else {
    answer[1] = "F";
  }
  if (map.get("J") >= map.get("M")) {
    answer[2] = "J";
  } else {
    answer[2] = "M";
  }
  if (map.get("A") >= map.get("N")) {
    answer[3] = "A";
  } else {
    answer[3] = "N";
  }

  return answer.join("");
}
console.log(
  solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]) === "TCMA"
);
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]) === "RCJA");
