// BOJ 2606 : 바이러스
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[computers, lines, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

let graph = Array.from({ length: computers * 1 + 1 }, (v, i) => []);
let visited = [1];

arr.forEach((item) => {
  let [x, y] = item.split(" ").map((elem) => elem * 1);
  if (!graph[x].includes(y)) graph[x].push(y);
  if (!graph[y].includes(x)) graph[y].push(x);
});

let queue = graph[1];

while (queue.length) {
  let target = queue.shift();
  if (!visited.includes(target)) visited.push(target);
  for (let i = 0; i < graph[target].length; i++) {
    if (!visited.includes(graph[target][i])) queue.push(graph[target][i]);
  }
}

console.log(visited.length - 1);
