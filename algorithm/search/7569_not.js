const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
// 1.하나의 값을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim();
// const input = require('fs').readFileSync(path).toString().trim();
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim().split(' ');
[A, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
[M, N, H] = A.split(" ");

let queue = [];

console.log(M, N, H, arr);
let box = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);
let board = [];

for (let i = 0; i < H; i++) {
  let _box = [];
  for (let j = 0; j < N; j++) {
    let target = arr.shift();
    _box.push(target.split(" ").map(Number));
  }
  board.push(_box);
}

console.log(board);

for (let i = 0; i < arr.length; i++) {
  let bx = arr[i].split(" ").map(Number);
  bx.forEach((tomato, pos) => {
    if (tomato === 1) {
      queue.push([i % N, pos, z, 0]);
    }
  });
}

console.log(box);
