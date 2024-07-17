// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution1(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        let count = 0;
        for (let i = 1; i * i <= sum; i++) {
          if (sum % i === 0) {
            if (i * i === sum) {
              count += 1;
            } else {
              count += 2;
            }
          }
        }

        if (count === 2) answer++;
      }
    }
  }
  return answer;
}

// 방법2
function solution(nums) {
  var answer = 0;

  // 소수판별
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) answer++;
      }
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
