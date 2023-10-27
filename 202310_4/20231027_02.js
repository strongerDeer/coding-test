function solution(today, terms, privacies) {
  var answer = [];

  let todayYY = today.split('.')[0];
  let todayMM = today.split('.')[1];
  let todayDD = today.split('.')[2];

  let term = {};

  for (let t of terms) {
    term[t.split(' ')[0]] = Number(t.split(' ')[1]);
  }

  for (let i = 0; i < privacies.length; i++) {
    let inputDate = privacies[i].split(' ')[0];
    let inputType = privacies[i].split(' ')[1];

    let YY = inputDate.split('.')[0] * 1;
    let MM = inputDate.split('.')[1] * 1;
    let DD = inputDate.split('.')[2] * 1;

    if (term[inputType] >= 12) {
      let year = Math.floor(term[inputType] / 12);
      let month = term[inputType] % 12;
      YY += year;
      MM += month;
      DD--;
    } else {
      MM += term[inputType];
      DD--;
    }

    if (MM > 12) {
      YY++;
      MM = MM % 12;
    }
    if (DD === 0) {
      MM--;
      DD = 28;
    }

    let inputTime = new Date(
      `${YY}-${String(MM).padStart(2, '0')}-${String(DD).padStart(2, '0')}`,
    ).getTime();
    let todayTime = new Date(`${todayYY}-${todayMM}-${todayDD}`).getTime();

    if (inputTime - todayTime < 0) {
      answer.push(i + 1);
    }
  }

  return answer;
}
solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
); // [1, 3]

console.log('----');
solution(
  '2020.01.01',
  ['Z 3', 'D 5'],
  [
    '2019.01.01 D',
    '2019.11.15 Z',
    '2019.08.02 D',
    '2019.07.01 D',
    '2018.12.28 Z',
  ],
); // [1, 4, 5]
