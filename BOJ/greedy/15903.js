class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => heap[0];

  insert = (value) => {
    let node = value;
    this.heap.push(node);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > lastInsertedNode) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }
    return rootNode;
  };

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex] <= rootNode) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority) => this.insert(priority);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
  getSize = () => this.heap.length;
}

const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[a, b] = require("fs").readFileSync(path).toString().trim().split("\n");

[N, M] = a.split(" ").map((item) => item * 1);
b = b.split(" ").map((item) => item * 1);

queue = new PriorityQueue();

for (let i = 0; i < b.length; i++) {
  queue.enqueue(b[i], 0);
}

while (M > 0) {
  let a = BigInt(queue.dequeue());
  let b = BigInt(queue.dequeue());
  let sum = a + b;
  queue.enqueue(sum, 0);
  queue.enqueue(sum, 0);
  M--;
}

let answer = BigInt(0);
for (let i = 0; i < queue.heap.length; i++) {
  answer += BigInt(queue.heap[i]);
}

console.log(answer.toString());
