function solution(survey, choices) {
  let answer = '';
  let test = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  const check = (S) => {
    switch (S) {
      case 'R':
      case 'T':
        return 0;
      case 'C':
      case 'F':
        return 1;
      case 'J':
      case 'M':
        return 2;
      case 'A':
      case 'N':
        return 3;
    }
  };

  for (let i = 0; i < survey.length; i++) {
    let index = 0;
    let text = '';
    if (choices[i] > 4) {
      text = survey[i][1];
      index = check(text);
      test[index][text] += choices[i] - 4;
    } else if (choices[i] < 4) {
      text = survey[i][0];
      index = check(text);
      test[index][text] += Math.abs(choices[i] - 4);
    }
  }

  if (test[0].R >= test[0].T) {
    answer += 'R';
  } else {
    answer += 'T';
  }

  if (test[1].C >= test[1].F) {
    answer += 'C';
  } else {
    answer += 'F';
  }

  if (test[2].J >= test[2].M) {
    answer += 'J';
  } else {
    answer += 'M';
  }

  if (test[3].A >= test[3].N) {
    answer += 'A';
  } else {
    answer += 'N';
  }

  return answer;
}
solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]); //"TCMA"
solution(['TR', 'RT', 'TR'], [7, 1, 3]); //"RCJA"
