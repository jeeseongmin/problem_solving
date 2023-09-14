// 공항
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[G, P, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
arr = arr.map((item) => item * 1);

let count = 0;
let visited = Array.from({ length: G * 1 + 1 }, (v, i) => i);

console.log(arr, visited);
for (let i = 0; i < arr.length; i++) {
  if (!find(arr[i])) break;
  else {
    count++;
    visited[find(arr[i])] = find(find(arr[i]) - 1);
  }
}

console.log(count);

function find(index) {
  if (index === visited[index]) return index;
  return (visited[index] = find(visited[index]));
}
