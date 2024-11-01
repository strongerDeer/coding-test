// https://school.programmers.co.kr/learn/courses/30/lessons/131701
function solution(elements) {
  let arr = new Set(elements);

  let ele2 = [...elements, ...elements];

  for (let i = 0; i < elements.length; i++) {
    for (let j = 2; j <= elements.length; j++) {
      const sum = ele2.slice(i, i + j).reduce((sum, cur) => sum + cur, 0);
      arr.add(sum);
    }
  }

  return arr.size;
}
console.log(solution([7, 9, 1, 1, 4])); // 18
