class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  peek() {
    return this.heap[0] || null;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);

      if (this.heap[parent] <= this.heap[current]) break;

      [this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ];

      current = parent;
    }
  }

  bubbleDown() {
    let current = 0;
    while (true) {
      let smallest = current;
      let left = current * 2 + 1;
      let right = current * 2 + 2;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === current) break;

      // swap
      [this.heap[current], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[current],
      ];
      current = smallest;
    }
  }
}
function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const s of scoville) {
    minHeap.push(s);
  }

  let count = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();

    const newFood = first + second * 2;

    minHeap.push(newFood);
    count++;
  }
  return minHeap.peek() >= K ? count : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
