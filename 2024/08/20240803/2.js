// Lv1

function polynomiaHash(str) {
  const p = 31; //소수
  const m = 1_000_000_007; // 버킷 리스트
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}
function solution(stringList, queryList) {
  const hashList = stringList.map((str) => polynomiaHash(str));
  console.log("hashList: ", hashList);

  const result = [];
  for (const query of queryList) {
    const queryHash = polynomiaHash(query);
    console.log("query: ", queryHash);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
function solution(stringList, queryList) {
  let result = [];
  for (let query of queryList) {
    if (stringList.includes(query)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); // [true, false, false, true]
console.log(
  solution1(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); // [true, false, false, true]
