// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  // 스테이지별 도전자 수
  const challenger = new Array(N + 1).fill(0);

  for (let stage of stages) {
    challenger[stage - 1] += 1;
  }

  // 스테이지 별 실패한 사용자 수
  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i - 1] === 0) {
      fails[i] = 0;
      continue;
    }
    fails[i] = challenger[i - 1] / total;

    total -= challenger[i - 1];
  }

  // 정렬
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
