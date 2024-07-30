// https://school.programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmd) {
  let answer = "";

  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let history = [];
  let location = k;
  for (let code of cmd) {
    switch (code[0]) {
      case "U":
        location -= Number(code[2]);
        if (location < 0) {
          location = 0;
        }
        break;
      case "D":
        location += Number(code[2]);
        if (location > n - 1) {
          location = n - 1;
        }
        break;
      case "C":
        let remove = arr.splice(location, 1)[0];
        history.push({ [location]: remove });
        if (location === n - 1) {
          location -= 1;
        }
        break;
      case "Z":
        const last = history.pop();

        const his_loc = Number(Object.keys(last)[0]);
        const his_val = Object.values(last)[0];

        if (his_loc === 0) {
          arr.unshift(his_val);
        } else {
          arr.splice(his_loc, 0, his_val);
        }
        break;
    }
  }

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[arr[i]] = "O";
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i]) {
      answer += "O";
    } else {
      answer += "X";
    }
  }

  return answer;
}

console.log(
  solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
); // "OOOOXOOO"

console.log(
  solution(8, 2, [
    "D 2",
    "C",
    "U 3",
    "C",
    "D 4",
    "C",
    "U 2",
    "Z",
    "Z",
    "U 1",
    "C",
  ])
);
// "OOXOXOOO"
