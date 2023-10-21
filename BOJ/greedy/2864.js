// 백준 > 5와 6의 차이
[input] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

[A, B] = input.split(" ").map((item) => item * 1);

console.log(A, B);

five = convert(A, 5) + convert(B, 5);
six = convert(A, 6) + convert(B, 6);

console.log(five, six);

function convert(num, type) {
  console.log(
    "convert :",
    String(num)
      .split("")
      .map((item) => {
        if (item === "5") return "6";
        else return item;
      })
      .join(""),
    type
  );
  if (type === 5) {
    return (
      String(num)
        .split("")
        .map((item) => {
          if (item === "6") return "5";
          else return item;
        })
        .join("") * 1
    );
  } else {
    return (
      String(num)
        .split("")
        .map((item) => {
          if (item === "5") return "6";
          else return item;
        })
        .join("") * 1
    );
  }
}
