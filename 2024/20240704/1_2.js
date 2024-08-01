// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let first = arr[0];
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (first !== arr[i]) {
      answer.push(arr[i]);
      first = arr[i];
    }
  }
  return answer;
}

//방법2
function solution2(arr) {
  // 이전 요소와 같이 않은 것만 필터링!
  return arr.filter((v, i) => v !== arr[i - 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
