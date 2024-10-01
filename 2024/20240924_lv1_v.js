// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  let answer = [];
  let termObj = {};
  terms.forEach((term) => {
    const termArr = term.split(" ");
    termObj[termArr[0]] = Number(termArr[1]);
  });

  privacies.forEach((privacy, index) => {
    const arr = privacy.split(" ");
    const date = arr[0].split(".");
    let year = Number(date[0]);
    let month = Number(date[1]);
    let day = Number(date[2]) - 1;

    // 날짜 계산
    if (day === 0) {
      day = 28;
      month -= 1;
    }
    if (month === 0) {
      month = 12;
      year -= 1;
    }

    if (termObj[arr[1]] % 12 === 0) {
      year += termObj[arr[1]] / 12;
    } else {
      if (month + termObj[arr[1]] > 12) {
        const m = month + termObj[arr[1]];
        month = m % 12;
        year += Math.floor(m / 12);
      } else {
        month += termObj[arr[1]];
      }
    }

    const calDate = `${year}-${month >= 10 ? month : "0" + month}-${
      day >= 10 ? day : "0" + day
    }`;

    console.log(calDate);
    const periodTime = new Date(calDate).getTime();
    const todayTime = new Date(today).getTime();

    if (periodTime - todayTime < 0) {
      answer.push(index + 1);
    }
  });
  return answer;
}

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
//   )
// ); // [1, 3]
// console.log(
//   solution(
//     "2020.01.01",
//     ["Z 3", "D 5"],
//     [
//       "2019.01.01 D",
//       "2019.11.15 Z",
//       "2019.08.02 D",
//       "2019.07.01 D",
//       "2018.12.28 Z",
//     ]
//   )
// ); // [1, 4, 5]

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.11.20 A", "2021.12.28 B", "2022.02.19 C"]
//   )
// );

// Test Case 2: 유효기간이 긴 경우
// console.log(
//   solution(
//     "2023.01.01",
//     ["A 24", "B 48", "C 96"],
//     ["2020.01.01 A", "2019.01.01 B", "2018.01.01 C"]
//   )
// );

// Test Case 4: 월말 날짜 처리
console.log(solution("2023.05.31", ["A 3"], ["2023.02.28 A", "2023.03.01 A"]));
