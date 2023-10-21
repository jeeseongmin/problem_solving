// BOJ 11725 : 트리의 부모 찾기
// link : https://www.acmicpc.net/problem/11725
const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";

const [n, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const relation = arr.map((item) => item.split(" ").map(Number));
let answer = Array.from({ length: Number(n) + 1 }, () => 0);

/**
 * 1. answer = 먼저 길이가 n+1인 배열을 만들어놓는다. 요소의 default 값은 0.
 * 2. 길이가 n+1인 graph를 만들고, relation을 쭉 돌면서 추가한다.
 * 3. 루트 요소인 1부터 dfs를 진행하여 parent 노드의 값을 answer 배열에 저장하도록 한다.
 */
function solution(n, relation) {
  answer[1] = 1;
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < relation.length; i++) {
    const [a, b] = relation[i];
    if (!graph[a].includes(b)) graph[a].push(b);
    if (!graph[b].includes(a)) graph[b].push(a);
  }
  dfs(1, graph);
  console.log(answer.slice(2, answer.length).join("\n"));
}

function dfs(num, graph) {
  let children = graph[num];

  children.map((item) => {
    if (answer[item] === 0) {
      answer[item] = num;
      dfs(item, graph);
    }
  });
}
solution(Number(n), relation);
