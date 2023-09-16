// BOJ 7576 : 토마토
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");

[M, N] = n.split(" ").map((item) => item * 1);
field = arr.map((item) => {
  return item.split(" ").map((elem) => elem * 1);
});

let max = 0;
let queue = [];
let pos = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const dist = [...Array(N)].map(() => Array(M).fill(0));

for (let y = 0; y < field.length; y++) {
  for (let x = 0; x < field[0].length; x++) {
    if (field[y][x] === 1) {
      queue.push([y, x]);
    }
    if (field[y][x] === 0) {
      dist[y][x] = -1;
    }
  }
}

let head = 0;
while (queue.length > head) {
  let [y, x] = queue[head++];

  for (let i = 0; i < 4; i++) {
    let nextX = x + pos[i][1];
    let nextY = y + pos[i][0];
    if (
      nextX < 0 ||
      nextX >= field[0].length ||
      nextY < 0 ||
      nextY >= field.length
    )
      continue;
    if (dist[nextY][nextX] >= 0) continue;

    dist[nextY][nextX] = dist[y][x] + 1;
    queue.push([nextY, nextX]);
  }
}

let day = 0;
for (let i = 0; i < dist.length; i++) {
  for (let j = 0; j < dist[0].length; j++) {
    if (dist[i][j] === -1) {
      console.log(-1);
      return 0;
    }
    day = Math.max(day, dist[i][j]);
  }
}

console.log(day);
