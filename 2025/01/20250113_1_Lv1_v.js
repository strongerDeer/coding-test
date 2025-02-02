function solution(nums) {
  // 선택할 수 있는 폰켓몬의 수
  const pickCount = nums.length / 2;

  // Object를 사용하여 중복 카운팅
  const pokemonTypes = {};
  let uniqueCount = 0;

  for (const num of nums) {
    if (!pokemonTypes[num]) {
      pokemonTypes[num] = true;
      uniqueCount++;

      // 최적화: 이미 선택할 수 있는 최대 개수에 도달했다면 즉시 반환
      if (uniqueCount >= pickCount) {
        return pickCount;
      }
    }
  }

  return uniqueCount;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
