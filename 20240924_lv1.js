// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  let answer = [];
  let termObj = {};
  terms.forEach((term) => {
    const [type, period] = term.split(" ");
    termObj[type] = Number(period);
  });

  // 오늘
  const [toYear, toMonth, toDay] = today.split(".");

  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(" ");
    const [year, month, day] = date.split(".");

    const currentDays = +year * 12 * 28 + +month * 28 + +day;
    const todayDays = +toYear * 12 * 28 + +toMonth * 28 + +toDay;

    if (todayDays - currentDays >= termObj[type] * 28) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.11.20 A", "2021.12.28 B", "2022.02.19 C"]
  )
);

console.log(
  solution(
    "2023.01.01",
    ["A 24", "B 48", "C 96"],
    ["2020.01.01 A", "2019.01.01 B", "2018.01.01 C"]
  )
);

// Test Case 4: 월말 날짜 처리
console.log(solution("2023.05.31", ["A 3"], ["2023.02.28 A", "2023.03.01 A"]));
