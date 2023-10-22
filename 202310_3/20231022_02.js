// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  var answer = n - lost.length;

  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer += lost.length - realLost.length;

  realLost.sort();

  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }
    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });

  return answer;
}

solution(5, [2, 4], [1, 3, 5]);
console.log('------');
solution(5, [2, 4], [3]);
console.log('------');
solution(3, [3], [1]);
console.log('------');
solution(5, [2, 3], [1, 2]); //4
console.log('------');
solution(5, [4, 2], [3, 5]); //5
