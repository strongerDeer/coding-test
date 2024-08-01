// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// Lv2

function solution(n, words) {
  var answer = [];

  let num;
  let stack = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const lastWord = stack[stack.length - 1];
    const lastAlphabet = lastWord[lastWord.length - 1];

    if (stack.includes(words[i]) || lastAlphabet !== words[i][0]) {
      num = i + 1;
      break;
    } else {
      stack.push(words[i]);
    }
  }

  if (!num) {
    console.log([0, 0]);
    return [0, 0];
  }

  if (num % n === 0) {
    answer[0] = n;
    answer[1] = num / n;
  } else {
    answer[0] = num % n;
    answer[1] = Math.floor(num / n) + 1;
  }

  console.log(answer);

  return answer;
}

solution(3, [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
]); // [3, 3]
console.log('----');
solution(5, [
  'hello',
  'observe',
  'effect',
  'take',
  'either',
  'recognize',
  'encourage',
  'ensure',
  'establish',
  'hang',
  'gather',
  'refer',
  'reference',
  'estimate',
  'executive',
]); // [0, 0]
console.log('----');
solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']); // [1, 3]
