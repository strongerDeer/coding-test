// https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 공백문자가 연속해서 나올 수 있습니다.
function solution(s) {
  let answer = "";
  const words = s.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      answer += words[i][0].toUpperCase() + words[i].slice(1);
    }

    if (i < words.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"

// https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
  return (strArr = s
    .toLowerCase()
    .split(" ")
    .map((word) => (word === "" ? "" : word[0].toUpperCase() + word.slice(1)))
    .join(" "));
}
