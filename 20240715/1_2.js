// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution1(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let one = arr1[i].toString(2).padStart(n, 0);
    let two = arr2[i].toString(2).padStart(n, 0);

    let arr = "";
    for (let j = 0; j < n; j++) {
      arr += one[j] === "1" ? "#" : two[j] === "1" ? "#" : " ";
    }

    answer.push(arr);
  }
  return answer;
}

// 방법 비트연산자

function solution(n, arr1, arr2) {
  return arr1.map((v, i) => {
    console.log(v, arr2[i], v | arr2[i], v & arr2[i]);
    (v | arr2[i])
      .toString(2)
      .padStart(n, 2)
      .replace(/0/g, " ")
      .replace(/1/g, "#");
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); //	["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
