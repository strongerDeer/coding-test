// https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

function solution(s) {
  let answer = [];
  let sArr = s.slice(2, -2).split("},{");
  sArr.sort((a, b) => a.length - b.length);

  sArr.map((item) => {
    const arr = item.split(",");

    if (arr.length === 1) {
      answer.push(parseInt(arr[0]));
    } else {
      const filtered = arr.filter((str) => !answer.includes(parseInt(str)));
      answer.push(parseInt(filtered[0]));
    }
  });

  return answer;
}
console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); //		[3, 2, 4, 1])
