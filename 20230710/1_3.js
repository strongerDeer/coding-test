// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  var answer = "";

  for (let i = 1; i < food.length; i++) {
    answer += i.toString().repeat(Math.floor(food[i] / 2));
  }

  return answer + 0 + [...answer].reverse().join("");
}

console.log(solution([1, 1, 1])); //"1223330333221"
console.log(solution([1, 4, 6])); //"11222022211"
console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //"111303111"
