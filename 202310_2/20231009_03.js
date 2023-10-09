// https://school.programmers.co.kr/learn/courses/30/lessons/12918
// Lv1
/*
  s = 'a234'
  s.replace(/[0-9]/g, '') -> a
  s.replace(/^[0-9]/g, '') -> a
  
  [0-9]: 정규식 패턴 모든 숫자 
  ^: 부정
  g: 전체 검색
  /[^0-9]/g
*/
function solution(s) {
  let isText = s.replace(/[0-9]/g, '').length !== s.length;

  console.log(isText);
  if (s.length === 4 || s.length === 6) {
    return isText ? false : true;
  } else {
    return false;
  }
}

solution('a234');
solution('1234');
solution('12345a');
solution('123456');
