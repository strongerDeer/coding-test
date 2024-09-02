// https://school.programmers.co.kr/learn/courses/30/lessons/133499
function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let text = babbling[i];
    let isValid = true;
    let prevWord = "";

    while (text.length > 0 && isValid) {
      let foundMatch = false;

      for (let j = 0; j < words.length; j++) {
        if (text.startsWith(words[j]) && words[j] !== prevWord) {
          text = text.slice(words[j].length);
          prevWord = words[j];
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        isValid = false;
      }
    }
    if (isValid && text.length === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
