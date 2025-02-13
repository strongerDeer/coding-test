// n: 택배 상자 개수
// w: 가로
// num: 꺼내려는 택배상자
function solution(n, w, num) {
  var answer = 0;

  const y = num % w === 0 ? num / w : Math.ceil(num / w);
  let x = num % w === 0 ? w : num % w;

  if (y % 2 === 0) {
    x = num % w === 0 ? 0 : w - (num % w) + 1;
  }

  const top = n % w === 0 ? n / w : Math.ceil(n / w);
  let left = n % w === 0 ? w : n % w;
  if (top % 2 === 0) {
    left = n % w === 0 ? 0 : w - (n % w) + 1;
  }
  console.log([x, y], [left, top]);
  if (top % 2 === 1) {
    // 정방향
    if (left >= x) {
      return top - y + 1;
    } else {
      return top - y;
    }
  } else {
    // 역방향
    if (left <= x) {
      return top - y + 1;
    } else {
      return top - y;
    }
  }
}
