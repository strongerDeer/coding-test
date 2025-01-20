function solution(genres, plays) {
  const answer = [];
  const obj = {};

  // 1. 장르별로 정보 수집
  for (let i = 0; i < genres.length; i++) {
    if (obj[genres[i]]) {
      obj[genres[i]].total += plays[i];
      obj[genres[i]].plays[i] = plays[i];
    } else {
      obj[genres[i]] = { total: plays[i], plays: { [i]: plays[i] } };
    }
  }

  /*
  {
    classic: { 
      total: 1450, 
      plays: { '0': 500, '2': 150, '3': 800 } 
    },
    pop: { 
      total: 3100, 
      plays: { '1': 600, '4': 2500 } 
    }
  }
  */

  // 2. 장르별 총 재생 수로 정렬
  const sortedObj = Object.values(obj).sort((a, b) => b.total - a.total);

  // 3. 장르 내 노래들을 재생 수로 정렬
  const sortedSongs = Object.values(sortedObj).map((item) =>
    Object.entries(item.plays).sort((a, b) => b[1] - a[1])
  );

  // 4. 정렬된 노래 2개 뽑기
  for (const song of sortedSongs) {
    song.length >= 2
      ? answer.push(Number(song[0][0]), Number(song[1][0]))
      : answer.push(Number(song[0][0]));
  }
  return answer;
}
console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]

// 시간 복잡도: O(N log N), 공간 복잡도: O(N)
