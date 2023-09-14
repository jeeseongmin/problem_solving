// 1.하나의 값을 입력받을 때
// const _input = require('fs').readFileSync('../sample.txt').toString().trim();
// const _input = require('fs').readFileSync('/dev/stdin').toString().trim();
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const _input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

class Heap {
  constructor() {
    this.items = [];
  }

  //값을 서로 바꾸는 메소드

  swap(index1, index2) {
    let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음

    this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장

    this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
  }

  //부모 인덱스 구하는 메소드

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  //왼쪽 자식 인덱스 구하는 메소드

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  //오른쪽 자식 인덱스 구하는 메소드

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  //부모 노드 구하는 메소드

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  //왼쪽 자식 노드 구하는 메소드

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  //오른쪽 자식 노드 구하는 메소드

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드

  peek() {
    return this.items[0];
  }

  //힙의 크기(항목 개수)를 반환하는 메소드

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  // MinHeap 클래스는 Heap 클래스를 상속받았으므로 Heap 클래스의 메소드를 모두 사용할 수 있다.
  bubbleUp() {
    let index = this.items.length - 1;

    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));

      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);

      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(index, smallerIndex);

      index = smallerIndex;
    }
  }
  // 힙에 원소를 추가하는 함수
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }
  // 힙에서 원소를 빼내는 함수
  // 최소 힙이라면 최솟값이 빠져나올 것이고 최대힙이라면 최댓값이 빠져나온다.
  poll() {
    let item = this.items[0]; // 첫번째 원소 keep
    this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사
    this.items.pop(); // 맨 마지막 원소 삭제
    this.bubbleDown();
    return item; // keep해둔 값 반환
  }
}

[n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

[N, K] = n.split(" ").map((item) => Number(item));
let info = arr
  .splice(0, N)
  .map((item) => {
    let current = item.split(" ");
    return [current[0] * 1, current[1] * 1];
  })
  .sort((a, b) => b[1] - a[1]);
let bags = arr.map((item) => item * 1).sort((a, b) => a - b);

let answer = 0;

console.log(N, K, info, bags);

// 가장 value가 높은 보석의 무게부터 가장 용량이 적은 배낭에 들어갈 수 있는지 확인
// 만약 배낭이 다 비었다면 끝.

while (bags.length > 0) {
  let bag = bags.shift();

  for (let i = 0; i < info.length; i++) {
    let target = info[i];
    if (bag >= target[0]) {
      answer += target[1];
      info.splice(i, 1);
      break;
    }
  }
}

for (let i = 0; i < info.length; i++) {}
console.log(answer);
