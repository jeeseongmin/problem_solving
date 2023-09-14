// DFS와 BFS
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
[N, M, V] = n.split(" ").map((item) => item * 1);

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < arr.length; i++) {
  [x, y] = arr[i].split(" ").map((item) => item * 1);
  if (graph[x].length > 0) {
    graph[x] = [...graph[x], y];
  } else graph[x].push(y);
  if (graph[y].length > 0) {
    graph[y] = [...graph[y], x];
  } else graph[y].push(x);
}

let visited = Array.from({ length: N + 1 }, () => false);
let dfsAnswer = [];
let bfsAnswer = [];
graph = graph.map((item) => {
  return item.sort((a, b) => a - b);
});

dfs(graph, V, visited);
console.log(dfsAnswer.join(" "));

visited = Array.from({ length: N + 1 }, () => false);
bfs(graph, V, visited);
console.log(bfsAnswer.join(" "));

function dfs(graph, point, _visited) {
  _visited[point] = true;
  dfsAnswer.push(point);
  graph[point].forEach((item) => {
    if (!visited[item]) {
      dfs(graph, item, _visited);
    }
  });
}

function bfs(graph, point, _visited) {
  bfsAnswer.push(point);
  _visited[point] = true;

  queue = graph[point];
  while (queue.length > 0) {
    let target = queue.shift();
    if (!_visited[target]) {
      bfsAnswer.push(target);
      _visited[target] = true;
      let filtered = graph[target].filter((item) => !visited[item]);
      queue = [...queue, ...filtered];
    }
  }
}
