function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(solution(118372)); //873211
