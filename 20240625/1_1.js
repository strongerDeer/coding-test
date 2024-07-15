// https://school.programmers.co.kr/learn/courses/30/lessons/12916
function solution(s) {
  const s_arr = s.toUpperCase().split("");
  const p_count = [...s_arr].filter((s) => s === "P").length;
  const y_count = [...s_arr].filter((s) => s === "Y").length;

  return p_count === y_count ? true : false;
}
console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
console.log(solution("abv")); // false
