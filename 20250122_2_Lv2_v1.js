function solution(numbers) {
  const nums = numbers.split("");
  const primes = new Set(); // 중복 제거를 위해 Set 사용

  // 소수 판별 함수
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 순열 생성 함수
  function getPermutations(fixed, arr) {
    // fixed: 현재까지 만들어진 숫자 문자열
    // arr: 현재 사용할 수 있는 숫자들의 배열

    // 사용할 수 있는 숫자가 하나 이상 있으면
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        // 1. 새로운 숫자 조합 만들기
        const newFixed = fixed + arr[i];

        // 2. 현재 숫자를 제외한 새로운 배열 만들기
        const copyArr = [...arr];
        copyArr.splice(i, 1);

        // 현재 만들어진 숫자가 소수인지 확인
        const num = Number(newFixed);
        if (isPrime(num)) {
          primes.add(num);
        }

        getPermutations(newFixed, copyArr);
      }
    }
  }

  getPermutations("", nums);

  return primes.size;
}
console.log(solution("17")); // 3
console.log(solution("011")); // 2

/*
초기 호출: getPermutations("", ["1", "7"]

fixed: ""
arr: ["1", "7"]


i = 0일 때:
newFixed: "" + "1" = "1"
copyArr: ["7"]  // 1을 제거한 배열
num = 1 (소수 아님)
→ getPermutations("1", ["7"]) 호출


i = 1일 때:
newFixed: "" + "7" = "7"
copyArr: ["1"]  // 7을 제거한 배열
num = 7 (소수임 → primes에 추가: {7})
→ getPermutations("7", ["1"]) 호출

첫 번째 재귀 (i = 0에서): getPermutations("1", ["7"])
fixed: "1"
arr: ["7"]

i = 0:
newFixed: "1" + "7" = "17"
copyArr: []  // 7을 제거한 배열
num = 17 (소수임 → primes에 추가: {7, 17})

첫 번째 재귀 (i = 1에서): getPermutations("7", ["1"])
fixed: "7"
arr: ["1"]

i = 0:
newFixed: "7" + "1" = "71"
copyArr: []  // 1을 제거한 배열
num = 71 (소수임 → primes에 추가: {7, 17, 71})

*/
