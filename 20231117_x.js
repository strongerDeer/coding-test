function solution(s) {
  let str = s;

  if (s.length % 2 === 1 || s[0] === ')') {
    return false;
  }
  while (str.includes('()')) {
    // str = str.split('()').join('');
    str = str.replace('()', '');
  }
  return str.length === 0;
}
solution('()()');
solution('()()');
solution('(())()');
solution(')()(');
solution('(()(');
