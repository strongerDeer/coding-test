// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution1(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let result = s;
  for (let i = 0; i <= 9; i++) {
    result = result.replaceAll(words[i], i);
  }
  return Number(result);
}

// 정규표현식 사용하기
function solution(s) {
  const words = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return Number(
    s.replace(
      /zero|one|two|three|four|five|six|seven|eight|nine/g,
      (match) => words[match]
    )
  );
}

console.log(solution("one4seveneight")); //1478
console.log(solution("one4sevenseveneight")); //1478
console.log(solution("23four5six7")); //234567
console.log(solution("2three45sixseven")); //234567
console.log(solution("123")); //123
console.log(solution("0123")); //123
