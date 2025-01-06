function solution(enroll, referral, seller, amount) {
  let parent = {};
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  // 오브젝트 생성 초기화
  let total = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let curName = seller[i];

    while (money > 0 && curName != "-") {
      const money10per = Math.floor(money / 10);
      total[curName] += money - money10per;
      curName = parent[curName];
      money = money10per;
    }
  }

  return enroll.map((name) => total[name]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
); // [360, 958, 108, 0, 450, 18, 180, 1080]
console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
); // [0, 110, 378, 180, 270, 450, 0, 0]
