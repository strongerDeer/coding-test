- `substring`: 문자열 자르기

- `reduce`: 부수효과 없음

- [...String(n)].reverse().map(Number);

---

- 어떤 수의 약수의 개수가 홀수인 경우는 그 수가 완전 제곱수일 때뿐
- 제곱근이 정수면 약수의 개수가 홀수

```
  Number.isInteger(Math.sqrt(i))
```

---

[20230702 1_4.js] https://school.programmers.co.kr/learn/courses/30/lessons/12950

---

`sort()`는 기본적으로 문자열 정렬을 수행.
숫자 정렬을 위해서는 비교함수가 필요!

```
  [1, 4, 2].sort((a, b) => a - b);
```

---

최대 공약수(GCD:Greatest Common Divisor): 유클리드 알고리즘

```js
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
```

```js
function gcd(a, b) {
  const min = Math.min(a, b);
  for (let i = min; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}
```

최대 수(LCM: Least Common Multiple)

```js
let LCM = (a * b) / GCD;
```

- 진수 표현

```js
(10).toString(2); // 10을 2진수로 표현
parseInt(10, 2); // 10을 2진수로 해석. 10진수로 표현
parseInt(10, 2).toString(3); // 10을 2진수로 해석. 3진수로 표현
```

- 배열 중복제거

```
[...new Set(array)]
```

- localeCompare
  참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합

```
'a'.localeCompare('b');  // -1 (또는 다른 음수)
'b'.localeCompare('a');  // 1 (또는 다른 양수)
'a'.localeCompare('a');  // 0
```

- 비트연산 OR

```
  9 (10진수) = 00001001 (2진수)
  30 (10진수) = 00011110 (2진수)
  ---------------------------
  OR 연산 결과 = 00011111 (2진수) = 31 (10진수)
```

- 비트연산 AND

```
  9 (10진수) = 00001001 (2진수)
  30 (10진수) = 00011110 (2진수)
  ---------------------------
  AND 연산 결과 = 00001000 (2진수) = 8 (10진수)
```

- 약수 개수 구하기

```
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
```

- 소수판별

```
  // 소수판별
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

```

- 행렬 곱셈

```js
// 3 * 2
// r1 * c1
[
  [1, 4],
  [3, 2],
  [4, 1],
]
// 2 * 2
// r2 * c2
[
  [3, 3],
  [3, 3],
]
// =>
// 3 * 2
// r1 * c2
[
  [15, 15],
  [15, 15],
  [15, 15]
]

```

```
function solution(arr1, arr2) {
  const r1 = arr1.length;
  const c1 = arr1[0].length;
  const c2 = arr2[0].length;

  const answer = [];
  for (let i = 0; i < r1; i++) {
    answer.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}
```

- 중복을 포함하지 않는다: Set 생각하기.
