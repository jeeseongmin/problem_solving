const path = process.platform === 'linux' ? '/dev/stdin' : '../../sample.txt';
const input = require('fs').readFileSync(path).toString().trim();
[n, ...arr] = require('fs').readFileSync(path).toString().trim().split('\n');
[M, N, K] = n.split(' ').map((item) => item * 1);
console.log(M, N, K, arr);