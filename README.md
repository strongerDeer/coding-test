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

최대 공배수(LCM: Least Common Multiple)

```js
let LCM = (a * b) / GCD;
```

- 진수 표현

```js
(10).toString(2); // 10을 2진수로 표현
parseInt(10, 2); // 10을 2진수로 해석. 10진수로 표현
parseInt(10, 2).toString(3); // 10을 2진수로 해석. 3진수로 표현
```
