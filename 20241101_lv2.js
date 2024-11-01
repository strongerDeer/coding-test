// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let map = new Map();
  for (const cloth of clothes) {
    const [name, type] = cloth;

    if (map.has(type)) {
      if (!map.get(type).includes(name)) {
        map.set(type, [...map.get(type), name]);
      }
    } else {
      map.set(type, [name]);
    }
  }

  const values = [...map.values()];

  if (map.size === 1) {
    return values[0].length;
  } else {
    return values.reduce((cal, cur) => cal * (cur.length + 1), 1) - 1;
  }
}

// 테스트케이스 1: 각기 다른 종류의 의상이 하나씩만 있는 경우
console.log(
  solution([
    ["hat", "headgear"],
    ["sunglasses", "eyewear"],
    ["shirt", "top"],
    ["pants", "bottom"],
  ])
); // 15 (2^4 - 1)

// 테스트케이스 2: 한 종류의 의상이 여러 개인 경우
console.log(
  solution([
    ["hat1", "headgear"],
    ["hat2", "headgear"],
    ["hat3", "headgear"],
  ])
); // 3

// 테스트케이스 3: 여러 종류의 의상이 여러 개씩 있는 경우
console.log(
  solution([
    ["hat1", "headgear"],
    ["hat2", "headgear"],
    ["glasses1", "eyewear"],
    ["glasses2", "eyewear"],
    ["shirt1", "top"],
    ["shirt2", "top"],
  ])
); // 26

// 테스트케이스 4: 의상이 한 개만 있는 경우
console.log(solution([["hat", "headgear"]])); // 1

// 테스트케이스 5: 최대한 많은 종류와 의상이 있는 경우
console.log(
  solution([
    ["h1", "head"],
    ["h2", "head"],

    ["e1", "eye"],
    ["e2", "eye"],
    ["e3", "eye"],

    ["t1", "top"],
    ["t2", "top"],

    ["b1", "bottom"],
    ["b2", "bottom"],

    ["o1", "outer"],
    ["o2", "outer"],
  ])
); // 180
