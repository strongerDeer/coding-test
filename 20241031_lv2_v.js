// https://school.programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
  const HIT = 1;
  const MISS = 5;
  if (cacheSize === 0) return cities.length * MISS;

  cities = cities.map((city) => city.toLowerCase());

  const cache = new Set();
  let totalTime = 0;

  for (const city of cities) {
    // hit
    if (cache.has(city)) {
      cache.delete(city);
      cache.add(city);
      totalTime += HIT;
    }
    // Miss
    else {
      if (cache.size >= cacheSize) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      cache.add(city);
      totalTime += MISS;
    }
  }
  return totalTime;
}
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 60
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 52
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
