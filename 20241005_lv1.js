// https://school.programmers.co.kr/learn/courses/30/lessons/340213

function solution(video_len, pos, op_start, op_end, commands) {
  let totalSec =
    video_len.split(":")[0] * 60 + parseInt(video_len.split(":")[1]);
  const opStart =
    op_start.split(":")[0] * 60 + parseInt(op_start.split(":")[1]);
  const opEnd = op_end.split(":")[0] * 60 + parseInt(op_end.split(":")[1]);
  let curPos = pos.split(":")[0] * 60 + parseInt(pos.split(":")[1]);

  if (curPos >= opStart && curPos <= opEnd) {
    curPos = opEnd;
  }

  for (let command of commands) {
    if (command === "prev") {
      curPos = curPos - 10;

      if (curPos <= 0) {
        curPos = 0;
      }
    } else {
      curPos = curPos + 10;
      if (curPos >= totalSec) {
        curPos = totalSec;
      }
    }
    if (curPos >= opStart && curPos <= opEnd) {
      curPos = opEnd;
    }
  }

  const mm = Math.floor(curPos / 60);
  const ss = curPos % 60;
  return `${mm < 10 ? "0" + mm : mm}:${ss < 10 ? "0" + ss : ss}`;
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"])); // "13:00"
console.log(
  solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"])
); // "06:55"
console.log(solution("07:22", "04:05", "00:15", "04:07", ["next"])); // "04:17"
