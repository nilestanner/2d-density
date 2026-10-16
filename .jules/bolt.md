## 2024-06-25 - Replace map/forEach with standard for loops
**Learning:** In performance-critical 2D array operations (like `createGrid` and `countGrid`), using chained `Array.map` and nested `Array.forEach` creates significant overhead. `Array.map` allocates intermediate arrays, and `Array.forEach` has callback overhead.
**Action:** Use array pre-allocation (`new Array(size).fill(0)`) and standard `for` loops for these operations. This approach reduced execution time for a 10000-iteration benchmark of mixed grid sizes from ~144ms to ~95ms (a ~34% improvement).
