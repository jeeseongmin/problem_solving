const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
const input = require("fs").readFileSync(path).toString().trim();
// [n, ...arr] = require('fs').readFileSync(path).toString().trim().split('\n');
let [N, seat] = input.split("\n");

// seat = seat.split("");
seat = seat.replace(/LL/g, "C").split("").join("*").replace(/C/g, "LL");
seat = "*" + seat + "*";
let count = 0;

while (seat.length > 1) {
  if (seat[0] === "*") seat = seat.slice(2);
  else if (seat[0] === "S") seat = seat.slice(2);
  else if (seat[0] === "L")
    seat = seat[1] === "L" ? seat.slice(3) : seat.slice(2);
  count++;
}

console.log(count);
