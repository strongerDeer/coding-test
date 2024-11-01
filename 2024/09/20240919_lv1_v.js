// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const types = ["RT", "CF", "JM", "AN"];

  survey.forEach((type, index) => {
    const score = choices[index] - 4;
    if (score >= 0) {
      scores[type[1]] += score;
    } else {
      scores[type[0]] -= score;
    }
  });

  const answer = types
    .map((type) => {
      return scores[type[0]] >= scores[type[1]] ? type[0] : type[1];
    })
    .join("");

  return answer;
}
console.log(
  solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]) === "TCMA"
);
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]) === "RCJA");
