// https://school.programmers.co.kr/learn/courses/30/lessons/140108
function solution(s) {
  let answer = 0;
  let text = s;

  while (text.length > 0) {
    if (text.length === 1) {
      return answer + 1;
    }

    let first = text[0];
    text = text.slice(1);

    let count1 = 1;
    let count2 = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === first) {
        count1++;
      } else {
        count2++;
      }

      if (count1 === count2 || i === text.length - 1) {
        answer++;
        text = text.slice(i + 1);
        break;
      }
    }
  }

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
console.log(solution("abcdefg")); // 1
console.log(solution("aaabb")); // 1
console.log(solution("aabaa")); // 1
