class Queue {
  item = [];
  front = 0;
  rear = 0;
  push(item) {
    this.item.push(item);
    this.rear++;
  }
  size() {
    return this.rear - this.front;
  }
  pop() {
    return this.item[this.front++];
  }
}
function solution(n, k) {
  const queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  console.log("1", queue);

  while (queue.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop());
    }
    console.log("2", queue);
    queue.pop();
    console.log("3", queue);
  }
  return queue.pop();
}
console.log(solution(5, 2)); // 3

/* 
1 Queue { item: [ 1, 2, 3, 4, 5 ], front: 0, rear: 5 }                [ 1, 2, 3, 4, 5 ]

2 Queue { item: [ 1, 2, 3, 4, 5, 1 ], front: 1, rear: 6 }             [ 2, 3, 4, 5, 1 ]
3 Queue { item: [ 1, 2, 3, 4, 5, 1 ], front: 2, rear: 6 }                              [ 3, 4, 5, 1 ]

2 Queue { item: [ 1, 2, 3, 4, 5, 1, 3 ], front: 3, rear: 7 }          [ 4, 5, 1, 3 ]
3 Queue { item: [ 1, 2, 3, 4, 5, 1, 3 ], front: 4, rear: 7 }                           [ 5, 1, 3 ]

2 Queue { item: [ 1, 2, 3, 4, 5, 1, 3, 5 ], front: 5, rear: 8 }       [ 1, 3, 5 ]
3 Queue { item: [ 1, 2, 3, 4, 5, 1, 3, 5 ], front: 6, rear: 8 }                       [ 3, 5 ]

2 Queue { item: [ 1, 2, 3, 4, 5, 1, 3, 5, 3 ], front: 7, rear: 9 }    [ 5, 3 ]
3 Queue { item: [ 1, 2, 3, 4, 5, 1, 3, 5, 3 ], front: 8, rear: 9 }                    [ 3 ]

*/
