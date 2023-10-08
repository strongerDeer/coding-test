// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// Lv1

function solution(phone_number) {
  let result = '';

  for (i = 0; i < phone_number.length - 4; i++) {
    result += '*';
  }
  result += phone_number.slice(-4);

  return result;
}

solution('01033334444');
solution('027778888');
