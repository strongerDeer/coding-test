// https://school.programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  const NUM = 65536;
  function makeMultiSet(str) {
    const multiSet = [];

    str = str.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
      if (str[i].match(/[a-z]/) && str[i + 1].match(/[a-z]/)) {
        multiSet.push(str[i] + str[i + 1]);
      }
    }
    return multiSet;
  }

  function getIntersectionsSize(arr1, arr2) {
    const temp = [...arr2];
    let count = 0;

    for (let elem of arr1) {
      const idx = temp.indexOf(elem);
      if (idx !== -1) {
        count++;
        temp.splice(idx, 1);
      }
    }
    return count;
  }

  const multiSet1 = makeMultiSet(str1);
  const multiSet2 = makeMultiSet(str2);

  if (multiSet1.length === 0 && multiSet2.length === 0) {
    return NUM;
  }
  const intersection = getIntersectionsSize(multiSet1, multiSet2);
  const union = multiSet1.length + multiSet2.length - intersection;

  return Math.floor((intersection / union) * NUM);
}
console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "	e=m*c^2")); //65536
