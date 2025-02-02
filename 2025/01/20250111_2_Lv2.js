function solution(clothes) {
  let map = new Map();

  for (const [name, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }
  // (cur + 1): 해당 아이템일 착용하지 않는 것 | -1: 아무것도 입지 않는 경우
  return [...map.values()].reduce((cal, cur) => cal * (cur + 1), 1) - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
