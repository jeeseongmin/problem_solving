const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
[, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
arr = arr[0].split(" ").map((item) => item * 1);
arr.sort((a, b) => a - b);

const isEven = arr.length % 2 === 0;

if (isEven) {
  console.log(arr[arr.length / 2 - 1]);
} else {
  console.log(arr[(arr.length - 1) / 2]);
}
