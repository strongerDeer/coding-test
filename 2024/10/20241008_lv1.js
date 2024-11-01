// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
  let answer = 0;

  let giftValue = {};
  let map = new Map();
  let keys = [];

  // giftValue - friend : [선물지수, 다음달 받을 선물]
  friends.forEach((friend) => (giftValue[friend] = [0, 0]));
  // 모든 주고 받는 것들
  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      map.set(`${friends[i]} ${friends[j]}`, 0);
      map.set(`${friends[j]} ${friends[i]}`, 0);
      keys.push(`${friends[i]} ${friends[j]}`);
    }
  }
  // 선물 지수
  for (let gift of gifts) {
    const [a, b] = gift.split(" ");
    giftValue[a][0] += 1;
    giftValue[b][0] -= 1;
    map.set(gift, map.get(gift) + 1);
  }

  keys.map((key) => {
    const [a, b] = key.split(" ");

    if (map.get(key) < map.get(`${b} ${a}`)) {
      giftValue[b][1]++;
    } else if (map.get(key) > map.get(`${b} ${a}`)) {
      giftValue[a][1]++;
    } else {
      if (giftValue[a][0] > giftValue[b][0]) {
        giftValue[a][1]++;
      } else if (giftValue[a][0] < giftValue[b][0]) {
        giftValue[b][1]++;
      }
    }
  });

  Object.values(giftValue).forEach(
    ([_, value]) => (answer = value > answer ? value : answer)
  );
  return answer;
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "frodo muzi",

      "ryan muzi",
      "ryan muzi",
      "ryan muzi",

      "frodo ryan",
      "neo muzi",
    ]
  )
); // 2
console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "alessandro conan",
      "david alessandro",
      "alessandro david",
    ]
  )
); // 4
console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
); // 0
