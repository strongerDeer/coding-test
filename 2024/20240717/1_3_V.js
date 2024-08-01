// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 시간초과
function solution1(number, limit, power) {
  var answer = 0;

  let arr = [1];
  for (let i = 2; i <= number; i++) {
    let count = 2;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    arr[i - 1] = count;
  }

  for (let num of arr) {
    if (num <= limit) {
      answer += num;
    } else {
      answer += power;
    }
  }

  return answer;
}

function solution(number, limit, power) {
  var answer = 0;

  function countDivisors(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        if (i * i === n) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }
    return count;
  }
  for (let i = 1; i <= number; i++) {
    let divisors = countDivisors(i);
    if (divisors <= limit) {
      answer += divisors;
    } else {
      answer += power;
    }
  }

  return answer;
}
console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
