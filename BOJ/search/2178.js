// BOJ 2178 : 미로 탐색
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
[N, M] = n.split(" ").map((item) => item * 1);
let graph = Array.from({ length: N }, (v, i) => []);
let visited = Array.from({ length: N }, (v, i) => []);
graph = graph.map((item, index) => {
  return arr[index].split("").map((element) => element * 1);
});
visited = visited.map((item, index) => {
  return Array.from({ length: M }, () => 0);
});
let pos = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

let queue = [[0, 0]];

visited[0][0] = 1;

while (queue.length > 0) {
  let [x, y] = queue.shift();
  if (x === N - 1 && y === M - 1) {
    console.log(visited[x][y]);
    break;
  }
  pos.forEach((item) => {
    let [x1, y1] = item;
    if (
      0 <= x + x1 &&
      x + x1 <= graph.length - 1 &&
      0 <= y + y1 &&
      y + y1 <= graph[0].length &&
      graph[x + x1][y + y1] === 1 &&
      visited[x + x1][y + y1] === 0
    ) {
      queue.push([x + x1, y + y1]);
      visited[x + x1][y + y1] = visited[x][y] + 1;
    }
  });
}
