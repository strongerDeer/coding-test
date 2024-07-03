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
