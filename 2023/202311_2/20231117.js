function solution(s) {
  if (s[0] === ')') return false;

  let stackCount = 0;

  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === '(' ? 1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}
solution('()()');
solution('()()');
solution('(())()');
solution(')()(');
solution('(()(');

// 효율성고려해서 stack 형태로 풀기!
// for문보다 for of가 더 느리다
