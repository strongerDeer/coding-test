function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"];
  const dictionary = [];

  const createWords = (static) => {
    if (static !== "") dictionary.push(static);

    if (static.length === 5) {
      return;
    }

    for (const alphabet of alphabets) {
      createWords(static + alphabet);
    }
  };
  createWords("");

  return dictionary.indexOf(word) + 1;
}
console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
