// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  const text = "abcdefghijklmnopqrstuvwxyz0123456789-_.";

  let id = new_id.toLowerCase();

  let id2 = "";
  // 문자 제거
  for (let i = 0; i < id.length; i++) {
    if (text.includes(id[i])) {
      id2 += id[i];
    }
  }

  while (id2.includes("..")) {
    if (id2.length < 2) break;
    id2 = id2.replaceAll("..", ".");
  }

  let id3 = id2;
  if (id2[0] === ".") {
    id3 = id2.slice(1);
  }
  if (id3[id3.length - 1] === ".") {
    id3 = id3.slice(0, id3.length - 1);
  }

  if (id3 === "") {
    id3 = "a";
  }

  console.log("5단계: ", id3);

  if (id3.length >= 16) {
    id3 = id3.slice(0, 15);
  }
  if (id3[id3.length - 1] === ".") {
    id3 = id3.slice(0, id3.length - 1);
  }

  if (id3.length <= 2) {
    id3 += id3[id3.length - 1].repeat(3 - id3.length);
  }

  return id3;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm") === "bat.y.abcdefghi");
console.log(solution("z-+.^.") === "z--");
console.log(solution("=.=") === "aaa");
console.log(solution("123_.def") === "123_.def");
console.log(solution("abcdefghijklmn.p") === "abcdefghijklmn");
