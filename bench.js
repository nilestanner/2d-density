const { findPercentFull } = require('./index');

console.time('findPercentFull');
for (let i = 0; i < 1000; i++) {
  findPercentFull(100, 100, 3);
  findPercentFull(500, 500, 5);
}
console.timeEnd('findPercentFull');
