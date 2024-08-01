// https://school.programmers.co.kr/learn/courses/30/lessons/133499
// Lv1

function solution(babbling) {
  var answer = 0;
  const word = ['aya', 'ye', 'woo', 'ma'];

  babbling.forEach((element) => {
    let el = element;

    for (let i = 0; i < word.length; i++) {
      if (el.includes(word[i].repeat(2))) {
        break;
      }
      el = el.split(word[i]).join(' ');
    }

    if (el.split(' ').join('').length === 0) {
      answer++;
    }
  });
  console.log(answer);
  return answer;
}

solution(['aya', 'yee', 'u', 'maa']);
console.log('------');
solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']);
console.log('------');
solution(['ayayyayae']);
