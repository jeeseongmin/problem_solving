// 백준 > 캠핑
[...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => {
    return item.split(" ").map((element) => Number(element));
  });
arr.pop();

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  const [L, P, V] = arr[i];
  console.log(Math.floor((V / P) * L), V % P, L > V % P ? V % P : L - (V % P));
  let sum = Math.floor(V / P) * L + (L > V % P ? V % P : L);

  console.log(`Case ${i + 1}:`, sum);
}
