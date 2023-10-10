// BOJ 2206 : 벽 부수고 이동하기
// link : https://www.acmicpc.net/problem/2206
const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
// 1.하나의 값을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim();
// const input = require('fs').readFileSync(path).toString().trim();
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때

[a, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = a.split(" ").map(Number);
arr = arr.map((item, index) => item.split("").map(Number));

/**
 * 1. board 값이 0이고 visited가 0일 때 , dfs 진행
 *    이때 visited는 1로 체크
 * 2. 결국 x, y가 n-1, m-1에 도달할 때 결국 min과 비교한다.
 */
function solution(n, m, board) {
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  console.log(visited);
  dfs(0, 0, board, visited, 1);
}

function dfs(x, y, _board, _visited, op) {}

console.log(solution(N, M, arr));
