const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
const input = require("fs").readFileSync(path).toString().trim();

[option, array] = input.split("\n");
[N, K] = option.split(" ");
let answer = K;
array = array.split(" ").map((item) => item * 1);
array.sort((a, b) => a - b);
array.map((item) => {
  if (item <= answer) answer++;
});

console.log(answer);
