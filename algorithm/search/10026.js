// BOJ 10026 : 적록색약
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
n = Number(n);
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

arr1 = arr.map((item) => {
  return item.split("");
});
arr2 = arr.map((item) => {
  return item.split("").map((elem) => {
    return elem === "G" ? "R" : elem;
  });
});
visited1 = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
visited2 = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

let answer = [0, 0];
// 처음
const dfs = (arr, col, row, visited) => {
  visited[col][row] = true;

  for (let x = 0; x < 4; x++) {
    let nx = col + dx[x];
    let ny = row + dy[x];
    if (
      nx < 0 ||
      nx >= n ||
      ny < 0 ||
      ny >= n ||
      arr[col][row] !== arr[nx][ny] ||
      visited[nx][ny]
    )
      continue;
    dfs(arr, nx, ny, visited);
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited1[i][j]) {
      dfs(arr1, i, j, visited1);
      answer[0]++;
    }
    if (!visited2[i][j]) {
      dfs(arr2, i, j, visited2);
      answer[1]++;
    }
  }
}

console.log(answer.join(" "));
