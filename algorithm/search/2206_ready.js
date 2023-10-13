// BOJ 2206 : 벽 부수고 이동하기
// link : https://www.acmicpc.net/problem/2206
const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";

[a, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = a.split(" ").map(Number);
arr = arr.map((item, index) => item.split("").map(Number));
let Min = N * M;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

/**
 * 1. board 값이 0이고 visited가 0일 때 , dfs 진행
 *    이때 visited는 1로 체크
 * 2. 결국 x, y가 n-1, m-1에 도달할 때 결국 min과 비교한다.
 */
function solution(n, m, board) {
  let queue = [];
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  queue.push([0, 0, 1, 1]);

  while (queue.length > 0) {
    const [x, y, op, len] = queue.shift();
    console.log(x, y);
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
    }
  }
}

// function dfs(x, y, _board, _visited, op, len) {
//   console.log(x, y, op);
//   _visited[x][y] = 1;
//   len++;
//   // 목적지에 도달한 경우 최소값이라면 변경
//   if (x === N - 1 && y === M - 1) Min = len < Min ? len : Min;

//   for (let i = 0; i < 4; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (0 <= nx && nx < N && 0 <= ny && ny < M && _visited[nx][ny] === 0) {
//       // 벽이 아닐 떄
//       if (_board[nx][ny] === 0) {
//         dfs(nx, ny, _board, _visited, op, len);
//       }
//       //  벽일 때
//       else {
//         // 벽을 뚫을 수 있는 기회가 있다면 시도
//         if (op === 1) {
//           dfs(nx, ny, _board, _visited, op - 1, len);
//         }
//       }
//     }
//   }
// }

solution(N, M, arr);

console.log(Min === N * M ? -1 : Min);
